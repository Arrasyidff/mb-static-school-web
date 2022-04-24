import React, { useEffect } from 'react'
import { Cover, JoinUs, Educations, Articles, Testimonials, About, Profile } from '../../sub_containers'
import { useLocation } from 'react-router-dom'

function Home() {
    const { pathname, hash, key } = useLocation()
    useEffect(() => {
        if (hash === '') {
            window.scrollTo(0, 0)
        } else {
            setTimeout(() => {
                const id = hash.replace('#', '')
                const element = document.getElementById(id)
                if (element) {
                    element.scrollIntoView();
                }
            }, 0)
        }
    }, [pathname, hash, key])
    return (
        <div className="mb__home">
            {/* <Cover />
            <JoinUs />
            <About />
            <Educations />
            <Profile />
            <Articles />
            <Testimonials /> */}
        </div>
    )
}

export default Home