import axios from 'axios';

const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    params : {
        api_key : 'a8cbc927ffdebce702cccd708c2ded62',
        language : 'en-US'
    }
});

export const moviesApi = {
    nowPlaying : () => api.get('movie/now_playing'),
    upcoming : () => api.get('movie/upcoming'),
    popular : () => api.get('movie/popular'),
    movieDetail : id => api.get(`movie/${ id }`, {
        params : {
            append_to_response : 'videos'
        }
    }),
    search : term => api.get('search/movie', {
        params : {
            // 어떤 파라미터 값을 넘기든 값을 인코딩하고, 그 문자열로 검색한다.
            query : encodeURIComponent(term)
        }
    })
};

export const tvApi = {
    topRated : () => api.get('tv/top_rated'),
    popular : () => api.get('tv/popular'),
    airingToday : () => api.get('tv/airing_today'),
    showDetail : id => api.get(`tv/${ id }`, {
        params : {
            append_to_response : 'videos'
        }
    }),
    search : term => api.get('search/tv', {
        params : {
            // 어떤 파라미터 값을 넘기든 값을 인코딩하고, 그 문자열로 검색한다.
            query : encodeURIComponent(term)
        }
    })
};