import axios from "axios";

const getAPI = axios.create({
    baseURL: 'https://enigmatic-dawn-95775.herokuapp.com',
    timeout: 100000
})

export { getAPI }