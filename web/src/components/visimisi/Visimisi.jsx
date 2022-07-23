import React from 'react'
import './visimisi.css'
import {FaRegEye} from 'react-icons/fa'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import {HiOutlinePuzzle, HiOutlineLightBulb} from 'react-icons/hi'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import {GrWorkshop} from 'react-icons/gr'
import {GiTeamUpgrade} from 'react-icons/gi'
import {IoThumbsUpOutline} from 'react-icons/io5'
 
const Visimisi = () => {
  return (
    <section id='visimisi'>

      <div className='visi'>
    
      <h5> Vision and Mission </h5>
      <h2> Visi dan Misi </h2>

      </div>

    
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3> Visi </h3>
        <div className='"experience__content'>
            <article className='experience__details'>
            <h3> Menjadi perusahaan IT Solusi terpercaya yang mengutamakan konsistensi dalam kualitas dan layanan sempurna dengan reputasi global </h3>
            </article>
            </div>
            </div>
        <div className='experience__backend'>
          <h3> Misi </h3>
          <div className='"experience__content'>
            <article className='experience__details'>
            <h3> Fokus pada solisi komprehensif dengan inovasi produk terbaru dan layanan sempurna sebagai bentuk hubungan jangka panjang yang berkelanjutan </h3>
            </article>
            </div>
          </div>
      </div>
      </section>

  )
}
export default Visimisi;