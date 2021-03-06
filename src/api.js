import axios from "axios"
import config from './config.json'

const headers = {
    'Content-type': 'application/json',
}

const api = axios.create({
    headers,
    baseURL: config.API_URL
})

console.log(config.API_URL)

export default api;