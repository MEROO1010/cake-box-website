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
    margin-left: 0px;
    padding-bottom: 0px;
    padding-right:100px;
    bottom:1060px;
    right:280px;
    font-size: 20px;
    list-style-type: none;
    text-decoration: none;
    display: inline;
    position:relative;

    a {
      text-decoration: none;
      color: black;
      font-weight: 620;
      font-size: 25px;
    }
  }
`;