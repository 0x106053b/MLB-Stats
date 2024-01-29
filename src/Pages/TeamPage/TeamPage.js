import React, { useState } from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components'
import AppAni from './../../Animation/AppAni';
import TeamKey from '../LeaguePage/TeamKey';
import './TeamPage.css'
import Roster from '../../Components/Roster/Roster';
import instance from '../../Api/axios';
import requests from '../../Api/requests';

const TeamPage = () => {
  const [team, setTeam] = useState("");
  const [roster, setRoster] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const fetchRoster = async(team) => {
    try{
      const request = await instance.get(requests.fetchRoster(TeamKey[team].key));
      setRoster(request.data.roster);
    } catch (error) {
      console.log("error!");
    }
  }

  const handleClickRoster = (team) => {
    setTeam(team);
    setIsSelected(true);
    fetchRoster(team);
  }

  return (
    <Container
      variants={AppAni}
      initial={"init"}
      animate={"ani"}
      exit={"exit"}>
      <h1 className="team_header">MLB 30 Teams</h1>
      <GridContainer>
        {Object.keys(TeamKey).map((team) => {
          return (
            <Team>
              <div className="team_logo_image">
                <img src={`/images/${team}.svg`} alt={`${team} logo`} />
              </div>
              <span className="team_team_name">{team}</span>
              <div className="team_team_info">
                <p className="team_team_page"
                  onClick={() => {window.location.href = `https://www.mlb.com/${TeamKey[team].small}`}}>Official Page</p>
                <p className="team_team_schedule"
                  onClick={() => {window.location.href = `https://www.mlb.com/${TeamKey[team].small}/schedule`}}>Season Schedule</p>
                <p className="team_team_roster"
                  onClick={() => {handleClickRoster(team)}}>Team Roster</p>
              </div>
            </Team>
          )
        })}
      </GridContainer>
      { isSelected &&
        <Roster team={team} roster={roster} setIsSelected={setIsSelected}></Roster>}
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

const GridContainer = styled.div`
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.3);  
  padding : 100px 50px;
  margin : 50px 100px;
  border-radius : 17px;
  background-color : #ECECEC;
  grid-template-columns : repeat(5, 1fr);
  row-gap : 25px;
  column-gap : 25px;
  font-family : LINESeedKR-Rg;
  font-size : 20px;
  display : grid;
`;

const Team = styled.div`
  position : relative;
  display : flex;
  flex-direction : column;
  align-items : center;
  border-radius : 7px;
  box-shadow: 2px 5px 6px -3px rgba(0, 0, 0, 0.1);
  background-color : white;
  transition : all ease-in-out 450ms;

  &:hover{
    transform : scale(1.05);

    .team_team_name {
      font-family : "LINESeedKR-Bd";
    }

    .team_logo_image img {
      opacity : 1.0;
    }
  }
  `;