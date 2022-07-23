import React from 'react'
import './services.css'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import {HiOutlinePuzzle, HiOutlineLightBulb} from 'react-icons/hi'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import {BiPointer} from 'react-icons/bi'
import {GrWorkshop} from 'react-icons/gr'
import {GiTeamUpgrade} from 'react-icons/gi'
import {IoThumbsUpOutline} from 'react-icons/io5'


const Services = () => {
  return (
    <section id='services'>
    <h5> Our Strength </h5>
    <h2> Kekuatan Kami </h2>


    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <HiOutlinePuzzle className='about__icon' color='white'/>
            <h6> Service Management System</h6>
            <h3> Kami menyederhanakan proses penanganan masalah bagi pelanggan </h3>
          </article>
          <article className='about__card'>
            <BsFillPersonCheckFill className='about__icon' color='white'/>
            <h6> Have The Best Partners </h6>
            <h3> Kami bermitra dengan beberapa perusahaaan besar dan termuka </h3>

          </article>
          <article className='about__card'>
            <BiPointer className='about__icon' color='white'/>
            <h6> Service point </h6>
            <h3> Kami memiliki lokasi layanan di berberapa kota di Indonesia </h3>
          </article>
          <article className='about__card'>
            <HiOutlineLightBulb className='about__icon' color='white'/>
            <h6> Great Support </h6>
            <h3>  Respon cepat adalah bagian dari komitmen kami untuk memberikan layanan terbaik </h3>
          </article>
          <article className='about__card'>
            <GiTeamUpgrade className='about__icon' color='white'/>
            <h6> Focus on Solution </h6>
            <h3> Kami selalu berpikir untuk memberikan solusi terbaik dan tepat untuk kebutuhan perusahaan anda </h3>
          </article>
          <article className='about__card'>
            <IoThumbsUpOutline className='about__icon' color='white'/>
            <h6>Profesional </h6>
            <h3>  Kami memiliki sumber daya manusia yang profesional dan berdedikasi tinggi dan bersertifikat  </h3>
          </article>
        </div>
      </div>
      </div>
   </section>
  )
}

export default Services