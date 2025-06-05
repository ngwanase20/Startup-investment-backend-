import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
import authRoutes from './routes/auth.js'
import startupRoutes from './routes/startups.js'
import investRoutes from './routes/investments.js'

dotenv.config()
const prisma = new PrismaClient()
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/startups', startupRoutes)
app.use('/api/investments', investRoutes)

app.listen(4000, () => {
  console.log('Backend running at http://localhost:4000')
})
