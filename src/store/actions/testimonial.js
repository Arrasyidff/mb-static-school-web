export const setTestimonials = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: 'loading/setLoading',
            payload: true
        })
        const testimonialsResponse = await fetch('https://dummyapi.io/data/v1/user?limit=10', {
            method: 'GET',
            headers: {
                'app-id': '6265cccdebad126703c2a5f9',
            }
        })

        const testimonials = await testimonialsResponse.json()
        if (testimonials.data.length > 0) {
            dispatch({
                type: 'loading/setLoading',
                payload: false
            })
        }
        const formatTestimonials = testimonials.data.map((user, idx) => {
            user['fullName'] = `${user['firstName']} ${user['lastName']}` 
            if (idx % 2 === 0) {
                user['message'] = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptatibus.'
            } else {
                user['message'] = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat explicabo ab error possimus quia neque distinctio, nostrum, atque labore reiciendis, sequi laborum aut fugit assumenda. Libero in fuga, quibusdam doloremque omnis voluptatum maiores facilis nisi fugiat dolorem assumenda nobis accusantium?'
            }

            return user
        })
        return dispatch({
            type: 'testimonial/setTestimonials',
            payload: formatTestimonials
        })
    }
}