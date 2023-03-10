const mongoose=require("mongoose");

mongoose.set('strictQuery', false);

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("data base is connected");
    } catch (error) {
        console.log("data base is not connected")
        
    }
};

module.exports=connectDB;