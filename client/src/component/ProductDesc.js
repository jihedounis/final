import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { orderadd, orderget } from "../JS/orderSlice";

import Swal from "sweetalert2";

function ProductDesc({ product, ping, setping }) {
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const [order, setorder] = useState({
    name: user.name,
    product: product?.name,
    number: 1,
    date: "",
    prix: product?.prix,
  });

  // console.log(commande)
  // const dispatch=useDispatch();
  return (
  
      <>
      
          <button
            className="addd"
            style={{backgroundColor:"transparent", color: "black", border:"none" }}
            onClick={handleShow}
          >
            Buy Now
          </button>
       

        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          size="lg"
          style={{ marginTop: "120px"}}
        >
          <div style={{backgroundColor:"#222222"}}>
          <Modal.Header closeButton>
            <Modal.Title>{product?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex" }}>
              <div style={{marginTop:"30px"}}>
                <img src={product?.img} width="226" height="193" />
              </div>

              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "50px",
                  }}
                >
                  <div style={{ width: "100px" }}>
                    <h3>{product?.name}</h3>
                    <p>{product?.description}</p>
                    <h1>{product?.prix}</h1>
                  </div>
                </div>
              </div>

              <Form style={{ marginLeft: "150px" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="text" placeholder={user.name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="enter your phone number"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    onChange={(e) =>
                      setorder({ ...order, date: e.target.value })
                    }
                  />
                </Form.Group>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div >
              <button
                style={{ width: "150px", backgroundColor:"#22A39F", color:"black", border:"none", borderRadius:"25px",height:"53px" }}
                onClick={() => {
                  dispatch(orderadd(order));
                  dispatch(orderget());

                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your reservation is saved",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  setping(!ping);
                }}
              >
                Buy Now
              </button>
            </div>
          </Modal.Footer>
          </div>
        </Modal>
      </>
  
  );
}

export default ProductDesc;
