import { Store } from 'plume2';
import { fromJS } from 'immutable';
import action from './actions';
import ListActor from './actor/list-actor';
import { fetchList } from './webapi';


export default class AppStore extends Store {

  bindActor() {
    return [new ListActor()];
  }

  init = () => {
    this.fetchBaseInfo();
  }

  fetchBaseInfo = async () => {
    const {res, err} = await fetchList();
    console.log('res', res);
  }
}