import axios from "axios"

const api = axios.create({
    baseURL: process.env.APIURL,
    headers: {
        apikey: process.env.APIKEY,
    }
});

export default api