class CountryAPI {
  #axios;
  constructor(axios) {
    this.#axios = axios;
  }

  async getCountries(){
    const response = await this.#axios.get();
    const data = response.data;

    return data;
  }
}

export default CountryAPI;
