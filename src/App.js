import React from 'react'
import MainPage from './Pages/MainPage/MainPage'
import Nav from './Components/Nav/Nav'
import {Routes, Route, Outlet} from 'react-router-dom'
import './App.css'
import LeaguePage from './Pages/LeaguePage/LeaguePage';

const Layout = () => {
  return(<div>
    <Nav />
    <Outlet />
  </div>)
}

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>}></Route>
          <Route path="/league" element={<LeaguePage/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App;