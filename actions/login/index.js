import {
  LOGIN as types
} from '../../types';
import { StorageKeys, Storage } from '../../src/utils/local-store';

export const initLoginInfo = () => {
  return async dispatch => {
    const res = await Storage.load({
      key: StorageKeys.loginInfo,
      autoSync: true,
      syncInBackground: true
    });
    if(res) {
      dispatch({
        loginInfo: res,
        type: types.INITDATA
      });
      return res;
    }
  }
}