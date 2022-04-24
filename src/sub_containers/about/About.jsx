import React from 'react'
import logo from "../../assets/images/logo.jpg"
import './about.scss'

function About() {
  return (
    <div className="mb__about section__padding" id='tentang_kami'>
        <div className="mb__about-image-container">
            <div className='mb__about-image-container--image'>
                <img src={logo} alt="" />
            </div>
        </div>
        <div className="mb__about-desc">
            <h1>Assalamu'alaikum</h1>
            <p>
                Pendidikan diberikan secara seimbang antara akademis & keagamaan. Menggunakan
                Kurikulum Nasional K13 dibawah Kemenag dan mengadopsi Modul Pendidikan Holistik
                Berbasis Karakter mengadopsi dari IHF Karakter
            </p>
            <p>
                Yakni pembelajaran yang patut dan ramah
                otak-ramah jantung, dilakukan secara menyeluruh  untuk membangun seluruh potensi anak
                sesuai tahapan usia, perkembangan fisik dan moral anak.</p>
        </div>
    </div>
  )
}

export default About