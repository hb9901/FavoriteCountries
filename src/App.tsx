import { useEffect, useState } from "react";
import api from "./api/api";
import Cards from "./components/Cards";
import { Country } from "./types/coutry.type";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    async function getCountriesAPI() {
      const countries = await api.country.getCountries();
      setCountries(countries);
    }

    getCountriesAPI();
  }, []);

  const handleSelectedCountryClick = (country: Country) => {
    setCountries((prev) => [...prev, country]);
    setSelectedCountries((prev) =>
      prev.filter((prevCountry) => prevCountry !== country)
    );
  };

  const handleCountryClick = (country: Country) => {
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
