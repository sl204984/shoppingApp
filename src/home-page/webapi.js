import { FetchRequest } from '../utils/fetch';

export const fetchList = () => {
  return FetchRequest({
    url: 'home',
    method: 'GET'
  })
}