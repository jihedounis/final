import React from 'react'
import model1 from  '../images/model 1.jpg'
import model2 from  '../images/model 2.jpg'
import model3 from  '../images/model 3.jpg'
import hoodie from '../images/hoodie1.jpg'
function Preview() {
  return (
    <div>
        <div class="gallery">
        <div class="galleryItem">
            <h1 class="galleryTitle" style={{color:'#434242'}}>Be Unique</h1>
            <img src={model1} alt="" class="galleryImg"/>
        </div>
        <div class="galleryItem">
            <img src={model2} alt="" class="galleryImg"/>
            <h1 class="galleryTitle" style={{color:'#434242'}}>Be Modern</h1>
        </div>
        <div class="galleryItem">
            <h1 class="galleryTitle" style={{color:'#434242'}}>Be Fashionable</h1>
            <img src={model3} alt="" class="galleryImg"/>
        </div>
    </div>
    <div class="newSeason" style={{display:"flex"}}>
    <div class="nsItem" style={{flex:"1",backgroundColor:"black",color:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"}}>
            <h3 class="nsTitleSm">WINTER NEW ARRIVALS</h3>
            <h1 class="nsTitle">Hoodies</h1>
            <h1 class="nsTitle">New Winter Collection</h1>
            <a href="hoodies.html">
                <button class="nsButton" style={{color:"blue"}}>CHOOSE YOUR STYLE</button>
            </a>
        </div>
        <div class="nsItem">
            <img src={hoodie} alt="" class="nsImg" />
        </div>
        </div>
    </div>
  )
}

export default Preview