import { useMutation, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { APIErrorResponse } from '~/api'
import { createPost, getDetailPost, post } from '~/api/post'
import { useProfile } from './userAuth'

export const useCreatePost = () => {
  const navigate = useNavigate()

  const { data: profile } = useProfile()
  const { mutate, ...mutations } = useMutation<
    any,
    AxiosError<APIErrorResponse>,
    any
  >(['useCreatePost'], createPost, {
    onSuccess: () => {
      navigate('/')
      toast.success('게시물 생성에 성공하셨어요!', {
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

  useAllPost()
  return { post: mutate, profile, ...mutations }
}

export const useAllPost = () => {
  return useQuery(
    ['useAllPost'],
    async () => {
      const { result } = await post()
      return result
    },
    {
      onError: (error: any) => {
        console.log(error)
      },
      retry: 0,
    }
  )
}

export const useDetailPost = () => {
  const location = useLocation()

  return useQuery(
    ['useDetailPost'],
    async () => {
      const { result } = await getDetailPost(location.state)
      return result
    },
    {
      onError: (error: any) => {
        console.log(error)
      },
      retry: 0,
    }
  )
}
