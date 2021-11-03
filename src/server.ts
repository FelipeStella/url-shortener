import express from 'express'
import { errorHandler } from './middlewares/error-handler.middleware'
import { UrlRoute } from './router'
import db from './database/config/mongo.connection'

const host = 'http://localhost'
const port = 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(UrlRoute)

app.use(errorHandler)

app.listen(port, () => console.log(`Server is running in ${host}:${port}`))
db.connect()
