import React from 'react'
import './education.scss'
import logo from '../../assets/images/logo.jpg'
import mi from '../../assets/images/mi.png'

function Education({ level, desc }) {
  return (
    <div className="mb__education">
        <div className="mb__education-cover">
            <img src={mi} alt="" />
        </div>
        <p className="mb__education--level-title">{level} Karakter</p>
        <p className="mb__education--level-description">{desc}</p>
    </div>
  )
}

export default Education