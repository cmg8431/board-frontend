import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { APIResponse, API_SUFFIX, instance } from './instance'

export const createPost = async (props: any) => {
  const { data } = await instance.post<APIResponse<any>>(API_SUFFIX.POST, {
    ...props,
  })
  return data
}

export const post = async () => {
  const { data } = await instance.get<APIResponse<any>>(API_SUFFIX.POST)
  return data
}
