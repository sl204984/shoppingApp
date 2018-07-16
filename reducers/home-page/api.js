import { FetchRequest } from '../../src/utils/fetch';

export const fetchList = () => {
  return FetchRequest({
    url: 'home',
    method: 'GET'
  })
}