import React from 'react'
import { CTA } from './CTA'
import './header.css'
import logo from '../../assets/logo.png'
import { Sosial } from './sosial'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
        <h5> Welcome to </h5>
        <h1>PT. INFORMATIKA TEKNOLOGI BERSAMA</h1>
        <h5 className='text-light'> ITB </h5>
        <CTA/>
        <Sosial/>

        <div className='me'>
            <img src={logo} alt = "me"/>
        </div>
        <a href="#contact" className='scroll_down'> Scroll Down </a>
        </div>
    </header>
  )
}

export default Header