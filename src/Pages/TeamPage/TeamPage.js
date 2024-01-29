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
  background-color : white;
  top : 60px;
  margin : 0;
  padding-top : 35px;`;

  