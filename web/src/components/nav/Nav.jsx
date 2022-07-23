import React from 'react'
import './nav.css'
import {AiFillHome, AiFillContacts, AiOutlineFileSearch} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {MdOutlineScreenSearchDesktop} from 'react-icons/md'
import { useState } from 'react'
import {RiLightbulbFlashLine} from 'react-icons/ri'




const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' className = {activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about' ? 'active': '')}><FcAbout/></a>
      <a href='#visimisi'onClick={() => setActiveNav('#visimisi' ? 'active': '')}><AiOutlineFileSearch/></a>
      <a href='#services'onClick={() => setActiveNav('#services' ? 'active': '')}><MdOutlineScreenSearchDesktop/></a>
      <a href='#strength' onClick={() => setActiveNav('#strength' ? 'active': '')}><RiLightbulbFlashLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact' ? 'active': '')}><AiFillContacts/></a>
      
    </nav>
  )
}

export default Nav