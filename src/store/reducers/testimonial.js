let initialState = {
    testimonials: [],
    loading: true
}

function testimonial(state = initialState, action) {
    switch (action.type) {
        case 'loading/setLoading': 
            return {...state, loading: action.payload}
        case 'testimonial/setTestimonials':
            return {...state, testimonials: action.payload}
        default:
            return state;
    }
}


export default testimonial