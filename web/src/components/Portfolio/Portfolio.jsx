import React from 'react'
import './portfolio.css'
import kop from '../../assets/kop.jpg'
import app from '../../assets/app.jpg'
import unidalog from '../../assets/unidalog.jpg'
import uni from '../../assets/uni.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: app, 
    title: 'Software Managemen Koperasi Berbasis Online Sistem IoT',
    details :  "Disesuaikan dengan kebutuhan Aplikasi, Seperti Menu Simpan Pinjam, Menu Toko (Bayar dan Belanja), Menu Deposit, Menu daftar anggota (Tambah/Hapus), Menu Pengaturan, Menu Penukaran Voucer, Menu Pembagian SHU, dan Menu lainnya",
    
  },
  {
    avatar: unidalog, 
    title: 'UNIDALOG',
    details :  "UNIDALOG merupakan perangkat elektronik yang mampu untuk mengambil data-data pengukuran dari sensor, menyimpan data-data tersebut ke memori, dan selanjutnya mengirimkan data-data tersebut ke Data Base Server secara “remote”. UNIDALOG merupakan Data Logger multi fungsi, yang dapat dimanfaatkan untuk berbagaimacam aplikasi yang terkait dengan akuisisi data dan telemetri.",
  },
  {
  avatar: uni, 
  title: 'Autonomous Weather Station',
  details :  "Autonomous Weather Station, merupakan perangkat elektronik yang berfungsi untuk melakukan pemantauan, serta mengirimkan data-data pemantauan cuaca ke Database Server melalui jaringan GSM / Internet."
  },
  {
    avatar: kop, 
    title: 'APLIKASI KOPERASI: Litebrain Koperasi Simpan Pinjam',
    details :  "Disesuaikan dengan kebutuhan Aplikasi, Seperti Menu Simpan Pinjam, Menu daftar anggota (Tambah/Hapus), Menu Pengaturan, Menu Menu lainya dapat disesuaikan dengan kebutuhan User.",
  }
]


const Portfolio = () => {
  return (
   <section id = 'portfolio'>
    <h5> Proyek Kami </h5>
    <h2> Portfolio </h2>

    <Swiper className='container services__container'  
modules = {[Pagination]}
spaceBetween={40}
slidesPerView={1}
pagination={{ clickable: true }}>
      { 
        data.map(({avatar, title, details, details2, detail, pic2}, index) =>{
          return(
            <SwiperSlide key={index} className = "services">
              <div className='avatar'>
                <img src={avatar}/>
                </div>
              <h5 className='details'>{title}</h5>
              <small className='details__review'>{details}</small>
              <small className='details__review'>{details2}</small>
              <div className='picture'>
              <img src={detail}/>
              <img src={pic2}/>

              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
     </section>
  )
}


export default Portfolio