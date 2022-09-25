import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { APIErrorResponse } from '~/api'
import { post } from '~/api/post'
import { useProfile } from './userAuth'

export const useCreatePost = () => {
  const navigate = useNavigate()

  const { data: profile } = useProfile()
  const { mutate, ...mutations } = useMutation<
    any,
    AxiosError<APIErrorResponse>,
    any
  >(['useRegister'], post, {
    onSuccess: () => {
      navigate('/')
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

  return { post: mutate, profile, ...mutations }
}
