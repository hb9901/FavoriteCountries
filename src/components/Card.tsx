import { Country } from "../types/coutry.type";

interface CardProps {
  handleCountryClick: (country: Country) => void;
  flag: string;
  nation: string;
  capital: string[];
}

function Card({ handleCountryClick, flag, nation, capital }: CardProps) {
  return (
    <div onClick={handleCountryClick}>
      <div className="w-full">
        <img className="object-cover w-full" src={flag} />
      </div>
      <div>{nation}</div>
      <div>{capital && capital[0]}</div>
    </div>
  );
}

export default Card;
