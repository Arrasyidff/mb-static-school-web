import React from 'react'
import logo from '../../assets/images/logo.jpg'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation()

    const handleClassActiveLink = (path) => {
        if (path === location.pathname) {
            return 'active-link'
        }
        return ''
    }

    return (
        <div className="mb__navbar">
            <div className="mb__navbar-contacts">
                <div className="mb__navbar-contact contact--email">
                    <div className="contact--icon">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <p>mutiarabunda@mail.com</p>
                </div>
                <div className="mb__navbar-contact contact--whatsapp">
                    <div className="contact--icon">
                        <i className="fab fa-whatsapp"></i>
                    </div>
                    <p>+6289-333-2222-1111</p>
                </div>
                <div className="mb__navbar-contact contact--instagram">
                    <div className="contact--icon">
                        <i className="fab fa-instagram"></i>
                    </div>
                    <p>@mutiarabundabali</p>
                </div>
                <div className="mb__navbar-contact contact--facebook">
                    <div className="contact--icon">
                        <i className="fab fa-facebook"></i>
                    </div>
                    <p>Sekolah Karakter Mutiara Bunda Bali</p>
                </div>
                <div className="mb__navbar-contact contact--youtube">
                    <div className="contact--icon">
                        <i className="fab fa-youtube"></i>
                    </div>
                    <p>Sekolah Karakter Mutiara Bunda Bali</p>
                </div>
            </div>
            <div className='mb__navbar-main'>
                <div className="mb__navbar-main__item item--left">
                    <NavLink to="/" className={`mb__navbar-main__item--nav ${handleClassActiveLink('/')}`} >BERANDA</NavLink>
                    <NavLink to="/#tentang_kami" className={`mb__navbar-main__item--nav`} >TENTANG KAMI</NavLink>
                    <NavLink to="/artikel-berita" className={`mb__navbar-main__item--nav ${handleClassActiveLink('/artikel-berita')}`} >ARTIKEL & BERITA</NavLink>
                </div>
                <div className="mb__navbar-main__item item--middle">
                    <div className="item--logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="mb__navbar-main__item item--right">
                    <NavLink to="/tk" className={`mb__navbar-main__item--nav ${handleClassActiveLink('/tk')}`} >TK</NavLink>
                    <NavLink to="/mi" className={`mb__navbar-main__item--nav ${handleClassActiveLink('/mi')}`} >MI</NavLink>
                    <NavLink to="/mts" className={`mb__navbar-main__item--nav ${handleClassActiveLink('/mts')}`} >MTS</NavLink>
                    <NavLink to="/ppdb" className={`mb__navbar-main__item--nav ${handleClassActiveLink('/ppdb')}`} >PPDB</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar