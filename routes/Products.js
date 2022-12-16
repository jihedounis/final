const express=require('express'); 

const productRouter=express.Router(); 
const Product=require('../models/Products'); 



//post 

productRouter.post("/add",  async (req,res)=> {

    try {
        
      const newProduct= new Product(req.body); 
      const result = await newProduct.save();
      res.send({product:result, msg:"product added successfully"});


    } catch (error) {
        console.log(error)
    }
})


//get 

productRouter.get("/",  async (req,res)=> {

  try {
      
    const result = await Product.find();
    res.send({product:result, msg:"all product"});


  } catch (error) {
      console.log(error)
  }
})


//get by id 

productRouter.get("/:id",  async (req,res)=> {

  try {
      
    const result = await Product.findById({_id:req.params.id});
    res.send({product:result, msg:"searched product"});


  } catch (error) {
      console.log(error)
  }
})



//update game 

productRouter.put("/:id",  async (req,res)=> {

  try {
      
    const result = await Product.findByIdAndUpdate({_id:req.params.id}, {$set:{...req.body}});
    res.send({ msg:"product updated "});


  } catch (error) {
      console.log(error)
  }
})

//delete game 

productRouter.delete("/:id",  async (req,res)=> {

  try {
      
    const result = await Product.findByIdAndDelete({_id:req.params.id}, {$set:{...req.body}});
    res.send({ msg:"product deleted "});


  } catch (error) {
      console.log(error)
  }
})


module.exports=productRouter; 