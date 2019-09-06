import axios from 'axios';

import { GET_LATEST, GET_OTHER } from '../types';

const URL_ARTICLES = 'http://localhost:3004/articles';

export function latestNews() {

    const request = axios.get(`${URL_ARTICLES}?_order=desc&_end=2`).then(response => response.data)

    return {
        type: GET_LATEST,
        payload: request
    }
}

export function otherNews() {

    const request = axios.get(`${URL_ARTICLES}?_order=desc&_start=2&_end=15`).then(response => response.data)

    return {
        type: GET_OTHER,
        payload: request
    }
}

