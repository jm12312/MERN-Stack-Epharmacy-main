// server.js
const express = require('express');
const app = express();
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const cors=require('cors')
const authRoute=require('./routes/auth')
const productRoute=require('./routes/product')
const cartRoute=require('./routes/cart')
const messageRoute = require('./routes/message')
const cookieParser=require('cookie-parser')

// Middleware
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database is connected successfully!")

    }
    catch(err){
        console.log(err)
    }
}
dotenv.config()
app.use(express.json())
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(cookieParser())
// Routes
app.use("/api/auth",authRoute)
app.use("/api/product",productRoute)
app.use("/api/cart",cartRoute)
app.use("/api/message", messageRoute)


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);
    connectDB()
});

