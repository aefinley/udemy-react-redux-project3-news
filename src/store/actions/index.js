import axios from 'axios';

import { 
    GET_LATEST, 
    GET_OTHER, 
    GET_ARTICLE_DATA,
    HANDLE_LIKES_ARTICLE
} from '../types';

const URL_ARTICLES = 'http://localhost:3004/articles';

export function latestNews() {

    const request = axios.get(`${URL_ARTICLES}?_order=desc&_end=2`).then(response => response.data)

    return {
        type: GET_LATEST,
        payload: request
    }
}

export function otherNews() {

    const request = axios.get(`${URL_ARTICLES}?_order=desc&_start=3&_end=15`).then(response => response.data)

    return {
        type: GET_OTHER,
        payload: request
    }
}

export function getArticleData(id) {

    const request = axios.get(`${URL_ARTICLES}?id=${id}`).then(response => response.data)

    return {
        type: GET_ARTICLE_DATA,
        payload: request
    }
    
}

export function handleArticleLikes(newLikes, id) {

    const request = axios(`${URL_ARTICLES}/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        data: JSON.stringify({likes: newLikes})
    }).then(response => response.data)

    return {
        type: HANDLE_LIKES_ARTICLE,
        payload: request
    }
}

