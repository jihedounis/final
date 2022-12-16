import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { orderadd, orderget } from "../JS/orderSlice";

import Swal from "sweetalert2";
import { Table } from "react-bootstrap";
import { productdelete } from "../JS/productSlice";
import AddProduct from "./AddProduct";

function ProductAdmin({ product, ping, setping }) {
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
  const products=useSelector((state)=>state?.product?.product)
  // console.log(commande)
  // const dispatch=useDispatch();
  return (
  
      <>
      
          <Button
            className="addd"
            style={{backgroundColor:"#22A39F", color: "F3EFE0", border:"none",marginTop:"15px" }}
            onClick={handleShow}
          >
            Product Panel
          </Button>
       

        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          size="xl"
          style={{ marginTop: "50px"}}
        >
          <div style={{backgroundColor:"#222222"}}>
          <Modal.Header closeButton>
            <Modal.Title>{product?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Product Name </th>
                    <th>Product img</th>
                    <th>Product color</th>
                    <th>Product size</th>
                    <th>Product price</th>
                    <th></th>
                 
                  </tr>
                </thead>
                <tbody>
                  {products?.map((el) => (
                    <tr>
                      <td>{el.name}</td>

                      <td>{el.img}</td>
                      <td>{el.color}</td>
                      <td>{el.size}</td>
                      <td>{el.prix}</td>
                      <td>
                        <button
                          style={{ width: "30px" }}
                          onClick={() => {
                           
                            setTimeout(() => {
                            dispatch(productdelete(el._id));
                             setping(!ping)
                            
                            }, 1000);
                          }}
                        >
                          X
                        </button>
                      </td>
                      
                    </tr>
                  ))}
                </tbody>
              </Table>
          </Modal.Body>
          <Modal.Footer>
            <div >
             <Button onClick={()=>handleClose()}>
              Close
              </Button>
            </div>
          </Modal.Footer>
          </div>
        </Modal>
      </>
  
  );
}

export default ProductAdmin;
