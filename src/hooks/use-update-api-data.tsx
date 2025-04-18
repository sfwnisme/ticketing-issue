import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'

export default function useUpdateApiData<T /** the data types */>(endpoint: string, method: 'post' | 'patch' = 'post') {
  const mutation = useMutation({
    mutationKey: ['update-api-data', endpoint],
    mutationFn: async (data: T) => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('TOKEN')}`
      const BASE_URL = import.meta.env.VITE_BASE_URL + endpoint
      if (method === 'post') {
        const res = await axios.patch(BASE_URL, data)
        return res
      }
      if (method === 'patch') {
        const res = await axios.patch(BASE_URL, data)
        return res
      }
    },
    onSuccess: (res) => {
      console.log('onSuccess update api data', res)
      return res
    }
  })

  return mutation
}