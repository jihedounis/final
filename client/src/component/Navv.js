import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
const COLORS = {
  primaryDark: "#115b4c",
  primaryLight: "#B6EDC8",
};

const MenuLabel = styled.label`
  background-color: ${COLORS.primaryLight};
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`;

const NavBackground = styled.div`
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: radial-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
  );
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;

    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};

    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};

  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;
const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 1rem 2rem;

  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;

  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`;

function Navv({ping, setping}) {
    const user=useSelector((state)=>state?.user?.user);
    const navigate=useNavigate();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick} style={{backgroundColor:"#22A39F"}}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click} >&nbsp;</NavBackground>

      <Navigation clicked={click} style={{backgroundColor:"#222222",}}>
        <List>
          <li>
          <Link to="/" style={{ textDecoration: "none",fontSize:"45px",color:"#22A39F" }}>
              Home
          </Link>
          </li>
          <li>
          <Link to="/product" style={{ textDecoration: "none",fontSize:"45px",color:"#22A39F" }}>
              Product
          </Link>
          </li>
          <li>
          <Link to="/profile" style={{ textDecoration: "none",fontSize:"45px" ,color:"#22A39F"}}>
              Profile
          </Link>
          </li>
          <li>
          {user?.isAdmin=="admin"?<Link to="/dashbord" style={{ textDecoration: "none",fontSize:"45px" ,color:"#22A39F"}}>
              Dashbord
          </Link>: null}
          </li>
          <li>
          <Link to="/register" style={{ textDecoration: "none",fontSize:"45px" ,color:"#22A39F"}}>
              Connect
          </Link>
          </li>
          <li style={{marginTop:"50px"}}>
          <Link to="/" style={{ textDecoration: "none",fontSize:"45px",border:"none" }}>
          {user?<button  onClick={() => {
                    setTimeout(() => {localStorage.removeItem("token");
                     
                      navigate("/login");
                    }, 1000);}} style={{width:"170px",height:"95px",borderRadius:"29px",backgroundColor:"black",}}>LogOut</button>:null}
          </Link>
          </li>
        </List>
      </Navigation>
    </>
  );
}

export default Navv;