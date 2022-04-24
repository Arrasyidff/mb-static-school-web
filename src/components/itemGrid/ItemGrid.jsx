import React from 'react'
import './itemGrid.scss'
import logo from '../../assets/images/logo.jpg'

function ItemGrid({ desc }) {
    return (
        <div className="mb__item-grid">
            <div className="mb__item-grid__image">
                <img src={logo} alt="" />
            </div>
            <h4 className="mb__item-grid--desc">{desc}</h4>
        </div>
    )
}

export default ItemGrid