import React from 'react'
import './services.css'
import {BiPointer, BiSupport } from 'react-icons/bi'
import {GiTeamIdea} from 'react-icons/gi'
import {AiOutlineCustomerService, AiOutlineSolution} from 'react-icons/ai'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import {IoThumbsUpOutline} from 'react-icons/io5'


const Services = () => {
  return (
    <section id='services'>
    <h5> Our Strength </h5>
    <h2> Kekuatan Kami </h2>


    <div className='container strength__container'>
      <div className='strength__me'>
        <div className='about__me-image'>
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <AiOutlineCustomerService className='about__icon' color='white'/>
            <h6> Service Management System</h6>
            <h3> Kami menyederhanakan proses penanganan masalah bagi pelanggan </h3>
          </article>
          <article className='about__card'>
            <GiTeamIdea className='about__icon' color='white'/>
            <h6> Have The Best Partners </h6>
            <h3> Kami bermitra dengan beberapa perusahaaan besar dan termuka </h3>

          </article>
          <article className='about__card'>
            <BiPointer className='about__icon' color='white'/>
            <h6> Service point </h6>
            <h3> Kami memiliki lokasi layanan di berberapa kota di Indonesia </h3>
          </article>
          <article className='about__card'>
            <BiSupport className='about__icon' color='white'/>
            <h6> Great Support </h6>
            <h3>  Respon cepat adalah bagian dari komitmen kami untuk memberikan layanan terbaik </h3>
          </article>
          <article className='about__card'>
            <AiOutlineSolution className='about__icon' color='white'/>
            <h6> Focus on Solution </h6>
            <h3> Kami selalu berpikir untuk memberikan solusi terbaik dan tepat untuk kebutuhan perusahaan anda </h3>
          </article>
          <article className='about__card'>
            <BsFillPersonCheckFill className='about__icon' color='white'/>
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