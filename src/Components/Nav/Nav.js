import styled from 'styled-components'

const Nav = () => {

  // const [background, setBackground] = useState(false);
  // const background = useRef(false);

  // 컴포넌트가 새롭게 mount 될 떄마다 backGround 색을 변경한다.
  // < 궁금증 >
  // useNavigate()를 이용하여 페이지를 이동하였을 때에는 Nav 컴포넌트가 리랜더링 되었음에도 불구하고
  // useEffect()가 컴포넌트 렌더링 후에 실행되기 때문에 pathname에 따른 css 적용이 불가능했다. (한번 새로고침 눌러줘야 했음 ...)
  // 그러나 window.location.href 를 이용해 페이지를 이동하였을 때에는 자동으로 페이지가 새로고침 되면서 Nav가 새롭게 mount되고
  // Nav 컴포넌트의 useEffect()가 실행됨으로써 랜더링 전 pathname에 따른 css 적용이 가능했다.
  //
  // < 추측 >
  // useNavigate는 window.history 기반 라우팅이므로 HTTP 요청을 새로 하지 않고 않의 컴포넌트만 리랜더링한다.
  // 즉, 페이지가 새로고침 후 새롭게 로드되는 것이 아니라서 useNavigate -> 리랜더링 -> useEffect 순서로 실행 시
  // useEffect의 실행결과가 반영되지 않는다.

  // useEffect(() => {
  //   const current = new URL(window.location.href);
  // }, []);

  return (
    <div>
      <NavWrapper>
        <Logo>
          <img src="/images/MLBLogo.png" alt="MLB Logo"
            onClick={() => { window.location.href = "/" }}></img>
        </Logo>
      </NavWrapper>
    </div>
  )
}

export default Nav

const NavWrapper = styled.nav`
    position : fixed;
    display : flex;
    flex-direction : column;
    align-items : flex-end;
    top : 0;
    bottom : 0;
    left : 0;
    right : 0;
    background-color : #000814;
    height : 100px;
`;


const Logo = styled.a`
  align-self : flex-end;
  display : flex;
  margin : 0;
  height : 100%;
  flex-direction : column;
  justify-content : center;
  
  img {
    height : 60%;
    margin-right : 15px;
  }
`;