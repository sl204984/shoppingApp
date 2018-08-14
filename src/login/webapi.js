import fetchRequest from '../utils/fetch';

class WebApi {
  fetchUserName = () => {
    return fetchRequest({url: '/register', method: 'POST', body: {
      name: '比尔盖茨'
    }});
  }
};

export default new WebApi();