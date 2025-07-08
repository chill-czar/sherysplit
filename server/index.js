import express from "express";
import { configDotenv } from "dotenv";
const app = express();
import User from "./models/user.model.js";
import connectDB from "./config/db.js";
import cors from "cors";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
// adjust path as needed
 const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
connectDB();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is working");
});

app.post("/createuser", async (req, res) => {
  console.log(req.body);
  const { email, username, password } = req.body;


  
  try {
    const user = await User.create({
      email,
      username,
      password,
    });
    await user.save();
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Failed to create user" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // 1. Check if user exists
    const finduser = await User.findOne({ username });

    if (!finduser) {
      return res.status(400).json({ message: "User not found" });
    }
      
      const isMatch = user?.password === password 
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 3. Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    // 4. Send success response
    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

configDotenv();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port no 3000");
});
