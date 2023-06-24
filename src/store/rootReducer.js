import { combineReducers } from 'redux'
import theme from './slices/themeSlice'
import auth from './slices/authSlice'
import users from './slices/usersSlice'
import userInfo from './slices/userInfoSlice'

const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        theme,
        auth,
        users,
        userInfo,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}

export default rootReducer
