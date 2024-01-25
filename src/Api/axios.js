import axios from 'axios'

const instance = axios.create({
    baseURL : "http://statsapi.mlb.com:80/api/v1/"
})

export default instance; 