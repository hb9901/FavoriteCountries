import axios, { AxiosInstance } from "axios";
import CountryAPI from "./country.api.ts";

const BASE_URL = "https://restcountries.com/v3.1";

class API {
  private axios: AxiosInstance;
  #baseURL = BASE_URL

  country;

  constructor() {
    this.axios = axios.create({ baseURL: this.#baseURL });

    this.country = new CountryAPI(this.axios);
  }
}

const api = new API();
export default api;
