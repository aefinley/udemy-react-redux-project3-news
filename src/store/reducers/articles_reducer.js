import { 
    GET_LATEST, 
    GET_OTHER, 
    GET_ARTICLE_DATA,
    HANDLE_LIKES_ARTICLE
} from "../types";

export default function(state={}, action) {
    switch(action.type){
        case GET_LATEST:
            return {...state, latest:action.payload}
        case GET_OTHER:
            return {...state, otherNews:action.payload}
        case GET_ARTICLE_DATA:
            return {...state, articleData:action.payload}
        case HANDLE_LIKES_ARTICLE:
            return {...state, articleData: [action.payload]}
        default:
            return state
    }
}