import React from 'react'
import './strength.css'
import itmanage from '../../assets/itmanage.jpg'
import maintain from '../../assets/maintain.jpg'
import itout from '../../assets/itout.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: itmanage, 
    title: 'IT Managed Services',
    details :  "Kami menyediakan layanan pengelolaan untuk semua perangkat dan infrastruktur TI dari bisnis skala kecil hingga besar dengan layanan lokasi kami tersebar di berbagai wilayah."   
  },
  {
    avatar: maintain, 
    title: 'Maintenance Services',
    details :  "Dengan identitas kami sebagai perusahaan solusi TI satu atap dan jaringan luas di berbagai provinsi di Indonesia, kami menawarkan solusi pemeliharaan dan perbaikan dalam hal perangkat keras, perangkat lunak dan integrator sehingga bisnis utama anda tidak terganggu."   
  },
  {
  avatar: itout, 
  title: 'IT Outsourcing',
  details :  "Kami menawarkan layanan pengalihdayaan TI dengan personel yang berpengalaman, terdidik, dan bersertifikat untuk berbagai skala bisnis Anda di berbagai lokasi di Indonesia."   
  }
]


const Strength = () => {
  return (
   <section id = 'strength'>
    <h5>Our Services </h5>
    <h2> Layanan dan Jasa </h2>

    <Swiper className='container services__container'  
modules = {[Pagination]}
spaceBetween={40}
slidesPerView={1}
pagination={{ clickable: true }}>
      { 
        data.map(({avatar, title, details}, index) =>{
          return(
            <SwiperSlide key={index} className = "services">
              <div className = 'client__avatar'>
                <img src={avatar}/>
              </div>
              <h5 className='details'>{title}</h5>
              <small className='details__review'>{details}</small>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
     </section>
  )
}

export default Strength
