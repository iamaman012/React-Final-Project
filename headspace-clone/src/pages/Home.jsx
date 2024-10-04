import React from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import NotificationBar from '../components/NotificationBar'

const Home = () => {
  return (
    <>
    <NotificationBar/>
    <Navbar/>
    <Landing/>
    </>
  )
}

export default Home