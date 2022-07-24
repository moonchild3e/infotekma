import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsPinMap} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import barcode from '../../assets/barcode.jpg'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u45845n','template_oqq5f4q', form.current, 'ZFqzZxl7PV_upedsd')
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>  Contact Us </h5>
      <h2> Kontak Kami </h2>


      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail  className='contact__option-icon'/>
            <h6> Email </h6>
            <h5> infotekmatitb@gmail.com </h5>
            <a href='mailto:infotekmatitb@gmail.com'></a>
          </article>
          <article className='contact__option'>
          <BsPinMap  className='contact__option-icon'/>
            <h6> Lokasi </h6>
            <h5> Jl. Cijawura Girang VI No. 20 Sekejati, Kec. Buahbatu Kota Bandung 40286 </h5>
            </article>
          <article className='contact__option'>
           <AiOutlinePhone  className='contact__option-icon'/>
            <h6> Telpon </h6>
            <h5>(+62)8212827777</h5>
            </article>
        </div>
        <form ref ={form} onSubmit ={sendEmail}>
          <input type="text" name= 'name' placeholder="Full name/ Nama Lengkap" required/>
          <input type="email" name= 'name' placeholder="Email" required/>
          <textarea id="my-textarea" class="textarea-for-page" row = "20" placeholder = "Message/ Pesan" rows="5"></textarea>
          <button type='submit' className='btn btn-primary'> Kirim </button>
        </form>
      </div>
    </section>
  )
}

export default Contact