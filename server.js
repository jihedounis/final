console.clear();
const express=require("express");
const cors=require("cors");
const connectDB=require('./config/dbConnect');
const app=express();
app.use(express.json());
require("dotenv").config();

//importing passport
const passport=require("passport");

//connect to DB
connectDB();

//convert json:middleware
app.use(express.json());
app.use(cors());
//running passport
app.use(passport.initialize());



app.use("/user",require("./routes/user"));
app.use("/product", require("./routes/Products"));
app.use("/order", require("./routes/orders"));

const PORT=process.env.PORT;
app.listen(PORT,(err)=>
err ? console.log(err) : console.log("server is running")
);
