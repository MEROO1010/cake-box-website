import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      {/*start the Nabbar*/}
      <ul>
        <li>
          <a href="default.asp">Home</a>
        </li>
        <li>
          <a href="Proudcts">Products</a>
        </li>
        <li>
          <a href="Proudcts">Order</a>
        </li>
        <li>
          <a href="default.asp">About Us</a>
        </li>
        <li>
          <a href="default.asp">Contact Us</a>
        </li>
      </ul>
      {/*end the Nabbar*/}
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  li {
    padding-right:100px;
    bottom:1122px;
    left:290px;
    font-size: 20px;
    list-style-type: none;
    text-decoration: none;
    display: inline;
    position:relative;
    float: left;

    a {
      text-decoration: none;
      color: #FFFFFF;
      font-weight: 620;
      font-size: 25px;
    }

    a:active{
        color:#FEF794;
    }
  }
`;