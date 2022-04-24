import React from 'react'
import './testimoni.scss'
import logo from '../../assets/images/logo.jpg'

function Testimoni() {
  return (
    <div className="mb__testimoni">
        <i className="fas fa-quote-right"></i>
        <p className="mb__testimoni--word">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat explicabo ab error possimus quia neque distinctio, nostrum, atque labore reiciendis, sequi laborum aut fugit assumenda. Libero in fuga, quibusdam doloremque omnis voluptatum maiores facilis nisi fugiat dolorem assumenda nobis accusantium?
        </p>
        <div className='mb__testimoni-cover'>
            <img src={logo} alt="" />
        </div>
        <p className="mb__testimoni--name">Tom Holland</p>
    </div>
  )
}

export default Testimoni