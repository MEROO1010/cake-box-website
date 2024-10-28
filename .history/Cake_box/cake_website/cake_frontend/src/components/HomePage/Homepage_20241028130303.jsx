import React from 'react'
import Homepagebg from '../assets/HomePage.png';
import styled from 'styled-components';
import Logo from '../Header/Logo'
import Navbar from '../Header/Navbar';
import CakeIcons from './CakeIcons';

const Homepage = () => {
  return (
    <Container>
    
    <img src={Homepagebg} alt=""/>

    <h1>Cakes<br/> Crafted<br/> with<br/> Love</h1>

    <button>Explore Now</button>
     <Logo/>
     <Navbar/>
     <CakeIcons/>
    </Container>
  )
}

export default Homepage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align items */
  justify-content: center; /* Center vertically */
  height: 100vh; /* Full viewport height */
  position: relative; /* Ensure absolute positioning works */
  
  img {
    width: 100%;
    height: auto; /* Maintain aspect ratio */
    object-fit: cover; /* Cover the container */
    position:static;
    padding-top:40px;
  }

  h1 {
    color: white;
    font-size: 40px;
    text-shadow: 9px 4px 4px rgba(0, 0, 0, 0.3);
    text-align: center;
    position:relative;
    padding-top: 80px;
    bottom:620px;
    
  }

  button {
    background-color: #91FBB0;
    color: white;
    border: none;
    border-radius:10px;
    width: 340px;
    height: 60px;
    font-size: 32px;
    font-weight: bold;
    margin-top: 0px; /* Add some space above the button */
    margin-left:0px;
    position:relative;
    padding-top: 10px;
    padding-bottom:10px;
    padding-right:10px;
    padding-left:10px;
    bottom:620px;
    justify-content: center;
    display: flex;
    cursor: pointer;
    
  }
`;