import fetchRequest from '../utils/fetch';

class WebApi {
  fetchUserName = () => {
    return fetchRequest({url: '/', method: 'POST', body: {
      name: '比尔盖茨'
    }})
  }
};

export default new WebApi();