import axios from "axios";
import CountryAPI from "./country.api";

const BASE_URL = import.meta.env.VITE_BASE_URL;

class API {
  #axios;

  country;

  constructor() {
    this.#axios = axios.create({ baseURL: BASE_URL });

    this.country = new CountryAPI(this.#axios);
  }
}

const api = new API();
export default api;
