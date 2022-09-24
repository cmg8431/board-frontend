import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useMutation, UseMutationResult } from '@tanstack/react-query'

import { APIErrorResponse, APIResponse, register, RegsiterValues } from '~/api'
import { toast } from 'react-toastify'

export const useLogin = () => {}

export const useRegister = () => {
  const navigate = useNavigate()

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

  return { signup: mutate, ...mutations }
}
