import express from 'express'
import { configDotenv } from 'dotenv'
const app = express()
import User from './models/user.model.js'
import connectDB from './config/db.js'
import cors from "cors"

connectDB()
app.use(cors({
    origin: "*"
}))
app.use(express.json())


app.get('/', (req, res) => {
    res.send("server is working")
})

app.post('/createuser', async (req, res) => {
    console.log(req.body)
    const { email, username, password } = req.body
    try {
        const user = await User.create({
            email,username , password
        })
        await user.save()
    } catch (error) {
        console.error(error)
        res.status(500).json({erro : "Failed to create user"})
    }
})




configDotenv()
const PORT = process.env.PORT || 3000
app.listen(PORT,()=> {
    console.log("Server is running on port no 3000")
})

