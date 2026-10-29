import axios from "axios"

const API_KEY = 'aacccb9c7536e66012e77ae63a8eb614'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

export async function getTrangingMovies() {
    const res = await axios.get('/trending/movie/day',{
        params: {
            api_key: API_KEY
        }
    })
    return res.data.results
}

export async function getMovieDetails(id) {
    const res = await axios.get(`/movie/${id}`, {
        params: {
            api_key: API_KEY
        }
    })
    return res.data
}

export async function getActorMovies(id) {
    const res = await axios.get(`/movie/${id}/credits`, {
        params: {
            api_key: API_KEY
        }
    })

    return res.data.cast
}

export async function getMovieReviews(id) {
    const res = await axios.get(`/movie/${id}/reviews`, {
        params: {
            api_key: API_KEY
        }
    })

    return res.data.results
}

export async function searchMovies(query) {
    const res = await axios.get('/search/movie', {
        params: {
            api_key: API_KEY,
            query: query,
            language: 'uk-UA'
        }
    })

    return res.data.results
}