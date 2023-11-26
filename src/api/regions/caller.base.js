import axios from 'axios';

const base = axios.create({
    baseURL : process.env.VUE_APP_URL_BASE_COUNTRIES,
});



export default base;