import { AxiosInstance } from "axios";
import { Country } from "../types/coutry.type";

class CountryAPI {
  #axios;
  constructor(axios: AxiosInstance) {
    this.#axios = axios;
  }

  async getCountries(): Promise<Country[]> {
    const path = "/all";

    const response = await this.#axios.get<Country[]>(path);
    const data = response.data;

    return data;
  }
}

export default CountryAPI;
