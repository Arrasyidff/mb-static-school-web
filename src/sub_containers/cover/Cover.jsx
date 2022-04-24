import React from 'react'
import cover from '../../assets/images/cover.jpg'
import './cover.scss'

function Cover() {
  return (
    <div className="mb__cover">
        <div className="mb__cover-image">
            <div className="mb__cover--overlay" />
            <div className="mb__text-overlay">
              <h1>Membangun Karakter Anak Melalui Pendidikan Holistik Berbasis Karakter</h1>
            </div>
            <img src={cover} alt="cover" />
        </div>
    </div>
  )
}

export default Cover