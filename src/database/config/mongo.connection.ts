import mongoose from 'mongoose'
import 'dotenv/config'
import { DatabaseError } from 'src/models/errors'

class MongoConnection {
  public async connect () {
    try {
      await mongoose.connect(process.env.MONGO_CONNECTION_STRING)
      console.log('connected database')
    } catch (error) {
      console.log(error)
      throw new DatabaseError('Database access error', error)
    }
  }
}

export default new MongoConnection()
