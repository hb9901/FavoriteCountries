import { AxiosInstance } from "axios";

class CountryAPI {
  #axios;
  constructor(axios:AxiosInstance) {
    this.#axios = axios;
  }

  async getCountries(){
    const response = await this.#axios.get<any>();
    const data = response.data;

    return data;
  }
}

export default CountryAPI;
