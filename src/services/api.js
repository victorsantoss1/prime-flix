import axios from 'axios'

//base url: https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/movie/550?api_key=4145ed5bdeb2152e38485981921c61aa

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api