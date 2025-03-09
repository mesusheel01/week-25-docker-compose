import express from 'express'
import { PrismaClient } from '@prisma/client'

const pc = new PrismaClient()

const app = express()

app.get('/', async(req,res)=>{
    const data = await pc.user.findMany();
    res.json({
        data
    })
})


app.post('/user', async(req,res)=>{

    try {
        const res = await pc.user.create({
            data:{
                username: Math.random().toString(),
                password: Math.random().toString()
            }
        })
    } catch (error) {
        console.log(error)
    }
})
