import { GET_LATEST, GET_OTHER } from "../types";

export default function(state={}, action) {
    switch(action.type){
        case GET_LATEST:
            return {...state, latest:action.payload}
        case GET_OTHER:
            return {...state, otherNews:action.payload}
        default:
            return state
    }
}