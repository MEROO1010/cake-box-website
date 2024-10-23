import React from 'react'
import styled from 'styled-components';
import logoimg from '../assets/cake box.png';

const Logo = () => {
  return (
    <Container>
     <img src={logoimg} alt=""/>
    </Container>
  )
}

export default Logo


const Container = styled.div `

img{
    width: 200px;
    height:100px;
    position: relative;
    position:relative;
    padding-top: 10px;
    padding-right:800px;
    bottom:520px;
}
`