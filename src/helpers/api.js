import {create} from 'apisauce';

const API_URL = 'https://reqres.in/api/';

const api = create({baseURL: API_URL});

export default api;
