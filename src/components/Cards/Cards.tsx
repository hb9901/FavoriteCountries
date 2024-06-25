import { Country } from "../../types/coutry.type";
import Card from "../Card/Card";

interface CardsProps {
  title: string;
  countries: Country[];
  handleCountryClick: (country: Country) => void;
}

function Cards({ title, countries, handleCountryClick }: CardsProps) {
  return (
    <>
      <h2 className="font-bold text-2xl mt-12">{title}</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
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
    </>
  );
}

export default Cards;
