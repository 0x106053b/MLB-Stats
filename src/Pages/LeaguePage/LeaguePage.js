import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components'
import AppAni from './../../Animation/AppAni';

const LeaguePage = () => {

  return (
    <Container
      variants={AppAni}
      initial={"init"}
      animate={"ani"}
      exit={"exit"}>
      <h2>League Schedule</h2>
    </Container>
  )
}

export default LeaguePage

const Container = styled(motion.div)`
  position : relative;
  overflow-x : hidden;
  display : block;
  background-color : white;
  top : 60px;
  margin : 0;
  padding-top : 60px;`;