import {combineReducers} from 'redux'
import messages from '../ducks/messages'
import user from '../ducks/user'
import points from '../ducks/points'
import {routerReducer as router} from 'react-router-redux'

export default combineReducers({
    router,
    messages,
    user,
    points
})
