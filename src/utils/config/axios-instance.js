import axios from "axios";

const instance = axios.create({
    baseURL: `https://api.chooseketamine.com`,
});


instance.interceptors.request.use(
    (config) => {
        // const authToken = getAuthToken();
        // if (authToken) {
            config.headers["Authorization"] = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiZjkyMGZhNy00NTFiLTQzODctYTc5OS1jYTg3MjhlN2FkMzAiLCJpYXQiOjE2MzAzNTczMDF9.t_wYBX7LSm1HuyHmfyckJpScmR2a0fZUinZ1nF8u1JM`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default instance;