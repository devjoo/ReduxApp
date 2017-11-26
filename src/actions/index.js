import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS'; // 액션 타입 정의하는 것을 잊지 말자

const ROOT_URL = 'http://reduxblog.herokupp.com/api';
const API_KEY = '?key=mykey1234567890'

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

    return{
        type: FETCH_POSTS,
        payload: request
    };
}