import React, { useState } from 'react'
import logo from '../../assets/images/logo.jpg'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation()
    const [isOpenNav, setIsOpenNav] = useState(false)

    const handleClassActiveLink = (path) => {
        if (path === location.pathname) {
            return 'active-link'
        }
        return ''
    }

    const handleOpenNavbar = () => {
        setIsOpenNav(!isOpenNav)
        let itemLeft = document.getElementsByClassName('item--left')[0]
        let itemRight = document.getElementsByClassName('item--right')[0]
        if (isOpenNav) {
            itemLeft.style.marginLeft = '-1500px'
            itemRight.style.marginLeft = '-1500px'
        } else {
            itemLeft.style.marginLeft = 0
            itemRight.style.marginLeft = 0
        }
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
                    <NavLink to="/" className={`mb__navbar-main__item--nav ${handleClassActiveLink('/')}`}
                        onClick={handleOpenNavbar}
                    >BERANDA</NavLink>
                    <NavLink to="/#tentang_kami" className={`mb__navbar-main__item--nav`}
                        onClick={handleOpenNavbar}
                    >TENTANG KAMI</NavLink>
                </div>
                <div className="mb__navbar-main__item item--middle">
                    <i onClick={handleOpenNavbar} className="fas fa-bars"></i>
                    <div className="item--logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="mb__navbar-main__item item--right">
                    <NavLink to="/artikel-berita" className={`mb__navbar-main__item--nav ${handleClassActiveLink('/artikel-berita')}`}
                        onClick={handleOpenNavbar}
                    >ARTIKEL & BERITA</NavLink>
                    <NavLink to="/tk" className={`mb__navbar-main__item--nav ${handleClassActiveLink('/tk')}`}
                        onClick={handleOpenNavbar}
                    >TK</NavLink>
                    <NavLink to="/mi" className={`mb__navbar-main__item--nav ${handleClassActiveLink('/mi')}`}
                        onClick={handleOpenNavbar}
                    >MI</NavLink>
                    <NavLink to="/mts" className={`mb__navbar-main__item--nav ${handleClassActiveLink('/mts')}`}
                        onClick={handleOpenNavbar}
                    >MTS</NavLink>
                    {/* <NavLink to="/ppdb" className={`mb__navbar-main__item--nav ${handleClassActiveLink('/ppdb')}`}
                        onClick={handleOpenNavbar}
                    >PPDB</NavLink> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar