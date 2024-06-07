import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const prisma = new PrismaClient()

app.get('/all', async (req: Request, res: Response) => {
    const users = await prisma.userTest.findMany()
    res.send(users)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
