/* eslint-disable prettier/prettier */
class ApiRepository {
  static async getAllTransaction() {
    return fetch('https://nextar.flip.id/frontend-test')
      .then((result) => result.json())
      .catch(console.log);
  }
}

export default ApiRepository;
