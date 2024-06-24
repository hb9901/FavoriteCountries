import { useEffect, useState } from "react";
import api from "./api/api";
import Card from "./components/Card";
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
    <div className="flex flex-col justify-center items-center">
      <h2>Favorite Countries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {selectedCountries?.map((country, index) => (
          <Card
            handleCountryClick={() => handleSelectedCountryClick(country)}
            flag={country.flags.png}
            nation={country.name.common}
            capital={country.capital}
            key={index}
          />
        ))}
      </div>
      <h2>Countries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {countries?.map((country, index) => (
          <Card
            handleCountryClick={() => handleCountryClick(country)}
            flag={country.flags.png}
            nation={country.name.common}
            capital={country.capital}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
