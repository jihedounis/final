import Carousel from 'react-bootstrap/Carousel';
import img1 from  '../images/pic1.jpg';
import img2 from  '../images/pic2.png';
import img3 from  '../images/pic3.jpg';
import img4 from '../images/pic4.jpg';

function Carousell() {
  return (
    <Carousel style={{height:"500px", backgroundColor:"red"}}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={{minHeight:"500px", maxHeight:"500px"}}
        />
        <Carousel.Caption>
          <h2 style={{color:'#2469ff'}}>Street Wear Anime clothing</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          style={{minHeight:"500px", maxHeight:"500px"}}
        />
        <Carousel.Caption>
          <h2 style={{color:'#2469ff'}}>Anime Collaborations and much more</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Third slide"
          style={{minHeight:"500px", maxHeight:"500px"}}
        />
        <Carousel.Caption>
          <h2 style={{color:'#2469ff'}}>Third slide label</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;