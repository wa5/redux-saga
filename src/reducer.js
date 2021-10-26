import { GET_USERs_SUCCESS } from './action'

export const increamentCount = () => {
    return { type: 'INCREAMENT' }
}


const myfirtstreducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case GET_USERs_SUCCESS:
            return { ...state, users:action.users }

            break;
        default:
            return state;
    }
}

export default myfirtstreducer