import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components'
import AppAni from './../../Animation/AppAni';
import { useLocation, useNavigate } from 'react-router-dom';
import instance from './../../Api/axios';
import "./LeaguePage.css"
import requests from './../../Api/requests';
import TeamKey from './TeamKey';


const LeaguePage = () => {
  const [schedule, setSchedule] = useState([]);
  const [fromTodays, setFromTodays] = useState([]);
  const useQuery = () => {
    // useLocation()의 search 속성에 Query 정보가 저장되어 있다.
    return new URLSearchParams(useLocation().search)
  }

  // League Schedule 페이지의 date 쿼리로부터 날짜 정보를 전달받는다.
  let query = useQuery();
  const date = query.get("date");

  // Date 객체로 생성한 날짜 (dateFormat)
  const dateFormat = new Date(date);

  useEffect(() => {
    if (date) {
      fetchSchedule(date);
    }
  }, [date]);

  const fetchSchedule = async (date) => {
    let scheduleArray = [];
    let datesArray = [];

    for (let i = 0; i < 3; i++) {
      const dateTemp = new Date(date);
      dateTemp.setDate(dateTemp.getDate() + i);
      datesArray = [...datesArray, dateTemp];
      const dateTempString = `${dateTemp.getMonth() + 1}-${dateTemp.getDate()}-${dateTemp.getFullYear()}`;
      try {
        const request = await instance.get(requests.fetchSchedule(dateTempString));
        scheduleArray = [...scheduleArray, request.data];
        console.log(scheduleArray);
      }
      catch (error) {
        alert("Invalid Date!");
      }
    }
    setSchedule(scheduleArray);
    setFromTodays(datesArray);
  }

  const getDayofWeek = (date) => {
    const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return week[date.getDay()]
  }

  const navigate = useNavigate();

  const leftNavigate = () => {
    const dateTemp = new Date(date);
    dateTemp.setDate(dateTemp.getDate() - 1);
    navigate(`/league?date=${(dateTemp.getMonth() + 1).toString().padStart(2, "0")}-${dateTemp.getDate().toString().padStart(2, "0")}-${dateTemp.getFullYear()}`);
  }

  const RightNavigate = () => {
    const dateTemp = new Date(date);
    dateTemp.setDate(dateTemp.getDate() + 1);
    navigate(`/league?date=${(dateTemp.getMonth() + 1).toString().padStart(2, "0")}-${dateTemp.getDate().toString().padStart(2, "0")}-${dateTemp.getFullYear()}`);
  }

  const TeamHandling = (team) => {
    try {
      return (TeamKey[team].short)
    } catch (error) {
      return (team)
    }
  }

  const LogoHandling = (team) => {
    try {
      return require(`../../../public/images/${team}.svg`)
    } catch (error) {
      return ("images/baseballCharacter.png");
    }
  }

  const TimeHandling = (time) => {
    // ETC 기준 시간으로 변환한다.
    const offset = -5.0;
    const clientTime = new Date(time);
    const utcTime = clientTime.getTime() + (clientTime.getTimezoneOffset() * 60000);
    const etcTime = new Date(utcTime + (3600000 * offset));

    //ETC 기준 dateTime을 formatting한다.
    const Hour = etcTime.getHours();
    const Minute = etcTime.getMinutes();
    const PM = (Hour >= 12) ? true : false;
    const etcString = `ETC ${((PM && (Hour !== 12)) ? (Hour - 12) : Hour).toString().padStart(2, "0")} : 
    ${Minute.toString().padStart(2, "0")} ${PM ? "PM" : "AM"}`;
    return etcString
  }

  const ScoreHandling = (game) => {
    if (game.status.abstractGameCode === "F") {
      const awayTeam = TeamHandling(game.teams.away.team.name);
      const homeTeam = TeamHandling(game.teams.home.team.name);
      const awayScore = game.teams.away.score;
      const homeScore = game.teams.home.score;
      if (awayScore > homeScore) {
        return(`${awayTeam} ${awayScore} , ${homeTeam} ${homeScore}`)
      }
      else{
        return(`${homeTeam} ${homeScore} , ${awayTeam} ${awayScore}`)
      }
    }
    else { return TimeHandling(game.gameDate) }
  }

  const TeamPageHandling = (team) => {
    try{
      window.location.href = `https://www.mlb.com/${TeamKey[team].small}/schedule/`
    } catch (error){
      return window.location.href
    }
  }

  const PlayboardHandling = (game, date) => {
    try{
      const away = TeamKey[game.teams.away.team.name].playname;
      const home = TeamKey[game.teams.home.team.name].playname;
      const gameCode = game.gamePk;
      window.location.href = `https://www.mlb.com/gameday/${away}-vs-${home}/${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")}/${gameCode}/preview`;
    } catch (error) {
      alert("Oops! The page is not available")
    }
  }

  return (
    <Container
      variants={AppAni}
      initial={"init"}
      animate={"ani"}
      exit={"exit"}>
      <ContainerDate>
        <span className="arrow__left" onClick={() => { leftNavigate() }}>{"<"}</span>
        <span className="today">
          {`${dateFormat.toLocaleDateString('en-us', { month: 'long' })} 
        ${dateFormat.getDate()}, ${dateFormat.getFullYear()}`}
        </span>
        <span className="arrow__right" onClick={() => { RightNavigate() }}>{">"}</span>
      </ContainerDate>
      <ContainerSchedule>
        {fromTodays.map((day, index) => {
          if (schedule[parseInt(index)].totalGames === 0) {
            return (
              <Schedule key={day}>
                <p className="date">
                  <span className="date_name">{getDayofWeek(day) + ` `}</span>
                  <span>{`${day.getDate()} ${day.toLocaleDateString('en-us', { month: "short" })}`}</span>
                </p>
                <Games>
                  <Game>
                    <p className="no_game">There are no games scheduled for the dates selected.</p>
                  </Game>
                </Games>
              </Schedule>
            )
          }
          else {
            return (
              <Schedule key={day}>
                <p className="date">
                  <span className="date_name">{getDayofWeek(day) + ` `}</span>
                  <span>{`${day.getDate()} ${day.toLocaleDateString('en-us', { month: "long" })}`}</span>
                </p>
                <Games>
                  {schedule[parseInt(index)].dates[0].games.map((game) => {
                    return (
                      <div>
                        <Game>
                          <span className="team">
                            <div className="away" 
                                  onClick={() => {TeamPageHandling(game.teams.away.team.name)}}>
                              <img className="team_logo" 
                                    src={LogoHandling(game.teams.away.team.name)} 
                                    alt="away team" />
                              <p className="team_name">{TeamHandling(game.teams.away.team.name)}</p>
                            </div>
                            <span className="vs">vs</span>
                            <div className="home" 
                                  onClick={() => {TeamPageHandling(game.teams.home.team.name)}}>
                              <img className="team_logo" 
                                    src={LogoHandling(game.teams.home.team.name)} 
                                    alt="home team" />
                              <p className="team_name">{TeamHandling(game.teams.home.team.name)}</p>
                            </div>
                          </span>
                          <div className="game_time">
                            <p>{ScoreHandling(game)}</p>
                          </div>
                          <div className="venue">
                            <p>{game.venue.name}</p>
                          </div>
                          <img className="move_to_play" 
                              src="/images/rightarrow.png"
                              alt="move to playboard"
                              onClick={() => PlayboardHandling(game, day)}></img>
                        </Game>
                      </div>
                    )
                  })}
                </Games>
              </Schedule>
            )
          }
        })}
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
  padding-top : 35px;`;

const ContainerDate = styled.div`
  padding : 20px 50px;
  font-family : LINESeedKR-Rg;
  font-size : 20px;
  display : flex;
  flex-direction : row;
  justify-content : flex-start;
  align-items : center;
  border-bottom : solid 0.5px lightgray;
`;

const ContainerSchedule = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  padding : 12px 80px;
  background-color : #ECECEC;
`;


const Schedule = styled.div`
  display : flex;
  flex-direction : column;
  align-items : left;
  width : 100%;
  margin : 20px 0;
  `;

const Games = styled.div`
  display : flex;
  flex-direction : column;
  width : 100%;
  height : auto;
  background-color : #ffffff;
  border : 0.7px solid lightgray;
  border-radius : 10px;
  margin-top : 0px;
  box-shadow: 2px 5px 6px -3px rgba(0, 0, 0, 0.1);
  `;

const Game = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  min-height :80px;
  border-bottom : 0.1px solid lightgray;
  `;