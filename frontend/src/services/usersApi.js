import sendRequest from './sendRequest'

const BASE_URL = 'https://movie-app-production-0aa7.up.railway.app/api/users'

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData)
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}
