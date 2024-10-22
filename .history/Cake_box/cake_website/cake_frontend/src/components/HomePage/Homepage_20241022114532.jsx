import React from 'react'
import Homepagebg from '../assets/HomePage.png';
import styled from 'styled-components';

const Homepage = () => {
  return (
    <Container>
    
    <img src={Homepagebg} alt=""/>
    
    </Container>
  )
}

export default Homepage

const Container = styled.div `
   img{
    width: 100%;

   }
  
  `