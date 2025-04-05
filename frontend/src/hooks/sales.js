import { useQuery } from '@tanstack/react-query'
import API from '.'

const version = 'v1'
const ENDPOINT = `/api/${version}/sales`
const QUERY_KEY = 'sales'

export const useGetSalesSummary = (config = {}) =>
  useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => (await API.get(ENDPOINT)).data,
    ...config,
  })

export const useGetSalesRepDeatils = (salesId, config = {}) =>
  useQuery({
    queryKey: [QUERY_KEY, salesId],
    queryFn: async () => (await API.get(`${ENDPOINT}/${salesId}`)).data,
    ...config,
  })
