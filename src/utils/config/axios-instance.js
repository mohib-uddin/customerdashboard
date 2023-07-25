import axios from "axios";

const createAxiosInstance = (token) => {
    const instance = axios.create({
        baseURL: `https://api.chooseketamine.com`,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': token,
        }
    });

    return instance;
};

export default createAxiosInstance;
