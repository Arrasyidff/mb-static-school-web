let initialState = {
    testimonials: [],
    loading: true
}

function testimonial(state = initialState, action) {
    switch (action.type) {
        case 'testimonial/setTestimonials':
            return {...state, testimonials: action.payload}
        default:
            return state;
    }
}


export default testimonial