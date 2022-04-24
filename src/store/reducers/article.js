let initialState = {
    articles: [],
    loading: true
}

function article(state = initialState, action) {
    switch (action.type) {
        case 'article/setAricles':
            return {...state, articles: action.payload}
        default:
            return state;
    }
}


export default article