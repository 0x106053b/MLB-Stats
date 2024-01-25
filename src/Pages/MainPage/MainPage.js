import React from 'react'
import styled from 'styled-components'
import './MainPage.css'
import Ball from './Ball/Ball'

const mainPage = () => {
  return (
    <MainContainer>
      <Ball>
      </Ball>
      <MenuBar>
        <Menu><h4>League Schedule</h4></Menu>
        <Menu><h4>Team</h4></Menu>
        <Menu><h4>Players</h4></Menu>
        <Menu><h4>Play by Play</h4></Menu>
      </MenuBar>
    </MainContainer>
  )
}

export default mainPage

const MainContainer = styled.div`
  height : 100%;
  width : 100%;
  `;

const MenuBar = styled.div`
  position : absolute;
  top : 50%;
  z-index : 1;
  transform : translate(0, -50%);
  display : flex;
  flex-direction : column;
  justify-content : center;
  margin-left : 50px;`;

const Menu = styled.a`
  display : block;
  font-size : 50px;
  color : white;
  transition : 400ms ease-in-out;
 
  &:hover{
    font-size : 80px;
  }`;