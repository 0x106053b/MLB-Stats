import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components'
import AppAni from './../../Animation/AppAni';
import { useLocation } from 'react-router-dom';
import instance from './../../Api/axios';
import requests from '../../Api/requests';
import "./LeaguePage.css"


const LeaguePage = () => {
  const [schedule, setSchedule] = useState([]);
  const useQuery = () => {
    // useLocation()의 search 속성에 Query 정보가 저장되어 있다.
    return new URLSearchParams(useLocation().search)
  }

  // League Schedule 페이지의 date 쿼리로부터 날짜 정보를 전달받는다.
  let query = useQuery();
  const date = new Date(query.get("date"));

  useEffect(() => {
    fetchLeagueSchedule(date);
  }, [fetchLeagueSchedule]);


  const fetchLeagueSchedule = async(date) => {
    try {
      const request = await instance.get(date);

      // schedule 배열에 append 한다.
      setSchedule(request);
    }
    catch (error) {
      alert("Invalid Date");
    }
  }


  return (
    <Container
      variants={AppAni}
      initial={"init"}
      animate={"ani"}
      exit={"exit"}>
      <ContainerDate>
        <span className="arrow__left">{"<"}</span>
        {/* <p>{`${new Date(date).toLocaleString('en-us', { month: 'short' })} ${dd}, ${yyyy}`}</p> */}
        <span className="arrow__right">{">"}</span>
      </ContainerDate>
      <ContainerSchedule>

      </ContainerSchedule>
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

const ContainerDate = styled.div`
  padding : 20px 50px;
  font-size : 20px;
  display : flex;
  flex-direction : row;
  justify-content : flex-start;
  align-items : center;
  border-bottom : solid 0.5px lightgray;
`;

const ContainerSchedule = styled.div`
  display : flex;
  align-items : center;
  justify-content : flex-start;
  padding : 20px 50px;
  background-color : #ECECEC;
`;