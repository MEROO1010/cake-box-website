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
    position:relative;
    padding-bottom: 400px;
    padding-right:800px;
    bottom:1060px;
    right:280px;
}
`