import { APIResponse, API_SUFFIX, instance } from './instance'

export const post = async (props: any) => {
  console.log(props)
  const { data } = await instance.post<APIResponse<any>>(API_SUFFIX.POST, {
    ...props,
  })

  return data
}
