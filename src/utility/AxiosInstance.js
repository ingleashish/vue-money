import axios from 'axios'

export const AxiosInstance = axios.create({
  baseURL: 'https://vue-money-backend.firebaseio.com/'
})
