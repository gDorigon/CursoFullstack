// Base url https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/movie/now_playing?api_key=d9fd0086812f610837729c617ee89806&lenguage=pt-BR

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;