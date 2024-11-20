import { FaStar } from "react-icons/fa6";

interface WatchInterface {
  image: string;
  name: string;
  color: string;
  price: number;
  bg_color: string;
  description: string;
}

export default function Card({ image, name, color, price, bg_color, description }: WatchInterface) {
  return (
    <div className="card flex w-[60rem] p-5 border rounded-lg shadow-lg">
      {/* Section gauche avec l'image */}
      <div className="left w-1/2">
        <img src={image} className="w-full object-contain" alt={`Watch - ${name}`} />
      </div>

      {/* Section droite avec les détails */}
      <div className="right w-1/2 my-auto px-5">
        {/* En-tête de la carte */}
        <div className="card-head mb-5">
          <div className="card-title">
            <p className="uppercase font-bold text-md mb-3">{name}</p>
            <h1 className="font-bold text-2xl">{color}</h1>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="card-content my-5">
          <div className="flex items-baseline my-4">
            {/* Prix */}
            <h1 className="text-2xl font-bold">
              ${Math.round(price).toFixed(2)} <span className="uppercase text-sm">usd</span>
            </h1>
            {/* Étoiles et avis */}
            <div className="font-bold items-center inline-flex ml-auto gap-2">
              <div className="stars inline-flex gap-1">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <FaStar key={index} className={`text-[${bg_color}]`} />
                  ))}
              </div>
              <span>+1K reviews</span>
            </div>
          </div>

          {/* Description */}
          <div className="card-description text-justify">
            {description}
          </div>
        </div>

        {/* Pied de carte */}
        <div className="card-footer flex gap-4">
          <button className="border border-black p-2 uppercase hover:bg-gray-100">Details</button>
          <button className={`p-2 uppercase text-white hover:opacity-90`} style={{ backgroundColor: bg_color }}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
