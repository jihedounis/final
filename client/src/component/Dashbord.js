import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { orderdelete, orderget } from "../JS/orderSlice";
import { userCurrent, userupdate } from "../JS/userSlice/userSlice";
import AddProduct from "./AddProduct";
import EditRes from "./EditRes";
import Navv from "./Navv";
import ProductAdmin from "./PoductAdmin";
import "./style/profil.css";

function Dashbord({ping, setping}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user?.user);
  const order = useSelector((state) => state.order?.order);

  console.log(order);
  const [newuser, setnewuser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  return (
    <div style={{ backgroundColor: '#E9DAC1' }}>
    <Navv ping={ping} setping={setping}/>
    <div className="container rounded bg-white mt-5 mb-5" style={{borderRadius:"33px",backgroundColor:"#434242"}}>
      <div className="row" style={{borderRadius:"33px",backgroundColor:"#434242",color:"#F3EFE0"}}>
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png"
            />
            <span className="font-weight-bold">Admin {user?.name}</span>
            <span className="font-weight-bold"></span>
            <span className="text-black-50">{user?.email}</span>
            <span> </span>
            <ProductAdmin ping={ping} setping={setping}/>
            <AddProduct ping={ping} setping={setping}/>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 py-5" style={{ width: "953px" }}>
            <div className="d-flex justify-content-between align-items-center experience">
              <span>Liste des réservation </span>
            </div>
            <br />
            <div className="col-md-12" style={{ width: "690px" }}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>User Name </th>
                    <th>Product Name</th>
                    <th>Rervation Date</th>
                    <th>Price</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {order?.map((el) => (
                    <tr>
                      <td>{el.name}</td>

                      <td>{el.product}</td>
                      <td>{el.date}</td>
                      <td>{el.prix}</td>
                      <td>
                        <button
                          style={{ width: "30px" }}
                          onClick={() => {
                           
                            setTimeout(() => {
                            dispatch(orderdelete(el._id));
                             setping(!ping)
                              navigate("/dashbord");
                            }, 1000);
                          }}
                        >
                          X
                        </button>
                      </td>
                      <td>
                        <EditRes el={el} ping={ping} setping={setping} /> 
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashbord;
