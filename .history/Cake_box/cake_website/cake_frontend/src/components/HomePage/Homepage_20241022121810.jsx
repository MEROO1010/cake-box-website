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
    color:white;
    font-size:50px;
    text-shadow: 9px 4px 4px rgba(0, 0, 0, 0.3);
    text-align: center;
    padding-top:40px;
    bottom:600px;
    margin-left:80px;
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
    padding-top:40px;
    bottom:600px;
    margin-left:80px;
    position: relative;
   }
  
  `