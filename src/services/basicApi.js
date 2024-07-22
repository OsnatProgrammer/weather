import axios from "axios";

export const API_URL = "http://localhost:3001"
export const USER = "USER"

export const apiGet = async (_url) => {
    let currentUser = JSON.parse(localStorage.getItem('user'));
    try {
        let resp = await axios.get(_url, {
            headers: {
                user_mispar_ishi: currentUser.password,
                user_name: currentUser.name
            }
        })
        console.log("resp", resp);
        return resp;
    } catch (err) {
        throw err;
    }
}

export const apiWeather = async (_url) => {
    try {
        let resp = await axios.get(_url)
        console.log("resp", resp);
        return resp;
    } catch (err) {
        throw err;
    }
}

// This function is used to post, delete, put, patch
export const apiMethod = async (_url, _method, _body = {}) => {
    try {
        let resp = await axios({
            url: _url,
            method: _method,
            data: _body,
            headers: {
                user_mispar_ishi: _body.password,
                User_Name: _body.name
            }
        })
        return resp;
    } catch (err) {
        throw err;
    }
}

