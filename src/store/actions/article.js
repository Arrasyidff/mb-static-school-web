export const setArticles = () => {
    return (dispatch, getState) => {
        return dispatch({
            type: 'article/setAricles',
            payload: [1, 2, 3, 4, 5]
        })
    }
}