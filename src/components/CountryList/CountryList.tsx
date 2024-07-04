import { TExtendedCountry } from "../../types/coutry.type";
import CountryCard from "../CountryCard/CountryCard";

interface CountryListProps {
  title: string;
  countries: TExtendedCountry[];
  handleCountryClick: (country: TExtendedCountry) => void;
}

function CountryList({
  title,
  countries,
  handleCountryClick,
}: CountryListProps) {
  return (
    <>
      <h2 className="font-bold text-2xl mt-12">{title}</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {countries?.map((country, index) => (
          <CountryCard
            handleCountryClick={() => handleCountryClick(country)}
            flags={country.flags}
            name={country.name}
            capital={country.capital}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

export default CountryList;
