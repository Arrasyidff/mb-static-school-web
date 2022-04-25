import React, { useEffect } from 'react'
import { Cover, JoinUs, Educations, Articles, Testimonials, About, Profile } from '../../sub_containers'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setTestimonials } from '../../store/actions/testimonial'
import evenBus from '../../evenBus'

function Home() {
    const dispatch = useDispatch()
    const { testimonials } = useSelector(state => state.testimonial)

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

    useEffect(() => {
        dispatch(setTestimonials())
    }, [dispatch])


    return (
        <div className="mb__home">
            <Cover />
            <JoinUs />
            <About />
            <Educations />
            <Profile />
            <Articles />
            {testimonials.length > 0 && <Testimonials />}
        </div>
    )
}

export default Home