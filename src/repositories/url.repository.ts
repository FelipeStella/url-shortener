import { DatabaseError } from 'src/models/errors'
import URLModel, { URL } from '../models/url.model'

class UrlRepository {
  async findUrl (originUrl: string): Promise<URL> {
    try {
      const url = await URLModel.findOne({ originUrl })
      return url
    } catch (error) {
      throw new DatabaseError('Database query error', error)
    }
  }

  async findUrlByHash (hash: string): Promise<URL> {
    try {
      const url = await URLModel.findOne({ hash })
      return url
    } catch (error) {
      throw new DatabaseError('Database query error', error)
    }
  }

  async createUrl (url: URL): Promise<URL> {
    try {
      const newUrl = await URLModel.create(url)
      return newUrl
    } catch (error) {
      throw new DatabaseError('Database query error', error)
    }
  }
}

export default new UrlRepository()
