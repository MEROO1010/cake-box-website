import React from 'react'
import styled from 'styled-components';
import Croissant from '../assets/croissant.png';
import Turck from '../assets/truck.png';
import Gloves from '../assets/gloves.png';

const CakeIcons = () => {
  return (
    <Container>
      <ul>
        <li><img src={Croissant} alt=""/></li>
        <li><img src={Turck} alt=""/></li>
        <li><img src={Gloves} alt=""/></li>
      </ul>
    </Container>
  )
}

export default CakeIcons

const Container = styled.div`
  ul{
    list-style-type: none;
    text-decoration: none;
    display: inline;
    position:relative;
  }

  img{
    width: 100px;
    height:100px;
    display: inline-block;
    float: left;
    margin-left: 0px;
    padding-bottom: 40px;
    padding-right:100px;
    bottom:920px;
    left:200px;
  }
  `