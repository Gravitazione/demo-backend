import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from './api/v1/models';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const prisma = new PrismaClient();

app.get('/', async (req: Request, res: Response) => {
    try {
        const users = await prisma.userTest.findMany();
        res.send(users);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while fetching users' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
