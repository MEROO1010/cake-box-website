import React from 'react'
import Homepagebg from '../assets/HomePage.png';
import styled from 'styled-components';

const Homepage = () => {
  return (
    <Container>
    
    <img src={Homepagebg} alt=""/>

    <h1>Cakes<br/> Crafted<br/> with<br/> Love</h1>
    
    </Container>
  )
}

export default Homepage

const Container = styled.div `
   img{
    width: 100%;

   }

   h1{
    color:black;
    margin-left:660px;
    margin-top:-90px;
    padding-bottom:10px;
   }
  
  `