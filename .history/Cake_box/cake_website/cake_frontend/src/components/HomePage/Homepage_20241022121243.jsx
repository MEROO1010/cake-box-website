import React from 'react'
import Homepagebg from '../assets/HomePage.png';
import styled from 'styled-components';

const Homepage = () => {
  return (
    <Container>
    
    <img src={Homepagebg} alt=""/>

    <h1>Cakes<br/> Crafted<br/> with<br/> Love</h1>

    <button>Explore Now</button>
    
    </Container>
  )
}

export default Homepage

const Container = styled.div `
   img{
    width: 100%;
    background-size: cover;

   }

   h1{
    color:black;
    font-size:50px;
    padding-top:40px;
    bottom:600px;
    margin-left:640px;
    position: relative;
   }

   button{
    background-color:#91FBB0;
    color:white;
    border:none;
    width:340px;
    height:60px;
    font-size:32px;
    font-weight:bold;
    margin-left:520px;
   }
  
  `