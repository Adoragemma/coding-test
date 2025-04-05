import { useMutation } from '@tanstack/react-query'
import API from '.'

const version = 'v1'
const ENDPOINT = `/api/${version}/ai`

export const usePostAskQuestion = (config = {}) =>
  useMutation({
    mutationFn: (query) => API.post(`${ENDPOINT}/ask`, query),
    ...config,
  })
