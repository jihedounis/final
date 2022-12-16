import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { orderget, orderupdate } from "../JS/orderSlice";
import { userCurrent } from "../JS/userSlice/userSlice";

function EditRes({ el,ping,setping }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [edit, setedit] = useState({
    name: el.name,
    product: el.product,
    number: el.number,
    date: el.date,
    prix: el.prix,
  });
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        style={{ backgroundColor: "#573b8a", color: "white", border: "white" }}
        onClick={handleShow}
      >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} style={{ marginTop: "150px", opacity:"100%", }}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder={el?.date}
                onChange={(e) => {
                  setedit({ ...edit, date: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder={el.prix}
                onChange={(e) => {
                  setedit({ ...edit, prix: e.target.value });
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
               setTimeout(() => {
              dispatch(orderupdate({ id: el._id, edit }));
              setping(!ping)
             
            
              }, 1000);
            }}
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditRes;
