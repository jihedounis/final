

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { productadd } from '../JS/productSlice';

function AddProduct({ping, setping}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [product, setproduct] = useState({
        name:"",
        img:"",
        color:"",
        size: "",
        prix: "",
        description:""
    })
const dispatch=useDispatch();
  return (
    <>
   <Button
            className="addd"
            style={{backgroundColor:"#22A39F", color: "F3EFE0", border:"none",marginTop:"15px" }}
            onClick={handleShow}
          >
            Add product
          </Button>
<div style={{}}>
    <Modal show={show} onHide={handleClose} style={{opacity:"100%",backgroundColor:"hsla(0, 0%, 0%, 0.53)"}}>
        <div style={{backgroundColor:"#222222"}}>
      <Modal.Header closeButton>
        <Modal.Title style={{marginTop:"5px"}}>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body> <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name product" onChange={(e)=>setproduct({...product, name:e.target.value})} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Img</Form.Label>
        <Form.Control type="text" placeholder="Enter image product" onChange={(e)=>setproduct({...product, img:e.target.value})}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Color</Form.Label>
        <Form.Control type="text" placeholder="Enter color product" onChange={(e)=>setproduct({...product, color:e.target.value})}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Size</Form.Label>
        <Form.Control type="text" placeholder="Enter size product" onChange={(e)=>setproduct({...product, size:e.target.value})} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="text" placeholder="Enter price product" onChange={(e)=>setproduct({...product, prix:e.target.value})} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Description</Form.Label>
        <Form.Control type="text" placeholder="Enter product description" onChange={(e)=>setproduct({...product, description:e.target.value})} />
        
      </Form.Group>
      </Form></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{dispatch(productadd(product));setping(!ping)}
    }>
          Add product
        </Button>
      </Modal.Footer>
      </div>
    </Modal>
    </div>
  </>
  )
}

export default AddProduct