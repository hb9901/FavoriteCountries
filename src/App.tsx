import { useEffect, useState } from "react";
import api from "./api/api";
import CountryList from "./components/CountryList";
import { TExtendedCountry } from "./types/coutry.type";

function App() {
  const [countries, setCountries] = useState<TExtendedCountry[]>([]);

  useEffect(() => {
    async function getCountriesAPI() {
      const countries = await api.country.getCountries();
      const newCountries = countries.map((country) => {
        const newCountry = {
          ...country,
          isSelected: false,
        };
        return newCountry;
      });
      setCountries(newCountries);
    }

    getCountriesAPI();
  }, []);

  const handleSelectedCountryClick = (country: TExtendedCountry) => {
    setCountries((prevCountries) =>
      prevCountries.map((prevCountry) => {
        if (prevCountry.name.common === country.name.common) {
          return {
            ...prevCountry,
            isSelected: false,
          };
        } else {
          return prevCountry;
        }
      })
    );
  };

  const handleCountryClick = (country: TExtendedCountry) => {
    setCountries((prevCountries) =>
      prevCountries.map((prevCountry) => {
        if (prevCountry.name.common === country.name.common) {
          return {
            ...prevCountry,
            isSelected: true,
          };
        } else {
          return prevCountry;
        }
      })
    );
  };

  return (
    <div className="container mx-auto p-6 flex flex-col justify-center items-center">
      <CountryList
        title="Favorite Countries"
        countries={countries}
        isSelected={true}
        handleCountryClick={handleSelectedCountryClick}
      />

      <CountryList
        title="Countries"
        countries={countries}
        isSelected={false}
        handleCountryClick={handleCountryClick}
      />
    </div>
  );
}

export default App;
