import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv()
const connectDB = async () => {
    try {
        // console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongodb Connected ")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB