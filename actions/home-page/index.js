import {
  HOMEPAGE as types
} from '../../types';
import * as webApi from './api';

export const initDataList = () => {
  return async dispatch => {
    try {
      const { res, err } = await webApi.fetchList();
      dispatch({
        data: res,
        type: types.INITDATA
      });
      return res;
    } catch (err) {
      // 永远不会到达这儿
    }
  }
}