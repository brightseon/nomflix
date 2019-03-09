import axios from 'axios';

const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    params : {
        api_key : 'a8cbc927ffdebce702cccd708c2ded62',
        language : 'en-US'
    }
});

// #4-1 Sexy Networking with Axios Instances
api.get('tv/popular');

export default api;