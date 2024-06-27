import { TCountry } from "../../types/coutry.type";
import Card from "../CountryCard/CountryCard";

interface CardsProps {
  title: string;
  countries: TCountry[];
  handleCountryClick: (country: TCountry) => void;
}

function Cards({ title, countries, handleCountryClick }: CardsProps) {
  return (
    <>
      <h2 className="font-bold text-2xl mt-12">{title}</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {countries?.map((country, index) => (
          <Card
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

export default Cards;
