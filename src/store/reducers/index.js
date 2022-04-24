import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import article from './article'
import testimonial from './testimonial'

const rooReducer = combineReducers({
    article,
    testimonial
})

export default createStore(rooReducer, applyMiddleware(thunk))
