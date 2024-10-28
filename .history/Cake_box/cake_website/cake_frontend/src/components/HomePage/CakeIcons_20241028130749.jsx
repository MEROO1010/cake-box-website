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
    display : inline-block;
    flex-direction: row;
    display: flex;
  }

  img{
    width: 200px;
    height:200px;    
    float: left;
    margin-left: 20px;
    padding-bottom: 40px;
    padding-right:250px;
    bottom:920px;
    left:100px;
    position:static;
  }
  `