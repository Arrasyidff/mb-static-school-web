export const setTestimonials = () => {
    return (dispatch, getState) => {
        return dispatch({
            type: 'testimonial/setTestimonials',
            payload: [1, 2, 3, 4, 5]
        })
    }
}