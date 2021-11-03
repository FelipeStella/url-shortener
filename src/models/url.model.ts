import { prop, getModelForClass } from '@typegoose/typegoose'

export class URL {
  @prop({ required: true })
  hash: string

  @prop({ required: true })
  originUrl: string

  @prop({ required: true })
  shortUrl: string
}

const URLModel = getModelForClass(URL)

export default URLModel
