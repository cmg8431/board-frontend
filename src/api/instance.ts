import axios from 'axios'

export const API_SUFFIX = {
  BASE_URL: 'http://localhost:8000/api',
  USERS: '/users/',
  USER_PROFILE: '/users/profile/',
  REFRESH: '/auth/refresh/',
  LOGIN: '/auth/login/',
  REGISTER: '/auth/register/',
  SEND_SMS: '/sms',
  CHECK_SMS_CODE: '/sms/verify',
}

export const instance = axios.create({
  baseURL: API_SUFFIX.BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export type APIResponseStatusType = 'SUCCESS' | 'FAILED'

export interface APIResponse<T = unknown> {
  status: APIResponseStatusType
  status_code: number
  message: string
  result: T
}

export interface APIErrorResponse {
  status: 'FAILED'
  status_code: number
  message: string
  result?: null
}

export const setAPIAccessToken = (token: string | null) => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`
  } else {
    delete instance.defaults.headers.common.Authorization
  }
}
