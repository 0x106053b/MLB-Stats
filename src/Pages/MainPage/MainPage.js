import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './MainPage.css'
import Ball from './Ball/Ball'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const MainPage = () => {
  const navigate = useNavigate();
  const show = {
    initial: { x: -500 },
    finally: { x: 0 }
  }

  // 메인페이지에서 클릭을 통해 league schedule 페이지로 이동하는 경우
  // 클릭 당시의 날짜를 받아서 페이지를 이동할 수 있도록 초기 설정한다.
  const [date, setDate] = useState({ "MM": 0, "dd": 0, "yyyy": 0 });
  useEffect(() => {
    let nowDate = new Date();
    setDate({
      "MM": (nowDate.getMonth() + 1).toString().padStart(2, "0"),
      "dd": nowDate.getDate().toString(),
      "yyyy": nowDate.getFullYear().toString()
    })
  }, [date]);

  return (
    <MainContainer>
      <img className="MLBLogo" src="/images/MLBLogo.png" alt="MLB Logo"
        onClick={() => { window.location.href = "/" }}></img>
      <Ball>
      </Ball>
      <MenuBar>
        <Menu><motion.h4 variants={show} initial="initial" animate="finally" onClick={() => { navigate(`/league?date=${date.MM}-${date.dd}-${date.yyyy}`) }}>League Schedule</motion.h4></Menu>
        <Menu><motion.h4 variants={show} initial="initial" animate="finally" onClick={() => { navigate("/team") }}>30 MLB Teams</motion.h4></Menu>
        <Menu><motion.h4 variants={show} initial="initial" animate="finally" onClick={() => { navigate("/news") }}>News</motion.h4></Menu>
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