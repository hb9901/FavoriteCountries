import { useEffect, useState } from "react";
import api from "./api/api";
import { Countries } from "./types/coutries.type";

function App() {
  const [countries, setCountries] = useState<Countries>();

  useEffect(() => {
    async function getCountriesAPI() {
      const countries = await api.country.getCountries();
      setCountries(countries);
    }

    getCountriesAPI();
  }, []);

  console.log(countries);
  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Favorite Countries</h2>

      <h2>Countries</h2>
    </div>
  );
}

export default App;
