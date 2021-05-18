import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import * as path from 'path'
import indexRouter from './routes'

const app = express()

app.set('port', process.env.PORT || 4000)

//middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(helmet())

/* router */

app.use(indexRouter)

app.use(express.static(path.resolve('./public')))

export default app