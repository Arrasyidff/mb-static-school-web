import React from 'react'
import './article.scss'
import logo from '../../assets/images/logo.jpg'
import { useNavigate } from 'react-router-dom' 

function Article() {
    const navigate = useNavigate()

    const handleNavigate = (to) => {
        navigate(to)
    }
    return (
        <div className="mb__article">
            <div className="mb__article-top-side">
                <p className="mb__article-top-side--date-create">
                    <span>April 6, Februari</span>
                </p>
                <p className="mb__article-top-side--title">Make Live Healthier with Littlepreneur SD Karakter</p>
            </div>
            <div className="mb__article-bottom-side">
                <div className="mb__article-bottom-side__cover">
                    <img src={logo} alt="" />
                </div>
                <div className="mb__article-bottom-side--description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, veritatis!
                </div>
                <span className="mb__article-bottom-side--btn-detail">
                    <button onClick={() => {handleNavigate('/artikel-berita/artikle_id')}}>Baca selengkapnya</button>
                </span>
            </div>
        </div>
    )
}

export default Article