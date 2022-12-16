import React from 'react'
import { useSelector } from 'react-redux'
import Navv from './Navv';
import ProductDesc from './ProductDesc';
import "../component/style/product.css";

function Product({ping, setping}) {
    const products=useSelector((state)=>state.product.product);
    
  return (
   <div className='box'>
  <Navv/>
    {products?.map((el)=><div class="cardd">

<div class="imgBox">
  <img src={el.img} alt="mouse corsair" class="mouse"/>
</div>

<div class="contentBox">
  <h3>{el.name}</h3>
  <h2 class="price">{el.prix}</h2>
  <a href="#" class="buy"><ProductDesc product={el} ping={ping} setping={setping}/></a>
</div>
   </div> )}
    

</div>
  )
}

export default Product