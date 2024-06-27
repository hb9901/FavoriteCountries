import { useEffect, useState } from "react";
import api from "./api/api";
import Cards from "./components/CountryList";
import { TCountry } from "./types/coutry.type";

function App() {
  const [countries, setCountries] = useState<TCountry[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<TCountry[]>([]);

  useEffect(() => {
    async function getCountriesAPI() {
      const countries = await api.country.getCountries();
      setCountries(countries);
    }

    getCountriesAPI();
  }, []);

  const handleSelectedCountryClick = (country: TCountry) => {
    setCountries((prev) => [...prev, country]);
    setSelectedCountries((prev) =>
      prev.filter((prevCountry) => prevCountry !== country)
    );
  };

  const handleCountryClick = (country: TCountry) => {
    setSelectedCountries((prev) => [...prev, country]);
    setCountries((prev) =>
      prev.filter((prevCountry) => prevCountry !== country)
    );
  };

  return (
    <div className="container mx-auto p-6 flex flex-col justify-center items-center">
      <Cards
        title="Favorite Countries"
        countries={selectedCountries}
        handleCountryClick={handleSelectedCountryClick}
      />

      <Cards
        title="Countries"
        countries={countries}
        handleCountryClick={handleCountryClick}
      />
    </div>
  );
}

export default App;
