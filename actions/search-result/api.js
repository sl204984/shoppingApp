import { FetchRequest } from '../../src/utils/fetch';

/**
 * @param {pageSize number, pageNumber: number, type: number} body 
 */
export const fetchList = body => {
  return FetchRequest({
    url: 'home',
    method: 'POST',
    body
  })
}