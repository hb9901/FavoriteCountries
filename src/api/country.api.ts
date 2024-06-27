import { AxiosInstance } from "axios";
import { TCountry } from "../types/coutry.type";

class CountryAPI {
  #axios;
  constructor(axios: AxiosInstance) {
    this.#axios = axios;
  }

  async getCountries(): Promise<TCountry[]> {
    const path = "/all";

    const response = await this.#axios.get<TCountry[]>(path);
    const data = response.data;

    return data;
  }
}

export default CountryAPI;
