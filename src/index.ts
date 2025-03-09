import express from 'express'
import { PrismaClient } from '@prisma/client'

const pc = new PrismaClient()

const app = express()
const port = 3000

app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const data = await pc.user.findMany();
        res.json({ data }) // ✅ Only send one response
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
})

app.post('/user', async (req, res) => {
    try {
        const response = await pc.user.create({
            data: {
                username: Math.random().toString(),
                password: Math.random().toString()
            }
        })
        console.log('hi')
        res.send("User created successfully: " + JSON.stringify(response))
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'User creation failed' })
    }
})

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})
