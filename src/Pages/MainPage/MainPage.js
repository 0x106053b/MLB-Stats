import React from 'react'
import styled from 'styled-components'
import './MainPage.css'
import Ball from './Ball/Ball'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const MainPage = () => {
  const navigate = useNavigate();
  const show = {
    initial: { x : -500 },
    finally: { x : 0 }
  }

  return (
    <MainContainer>
      <img className="MLBLogo" src="/images/MLBLogo.png" alt="MLB Logo"
        onClick={() => { window.location.href = "/" }}></img>
      <Ball>
      </Ball>
      <MenuBar>
        <Menu><motion.h4 variants={show} initial="initial" animate="finally" onClick={() => { navigate("/league") }}>League Schedule</motion.h4></Menu>
        <Menu><motion.h4 variants={show} initial="initial" animate="finally" onClick={() => { navigate("/team") }}>Team Roster</motion.h4></Menu>
        <Menu><motion.h4 variants={show} initial="initial" animate="finally" onClick={() => { navigate("/players") }}>Players</motion.h4></Menu>
        <Menu><motion.h4 variants={show} initial="initial" animate="finally" onClick={() => { navigate("/play-by-play") }}>Play by Play</motion.h4></Menu>
      </MenuBar>
    </MainContainer>
  )
}

export default MainPage

const MainContainer = styled.main`
  position : relative;
  height : 100vh;
  width : 100vw;
  overflow-x : hidden;
  overflow-y : hidden;
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


const Menu = styled(motion.a)`
  display : block;
  font-size : 50px;
  color : white;
  transition : 400ms ease-in-out;
 
  &:hover{
    font-size : 80px;
  }`;