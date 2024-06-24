import { AxiosInstance } from "axios";
import { Countries } from "../types/coutries.type";

class CountryAPI {
  #axios;
  constructor(axios:AxiosInstance) {
    this.#axios = axios;
  }

  async getCountries(){
    const path = "/all";

    const response = await this.#axios.get<Countries>(path);
    const data = response.data;

    return data;
  }
}

export default CountryAPI;
