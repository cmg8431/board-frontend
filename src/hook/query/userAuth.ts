import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'

import {
  APIErrorResponse,
  APIResponse,
  APIResponseStatusType,
  getUserProfile,
  issueAccessToken,
  login,
  LoginFormValues,
  register,
  RegsiterValues,
  setAPIAccessToken,
} from '~/api'
import { toast } from 'react-toastify'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { globalAccessTokenState } from '~/store/user'

type GetCredentialsResponse = Promise<any>

export const useLogin = () => {
  const setGlobalAccessToken = useSetRecoilState(globalAccessTokenState)

  const getCredentialsByLogin = async (
    payload: LoginFormValues
  ): GetCredentialsResponse => {
    try {
      const {
        result: { access, refresh },
      } = await login(payload)

      return { access, refresh }
    } catch (err) {}

    return { access: null, refresh: null }
  }

  const getCredentials = async (parameter: LoginFormValues) => {
    return await getCredentialsByLogin(parameter)
  }

  const login = async (parameter: LoginFormValues) => {
    const { access, refresh } = await getCredentials(parameter)
    if (access === null || refresh === null) {
      throw new Error('소셜 로그인에 실패했어요')
    }

    localStorage.setItem('@token', refresh)
    setGlobalAccessToken(access)
    setAPIAccessToken(access)
    return access
  }

  const { data: profile, refetch } = useProfile()
  const { mutate, ...mutations } = useMutation<
    string,
    AxiosError<APIErrorResponse>,
    LoginFormValues
  >(['useLogin'], login, {
    onSuccess: () => refetch(),
    onError: () => {},
    retry: 0,
  })

  return { signin: mutate, profile, ...mutations }
}

export const useRegister = () => {
  const navigate = useNavigate()

  const { data: profile } = useProfile()
  const { mutate, ...mutations } = useMutation<
    string,
    AxiosError<APIErrorResponse>,
    RegsiterValues
  >(['useRegister'], register, {
    onSuccess: () => {
      navigate('/auth/login')
      toast.success('회원가입에 성공하셨어요!', {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: 'dark',
      })
    },
    onError: (error) => {
      toast.error(error.response?.data.message, {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: 'dark',
      })
    },
    retry: 0,
  })

  return { signup: mutate, profile, ...mutations }
}

export const useProfile = () => {
  const [globalAccessToken, setGlobalAccessToken] = useRecoilState(
    globalAccessTokenState
  )

  return useQuery(
    ['useProfile'],
    async () => {
      if (globalAccessToken === '') {
        const refresh = await localStorage.getItem('@token')
        if (!refresh) {
          throw new DOMException(
            'NOT_FOUND_TOKEN',
            '리프레시 토큰을 찾을 수 없어요'
          )
        }
        const { result } = await issueAccessToken(refresh)
        setGlobalAccessToken(result.access)
        setAPIAccessToken(result.access)
      }

      const { result } = await getUserProfile()
      return result
    },
    {
      onSuccess: (profile) => {
        toast.success('로그인에 성공하셨습니다.', {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
          theme: 'light',
        })
      },
      onError: (error) => {
        setGlobalAccessToken('')
        setAPIAccessToken(null)
        toast.error('로그인 실패에 실패하셨습니다.', {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
          theme: 'light',
        })
      },
      retry: 0,
      staleTime: 60 * 60 * 10,
    }
  )
}
