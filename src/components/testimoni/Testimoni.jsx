import React from 'react'
import './testimoni.scss'

function Testimoni({name, picture, message}) {
  return (
    <div className="mb__testimoni">
        <i className="fas fa-quote-right"></i>
        <p className="mb__testimoni--word">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat explicabo ab error possimus quia neque distinctio, nostrum, atque labore reiciendis, sequi laborum aut fugit assumenda. Libero in fuga, quibusdam doloremque omnis voluptatum maiores facilis nisi fugiat dolorem assumenda nobis accusantium? */}
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, exercitationem. */}
            {message}
        </p>
        <div className='mb__testimoni-cover'>
            <img src={picture} alt="" />
        </div>
        <p className="mb__testimoni--name">{name}</p>
    </div>
  )
}

export default Testimoni