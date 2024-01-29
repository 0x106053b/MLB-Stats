import axios from 'axios'

const instanceNews = axios.create({
    baseURL : "https://newsapi.org/v2/everything"
})

export default instanceNews; 