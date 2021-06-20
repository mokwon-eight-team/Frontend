import axios from '../axios/index'

export const restApi = {
    getMemList,
    getPostBoxData,
    getPostData
};

function getMemList() {
    return axios.get('http://localhost:8080/user/list');
}

function getPostBoxData() {
    return axios.get('/postboxdata');
}

function getPostData() {
    return axios.get('/getPostData');
}