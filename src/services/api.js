import axios from 'axios';

// criando var para guardar a api
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;