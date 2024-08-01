import { API_URL, apiGet, apiMethod, apiWeather } from "./basicApi";

export const login = async (data) => {
    let url = `${API_URL}/login`;
    try {
        return await apiMethod(url, "POST", data);
    } catch (err) {
        return err.response;
    }
};

export const getAllCities = async () => {
    let url = `${API_URL}/getAllCities`;
    try {
        return await apiGet(url);
    } catch (err) {
        return err.response;
    }
};

export const getLatAndLon = async (city) => {
    let url = `${API_URL}/cities/${city}`;
    try {
        return await apiGet(url);
    } catch (err) {
        return err.response;
    }
};

export const getWeather = async (lat, lon) => {
    const key = '6f11fa9760902e1597265ad205f05d2c'
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`;
    try {
        return await apiWeather(url);
    } catch (err) {
        return err.response;
    }
};

export const getSoldiers = async () => {
    let url = `http://localhost:3001/getAllSoldiers`;
    try {
        return await apiGet(url);
    } catch (err) {
        return err.response;
    }
};