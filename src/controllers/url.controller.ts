import { NextFunction, Request, Response } from 'express'
import shortId from 'shortid'
import statusCode from 'http-status-codes'
import 'dotenv/config'
import UrlRepository from '../repositories/url.repository'
import { URL } from '../models/url.model'
import { DatabaseError } from 'src/models/errors'

class UrlController {
  async shorten (req: Request, res: Response, next: NextFunction) {
    try {
      const { originUrl } = req.body
      let saveUrl: URL = await UrlRepository.findUrl(originUrl)
      if (!saveUrl) {
        const hash = shortId.generate()
        const shortUrl = `${process.env.API_URL}/${hash}`
        const newUrl: URL = {
          hash: hash,
          originUrl: originUrl,
          shortUrl: shortUrl
        }
        saveUrl = await UrlRepository.createUrl(newUrl)
      }
      return res.status(statusCode.CREATED).json(saveUrl)
    } catch (error) {
      next(error)
    }
  }

  async redirect (req: Request, res: Response, next: NextFunction) {
    try {
      const { hash } = req.params
      const url = await UrlRepository.findUrlByHash(hash)
      if (!url) {
        throw new DatabaseError('URL not found')
      }
      res.redirect(url.originUrl)
    } catch (error) {
      next(error)
    }
  }
}

export default new UrlController()
