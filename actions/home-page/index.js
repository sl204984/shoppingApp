import {
  HOMEPAGE as types
} from '../../types';
import * as webApi from './api';

const data = [];
for (let i = 0; i < 1; i++) {
  data.push({
    key: 'index-' + i
  });
}

export const initDataList = () => {
  const res = webApi.fetchList();
  console.log('res', res)
  return {
    data,
    type: types.INITDATA
  }
}