import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link,  useNavigate } from 'react-router-dom'
import {userRegister} from '../JS/userSlice/userSlice';
import "./style/login.css"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';


const Register = ({ping, setping}) => {
    const [register, setregister] = useState({
        name:"",
        lastName:"",
        email:"",
        password:"",
    });
const dispatch = useDispatch();
const navigate=useNavigate();
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' style={{height: "789px"}}>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            BLACKOUT <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>Your favorite Anime Brand</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
          Welcome to our streetwear anime website! Here, you'll find a wide selection of stylish and trendy clothing and accessories inspired by your favorite anime characters and series. From graphic t-shirts to hats and bags, we've got everything you need to show off your love for anime in style. Whether you're looking for the perfect outfit for your next convention or just want to add some flair to your everyday wardrobe, you'll find something to love at our store. Thank you for stopping by, and we hope you enjoy your shopping experience!
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass' style={{display:"flex",alignItems:"center",width:"380px",marginLeft:"40PX"}}>
            <MDBCardBody className='p-5' >
            <MDBRow>
                <MDBCol col='6'>
                <h6>Name</h6>
                  <MDBInput wrapperClass='mb-4'  id='form1' type='text' onChange={(e)=> setregister({...register,name:e.target.value})}/>
                </MDBCol>

                <MDBCol col='6'>
                <h6>Last Name</h6>
                  <MDBInput wrapperClass='mb-4'  id='form2' type='text' onChange={(e)=> setregister({...register,lastName:e.target.value})} />
                </MDBCol>
              </MDBRow>

              <h6>Email</h6>
              <MDBInput wrapperClass='mb-4'  id='form3' type='email' onChange={(e)=> setregister({...register,email:e.target.value})}/>
              <h6>Password</h6>
              <MDBInput wrapperClass='mb-4'  id='form4' type='password' onChange={(e)=> setregister({...register,password:e.target.value})}/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='w-100 mb-4' size='md' onClick={()=>{dispatch(userRegister(register));  setping(!ping); navigate("/login")}}>Register</MDBBtn>
              <h5>If you already have an account  <Link to="/login">Log in here</Link></h5>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Register