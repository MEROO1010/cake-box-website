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
    width: 100px;
    height:50px;
    position:absolute;
    padding-bottom: 740px;
    padding-right:600px;
    bottom:40px;
    left:100px;
}
`