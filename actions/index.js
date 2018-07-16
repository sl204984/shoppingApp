import {
  HOMEPAGE as types
} from '../types';

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: 'index-' + i
  });
}

export function initDataList() {
  return {
    data,
    type: types.INITDATA
  }
}