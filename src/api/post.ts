import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { APIResponse, API_SUFFIX, instance } from './instance'

export const post = async (props: any) => {
  const { data } = await instance.post<APIResponse<any>>(API_SUFFIX.POST, {
    ...props,
  })
  return data
}
