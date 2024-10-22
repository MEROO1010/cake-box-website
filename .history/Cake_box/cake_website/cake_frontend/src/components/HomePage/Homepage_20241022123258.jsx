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
    position: relative;
    
  }

  h1 {
    color: white;
    font-size: 50px;
    text-shadow: 9px 4px 4px rgba(0, 0, 0, 0.3);
    text-align: center;
    padding-top: 40px;
    margin-top: 800px;
    bottom:40px;
  }

  button {
    background-color: #91FBB0;
    color: white;
    border: none;
    width: 340px;
    height: 60px;
    font-size: 32px;
    font-weight: bold;
    margin-top: 20px; /* Add some space above the button */
  }
`;