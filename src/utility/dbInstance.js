import axios from 'axios'

const axiosDbInstance = axios.create({
  baseURL: 'https://vue-money-backend.firebaseio.com/'
})

export default axiosDbInstance
