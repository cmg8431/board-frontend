import { APIResponse, API_SUFFIX, instance } from './instance'

export type LoginFormValues = {
  username: string
  password: string
}

export interface UserProfileResponse {
  id: string
  createdAt: Date
  updatedAt: Date
  socialId: string
  email: string
  name: string | null
  nickname: string | null
  birth: string
}

export interface RegisterFormValues {
  username: string
  password: string
  name: string
  nickname: string
  phone_number: string
  sms_code: string
  password_check: string
}

export type RegsiterValues = Omit<
  RegisterFormValues,
  'password_check' | 'sms_code'
>

export interface LoginResponse {
  access: string
  refresh: string
}

export const login = async (
  payload: LoginFormValues
): Promise<APIResponse<LoginResponse>> => {
  const { data } = await instance.post<APIResponse<LoginResponse>>(
    API_SUFFIX.LOGIN,
    payload
  )
  return data
}

export const register = async (payload: RegsiterValues) => {
  const { data } = await instance.post(API_SUFFIX.REGISTER, {
    ...payload,
    photo: null,
  })
  return data
}

export const getUserProfile = async (): Promise<
  APIResponse<UserProfileResponse>
> => {
  const { data } = await instance.get<APIResponse<UserProfileResponse>>(
    API_SUFFIX.USER_PROFILE
  )
  return data
}

export const sendSms = async (phone_number: string): Promise<APIResponse> => {
  const { data } = await instance.post<APIResponse>(API_SUFFIX.SEND_SMS, {
    phone_number,
  })
  return data
}

export const checkSmsCode = async (
  phone_number: string,
  auth_code: string
): Promise<APIResponse> => {
  const { data } = await instance.post<APIResponse>(API_SUFFIX.CHECK_SMS_CODE, {
    auth_code,
    phone_number,
  })
  return data
}

export const issueAccessToken = async (refresh: string) => {
  const { data } = await instance.post<APIResponse<LoginResponse>>(
    API_SUFFIX.AUTH_REFRESH,
    { refresh }
  )

  return data
}
