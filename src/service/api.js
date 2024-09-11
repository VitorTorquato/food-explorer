import axios from 'axios';

export const api = axios.create({
    baseURL: "https://food-explorer-api-sbg8.onrender.com"
});


