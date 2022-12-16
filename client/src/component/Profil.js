import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { orderdelete, orderget } from "../JS/orderSlice";
import { userCurrent, updateuser } from "../JS/userSlice/userSlice";
import "./style/profil.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import Navv from "./Navv";

 function Profil({ping, setping}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const order = useSelector((state) => state.order.order);

  console.log(order);
  const [newuser, setnewuser] = useState({});
  return (
    <section style={{ backgroundColor: '#E9DAC1' }}>
      <Navv/>
      <MDBContainer className="py-5" >
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4" style={{backgroundColor:"#434242",color:"#F3EFE0"}}>
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">{user?.name}</p>
                <p className="text-muted mb-4">{user?.email}</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol style={{marginTop:"10px"}}>
          <div className="col-md-5 border-right" style={{backgroundColor:"#434242",width: "100%",marginBottom:"10px",marginTop:"-10px"}}>
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="first name"
                  defaultValue={user?.name}
                  onChange={(e) => {
                    setnewuser({ ...newuser, name: e.target.value });
                  }}
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Surname</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={user?.lastName}
                  placeholder="surname"
                  onChange={(e) => {
                    setnewuser({ ...newuser, lastName: e.target.value });
                  }}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Email ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter email id"
                  defaultValue={user?.email}
                  onChange={(e) => {
                    setnewuser({ ...newuser, email: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button
                style={{
                  backgroundColor: "#573b8a",
                  border: "none",
                  color: "white",
                }}
                className="btn btn-primary profile-button"
                type="button"
                onClick={() => {
                  setTimeout(() => { dispatch(updateuser({ id: user._id, newuser }));
                  setping(!ping)
               
                 
                  }, 1000);
                }}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBCard style={{backgroundColor:"#434242",color:"#F3EFE0"}}>
            <div className="col-md-4" >
          <div className="p-3 py-5" style={{width:"1200px"}}>
            <div className="d-flex justify-content-between align-items-center experience">
              <span style={{fontSize:"30px"}}>Orders</span>
            </div>
            <br />
            <div className="col-md-12">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Rervation Date</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {order
                    ?.filter((el) => el.name == user?.name)
                    .map((el) => (
                      <tr>
                        <td><img src={el.img} style={{width:"25px",height:"25px"}}/></td>
                        <td>{el.product}</td>
                        <td>{el.date}</td>
                        <td>{el.prix}</td>
                        <td>
                          <button
                            style={{ width: "30px",border:"none",backgroundColor:"transparent",color:"#22A39F"}}
                            onClick={() => {setTimeout(() => {
                              dispatch(orderdelete(el._id));
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
            </div>{" "}
          </div>
        </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default Profil;



