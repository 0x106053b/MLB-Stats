# MLB Glimpse 👀⚾
### MLB API, NEWSAPI를 활용한 MLB 리그 정보 톺아보기

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> 
<br><br>

https://mlb-glimpse.vercel.app/main

# 🚀 프로젝트 개요
<li><b>React</b> 문법 및 <b>CSS Layout</b> (Flex, Grid 등) 연습을 위한 토이 프로젝트입니다.</li>
<li><b>MLB API, NEWSAPI</b>를 이용하여 실시간 리그 정보 및 최신 MLB 뉴스 피드를 제공합니다.</li>
<li><b>Vecel</b>을 이용하여 배포하였습니다. (NEWSAPI 정책상 NEWS 탭은 배포하지 못하였음)</li>

<br><br>
# 🧠 실행 화면
![mainpage](https://github.com/0x106053b/MLB-glimpse/assets/151544588/36a24e8f-477d-4880-b1d9-6e6c18bc91fb)
<li>JS canvas를 이용하여 공튀기기 애니매이션을 구현한 메인 페이지입니다.</li>
<li>3가지의 메뉴(League Schedule, 30 MLB Teams, News)로 이동합니다.</li>

<br><br>
![LeaguePage](https://github.com/0x106053b/MLB-glimpse/assets/151544588/84485a57-632f-4772-98c9-833ae4956c1d)
<li>사용자 <b>접속 당시의 날짜를 query로</b> 주어 리그 스케줄 웹 페이지에 접속합니다.</li>
<li><b>원정/홈 팀, 경기 시작 시간, 경기 결과, 경기장 위치</b>를 보여줍니다.</li>
<li>페이지 상단의 날짜 (화살표를 통해 날짜 이동 가능)로부터 사흘동안의 경기 스케줄을 보여줍니다.</li>
<li>각 경기 정보 오른쪽의 ">>" 버튼을 클릭하는 경우 boxscore 페이지로 이동합니다.</li>

<br><br>
![TeamPage](https://github.com/0x106053b/MLB-glimpse/assets/151544588/6b4ae057-c615-47b2-8652-ab79826d1ff2)
<li>(2024년 1월 기준) MLB 리그의 30개 팀 정보 페이지입니다.</li>
<li><b>구단 공식 홈페이지, 구단 경기 스케줄 페이지</b>로 이동 가능합니다.</li>
<li><b>실시간 구단별 로스터</b> 정보를 확인할 수 있습니다.</li>

<br><br>
![NewsPage](https://github.com/0x106053b/MLB-glimpse/assets/151544588/89a31bea-8a12-40ff-bab5-aa1c948efd3a)
<li><b>NEWSAPI</b>를 이용해 영미권 신문사들로부터 "MLB" 키워드로 검색한 기사를 <b>최신순</b>으로 불러옵니다.</li>
<li>기사 클릭 시 원문으로 이동합니다.</li>
