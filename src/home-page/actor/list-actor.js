import { Actor, Action, IMap } from 'plume2';
import actions from '../actions';

export default class ListActor extends Actor {
  defaultState() {
    return {
      listData: []
    };
  }

  @Action(actions.initList)
  initList(state, param) {
    return state.set('listData', param);
  }
}
