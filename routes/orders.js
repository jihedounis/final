const express=require('express'); 

const orderRouter=express.Router(); 
const Order=require('../models/order'); 



//post 

orderRouter.post("/add",  async (req,res)=> {

    try {
        
      const newOrder= new Order(req.body); 
      const result = await newOrder.save();
      res.send({order:result, msg:"order added successfully"});


    } catch (error) {
        console.log(error)
    }
})


//get 

orderRouter.get("/",  async (req,res)=> {

  try {
      
    const result = await Order.find();
    res.send({order:result, msg:"all orders"});


  } catch (error) {
      console.log(error)
  }
})


//get by id 

orderRouter.get("/:id",  async (req,res)=> {

  try {
      
    const result = await Order.findById({_id:req.params.id});
    res.send({order:result, msg:"searched order"});


  } catch (error) {
      console.log(error)
  }
})



//update game 

orderRouter.put("/:id",  async (req,res)=> {

  try {
      
    const result = await Order.findByIdAndUpdate({_id:req.params.id}, {$set:{...req.body}});
    res.send({ msg:"Order updated "});


  } catch (error) {
      console.log(error)
  }
})

//delete game 

orderRouter.delete("/:id",  async (req,res)=> {

  try {
      
    const result = await Order.findByIdAndDelete({_id:req.params.id}, {$set:{...req.body}});
    res.send({ msg:"Order deleted "});


  } catch (error) {
      console.log(error)
  }
})


module.exports=orderRouter; 