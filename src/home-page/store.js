import { Store } from 'plume2';
import { fromJS } from 'immutable';
import action from './actions';
import ListActor from './actor/list-actor';
import { fetchList } from './webapi';


export default class AppStore extends Store {
  constructor(props) {
    super(props);
  }

  bindActor() {
    return [new ListActor()];
  }

  init = () => {

  }

  fetchBaseInfo = async () => {
    const {res, err} = await fetchList();
  }
}