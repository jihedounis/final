import React, { useState } from 'react'
import Carousell from './addons/Carousel'
import Preview from './addons/Preview'
import Rate from './addons/Rate'
import logo1 from './images/return.png'
import logo2 from './images/shipping.png'
import logo3 from './images/gift.png'
import logo4 from './images/contact.png'
import Navv from './Navv'


function HomePage() {
  const [ping, setping] = useState(false)
  return (
    <div>
      <Navv />
      <div className='banner' style={{marginTop:"-20px"}}>
      <Carousell/> 
      </div>
      <div class="features">
        <div class="feature">
            <img src={logo2} alt="" class="featureIcon"/>
            <span class="featureTitle" style={{color:'#434242'}}>FREE SHIPPING</span>
            <span class="featureDesc">Free worldwide shipping on all orders.</span>
        </div>
        <div class="feature">
            <img class="featureIcon" src={logo1} alt=""/>
            <span class="featureTitle" style={{color:'#434242'}}>30 DAYS RETURN</span>
            <span class="featureDesc">No question return and easy refund in 14 days.</span>
        </div>
        <div class="feature">
            <img class="featureIcon" src={logo3} alt=""/>
            <span class="featureTitle" style={{color:'#434242'}}>GIFT CARDS</span>
            <span class="featureDesc">Buy gift cards and use coupon codes easily.</span>
        </div>
        <div class="feature">
            <img class="featureIcon" src={logo4} alt=""/>
            <span class="featureTitle" style={{color:'#434242'}}>CONTACT US!</span>
            <span class="featureDesc">Keep in touch via email and support system.</span>
        </div>
    </div>
     <div style={{display:'flex',flexDirection:'column',textAlign:'center',alignItems:"center"}}>
      <h2 style={{color:'black'}}>Who We Are</h2>
      <h2 style={{color:'#22A39F'}}>For clothing as exclusive as you are</h2>
      <p style={{color:'black',marginBlockStart:"1em",marginBlockEnd:"1em",marginInlineStart:"0px",marginInlineEnd:"0px",width:"1000px",fontSize:"20px"}}>Welcome to our anime streetwear shop! We are a one-stop destination for all fans of anime and streetwear fashion. Our shop features a wide range of clothing and accessories inspired by popular anime series, as well as a selection of streetwear brands that share the same love for bold and unique styles.We believe that fashion should be fun and expressive, and that's why we offer a variety of styles to choose from. Whether you're looking for a casual t-shirt to wear on the go or a statement piece to make a statement, we've got you covered.</p>
     </div>
     <Rate/>
     <Preview/>
    </div>
  )
}

export default HomePage