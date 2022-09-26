import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { APIResponse, API_SUFFIX, instance } from './instance'

export const createPost = async (props: any) => {
  const { data } = await instance.post<APIResponse<any>>(API_SUFFIX.POST, {
    ...props,
  })
  return data
}

export const deletePost = async (pk: any) => {
  const { data } = await instance.delete<APIResponse<any>>(
    `${API_SUFFIX.POST}${pk}/`
  )
  return data
}

export const updatePost = async (post: any) => {
  console.log(post)
  const { data } = await instance.put<APIResponse<any>>(
    `${API_SUFFIX.POST}${post.id}/`,
    {
      title: post.title,
      content: post.content,
      category: post.category,
      photo: post.photo,
      status: post.status,
    }
  )
  return data
}

export const post = async () => {
  const { data } = await instance.get<APIResponse<any>>(API_SUFFIX.POST)
  return data
}

export const getDetailPost = async (pk: any) => {
  const { data } = await instance.get<APIResponse<any>>(
    `${API_SUFFIX.POST}${pk}/`
  )
  return data
}
