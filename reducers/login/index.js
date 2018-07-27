import { LOGIN as types } from '../../types';

const initialState = {
  loginInfo: {}
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.INITDATA:
      return {
        ...state,
        loginInfo: action.loginInfo
      }
    default:
      return state;
  }
}