import React, { useState } from 'react'
import logo from '../../assets/images/logo.jpg'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import contacts from './contacts'
import { itemLeft, itemRight } from './item'

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
        let openSlideNav = document.getElementsByClassName('mb__navbar-main__slide-content')[0]
        if (isOpenNav) {
            openSlideNav.style.marginLeft = '-1500px'
        } else {
            openSlideNav.style.marginLeft = 0
        }
    }

    return (
        <div className="mb__navbar">
            <div className="mb__navbar-contacts">
                {
                    contacts.map((contact, idx) => {
                        return (
                            <div key={idx} className={`mb__navbar-contact ${contact.class}`}>
                                <div className="contact--icon">
                                    <i className={contact.iconClass}></i>
                                </div>
                                <p>{contact.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='mb__navbar-main'>
                <div className="mb__navbar-main__item item--left">
                    {
                        itemLeft.map((item, idx) => {
                          return (
                            <NavLink
                                key={idx}
                                to={item.to} 
                                className={`mb__navbar-main__item--nav ${handleClassActiveLink(item.to)}`}
                            >{item.desc}</NavLink>
                          )  
                        })
                    }
                </div>
                <div className="mb__navbar-main__item item--middle">
                    <div className="item--logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="mb__navbar-main__item item--right">
                    {
                        itemRight.map((item, idx) => {
                          return (
                            <NavLink
                                key={idx}
                                to={item.to} 
                                className={`mb__navbar-main__item--nav ${handleClassActiveLink(item.to)}`}
                            >{item.desc}</NavLink>      
                          )  
                        })
                    }
                </div>
                <div className="mb__navbar-main__slide">
                    <div className="mb__navbar-main__slide-head">
                        <i onClick={() => {handleOpenNavbar()}} className="fas fa-bars"></i>
                        <div className="mb__navbar-main__item">
                            <div onClick={() => {console.log('123')}} className="item--logo">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mb__navbar-main__slide-content">
                        {
                            itemLeft.map((item, idx) => {
                            return (
                                <NavLink
                                    key={idx}
                                    to={item.to} 
                                    className={`mb__navbar-main__item--nav ${handleClassActiveLink(item.to)}`}
                                    onClick={() => {handleOpenNavbar()}}
                                >{item.desc}</NavLink>
                            )  
                            })
                        }
                        {
                            itemRight.map((item, idx) => {
                            return (
                                <NavLink
                                    key={idx}
                                    to={item.to}
                                    className={`mb__navbar-main__item--nav ${handleClassActiveLink(item.to)}`}
                                    onClick={() => {handleOpenNavbar()}}
                                >{item.desc}</NavLink>
                            )  
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar