import { HOMEPAGE as types } from '../types';

const data = [];
for(let i = 0; i < 2; i++) {
  data.push({key: 'index-' + i});
}

const initialState = {
  data
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.INITDATA:
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}