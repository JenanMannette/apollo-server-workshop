const { RESTDataSource } = require('apollo-datasource-rest');

class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com';
  }

  async getUser(id) {
    // Hint: The route you want is /users/:id
    const resp = await this.get(`users/${id}`);
    console.log('resp', resp);
    return resp;
  }
}

module.exports = UsersAPI;
