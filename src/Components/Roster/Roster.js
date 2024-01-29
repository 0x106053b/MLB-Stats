import React from 'react'
import "./Roster.css"
import styled from 'styled-components';

const Roster = ({ team, roster, setIsSelected }) => {

  const position = ["Starting Pitcher", "Pitcher", "Catcher",
    "First Base", "Second Base", "Third Base",
    "Shortstop", "Outfielder", "Designated Hitter"]

  const closeModal = () => {
    setIsSelected(false);
  }
  return (
    <div className="presentaion">
      <div className="black_background">
        <div className="wraper">
          <span
            className="close_roster"
            onClick={() => { closeModal() }}>X</span>
          <div className="roster_wraper">
            <h1>{team} Roster</h1>
            {position.map((position) => (
              <>
                <Position className="position">
                  <span className="line"><hr /></span>
                  <p>{position}</p>
                  <span className="line"><hr /></span>
                </Position>
                <Players className="players">
                  {roster
                    .filter((player) => player.position.name === position)
                    .map((player) => (
                      <p>{player.person.fullName}</p>
                    ))
                  }
                </Players>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roster

const Position = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  justify-content : space-around;
  width : 100%;
  // margin-top : 50px;
  `;

const Players = styled.div`
  display : grid;
  margin : 0px 50px;
  grid-template-columns : repeat(4, 1fr);
  column-gap : 20px;
  width : 80%;
`;