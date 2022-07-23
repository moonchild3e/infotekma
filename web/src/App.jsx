import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/services/Services'
import Strength from './components/strength/Strength'
import Visimisi from './components/visimisi/Visimisi'
import './index.css'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Visimisi/>
    <Services/>
    <Strength/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App