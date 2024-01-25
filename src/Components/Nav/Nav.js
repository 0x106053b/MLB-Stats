import React from 'react'
import styled from 'styled-components'

const Nav = () => {
  // (1) 로고를 클릭하면 MainPage로 이돋
  return (
    <div>
      <NavWrapper>
        <Logo>
          <img src="/images/MLB.png" alt="MLB Logo"
          onClick={() => {window.location.href = "/"}}></img>
        </Logo>
      </NavWrapper>
    </div>
  )
}

export default Nav

const NavWrapper = styled.div`
    position : fixed;
    inset : 0;
    height : 100px;
    background-color : "#000814";
    `;

const Logo = styled.a`
  margin : 0;
  display : flex;
  flex-direction : column;
  align-items : flex-end;
  
  img {
    position : absolute;
    top : 10px;
    right : 10px;
    margin : 0px;
    height : 60%;
    margin-right : 12px;
    background-color : "#000814";
    border-radius : 12px;
  }
`;