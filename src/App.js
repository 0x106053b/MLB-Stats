import React from 'react'
import MainPage from './Pages/MainPage/MainPage'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import './App.css'
import LeaguePage from './Pages/LeaguePage/LeaguePage';
import Nav from './Components/Nav/Nav'
import TeamPage from './Pages/TeamPage/TeamPage';
import PlayerPage from './Pages/PlayerPage/PlayerPage';
import PlayByPlayPage from './Pages/PlayByPlayPage/PlayByPlayPage';
import { AnimatePresence } from 'framer-motion';


const MainLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
}

const MenuLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

const App = () => {
  return (
    <div className="app">
      <AnimatePresence>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate replace to="/main" />} />
            <Route path="/main" element={<MainPage />} />
          </Route>
          <Route element={<MenuLayout />}>
            <Route path="/league/:date" element={<LeaguePage />}></Route>
            <Route path="/team" element={<TeamPage />} />
            <Route path="/players" element={<PlayerPage />} />
            <Route path="/play-by-play" element={<PlayByPlayPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App;