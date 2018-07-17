import {
  HOMEPAGE as types
} from '../../types';

const initialState = {
  data: []
}

export default function initDataList(state = initialState, action) {
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