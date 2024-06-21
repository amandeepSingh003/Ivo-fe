import axios from "axios";
import { SECRETEKEYS } from "./secreteKeys";

const API_URL = process.env.REACT_APP_API_HOST;

const axiosApi = axios.create({
    baseURL: API_URL
})

axiosApi.defaults.withCredentials = true

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem(SECRETEKEYS.AUTHTOKEN)

    if(token){
        config["headers"]["common"]["Authorization"] = `Bearer ${token}`
    }

    return config
})

axios.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
)

export async function get(endPoint, config = {} ){
    var config = {
        method: "GET",
        url: `${API_URL}${endPoint}`,
        headers: {
            "X-Requested-With": "XMLHttpRequest",
        },
        params: {
            ...config?.params
        },
    }
    
    return axios(config).catch(error => {
        throw error
    })
}

export async function post(endPoint, data, config = {}) {
    var config = {
        method: "POST",
        url: `${API_URL}${endPoint}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Requested-With": "XMLHttpRequest",
        },
        data: data,
        params: {
            ...config?.params,
        },
    }

    return axios(config).catch(error => {
        throw error.response
    })
}