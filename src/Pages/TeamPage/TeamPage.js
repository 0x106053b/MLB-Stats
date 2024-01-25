import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components'
import AppAni from './../../Animation/AppAni';

const TeamPage = () => {

  return (
    <Container
    variants={AppAni}
    initial={"init"}
    animate={"ani"}
    exit={"exit"}>
    </Container>
  )
}

export default TeamPage;

const Container = styled(motion.div)`
  position : relative;
  overflow-x : hidden;
  display : block;
  box-sizing : border-box;
  background-color : #000814;
  top : 100px;
  height : calc(100vh-100px);
  margin : 0;
  padding : 0;`;