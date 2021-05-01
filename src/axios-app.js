import axios from "axios";

const getAPI = axios.create({
    baseURL: 'http://0.0.0.0:8000',
    timeout: 1000
})

export { getAPI }