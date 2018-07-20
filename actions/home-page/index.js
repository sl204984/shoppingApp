import {
  HOMEPAGE as types
} from '../../types';
import * as webApi from './api';

export const initDataList = (params = {}) => {
  return async dispatch => {
    const {
      res,
      err
    } = await webApi.fetchList(params);
    if (!err) {
      dispatch({
        data: res,
        type: types.INITDATA
      });
      return res;
    }
  }
}

export const addDataList = (params = {}) => {
  return async dispatch => {
    const {
      res,
      err
    } = await webApi.fetchList(params);
    if (!err) {
      dispatch({
        data: res,
        type: types.ADDDATA
      });
      return res;
    }
  }
}