const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoutes"); 
const shopRouter = require("./routes/shopRoutes");


dotenv.config();
const mongoose = require("mongoose");

app.use(express.json());

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Shop API from BlezDev");
});

app.use("/users",userRouter);
app.use("/shop",shopRouter);

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Server started on port no. " + PORT);
    });
})
.catch((error)=>{
    console.log(error);
})