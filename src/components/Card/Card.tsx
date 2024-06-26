import { MouseEventHandler } from "react";
import { TCountry } from "../../types/coutry.type";

type CardProps = {
  handleCountryClick: MouseEventHandler<HTMLDivElement>;
} & TCountry<true>;

function Card({ handleCountryClick, flags, name, capital }: CardProps) {
  const flagURL = flags.png;
  const nationName = name.common;

  return (
    <div
      className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer transition"
      onClick={handleCountryClick}
    >
      <div className="w-20 h-auto mx-auto mb-4">
        <img className="object-cover w-full" src={flagURL} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{nationName}</h3>
      <p className="text-gray-500">{capital && capital[0]}</p>
    </div>
  );
}

export default Card;
