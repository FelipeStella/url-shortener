import { Router } from 'express'
import UrlController from 'src/controllers/url.controller'

export const UrlRoute = Router()

UrlRoute.post('/shorten', UrlController.shorten)
UrlRoute.get('/:hash', UrlController.redirect)
