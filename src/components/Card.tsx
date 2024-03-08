import star from "../assets/Star_fill.svg";
import starEmpty from "../assets/Star.svg";

export interface CardProps {
  name: string;
  image: string;
  price: string;
  rating: any;
  votes: number;
  popular: boolean;
  available: boolean;
}

export default function Card({
  name,
  image,
  price,
  rating,
  votes,
  popular,
  available,
}: CardProps) {
  return (
    <div className="container flex flex-col gap-4 mb-10 card bg-background-color relative ">
      <div className="image">
        <img
          className="rounded-2xl w-full md:w-full h-[200px] object-cover"
          src={image}
          alt={`image of ${name}`}
        />
        {popular && (
          <p className="text-card-background text-sm font-bold bg-star-color px-4 py-1 rounded-full absolute top-0 left-0  m-4">
            Popular
          </p>
        )}
      </div>
      <div className="content flex flex-col gap-4">
        <div className="name flex justify-between">
          <h2 className="font-bold text-[24px]">{name}</h2>
          {price && (
            <p className="flex items-center text-card-background font-bold bg-price-card-background px-3 py-1 rounded-lg">
              {price}
            </p>
          )}
        </div>
        <div className="rating-available flex justify-between items-center">
          <div className="rating flex items-center gap-2 ">
            {!rating && (
              <img
                src={starEmpty}
                alt="icon-star"
                className="w-[24px] h-[24px]"
              />
            )}
            {rating && (
              <img src={star} alt="icon-star" className="w-[24px] h-[24px]" />
            )}
            {rating && <span className="text-lg">{rating}</span>}
            {votes && (
              <span className="text-text-color-secondary text-lg">
                ({votes} votes)
              </span>
            )}
          </div>
          <div className="available">
            <p className="text-text-color-sold-out text-lg font-bold">
              {available ? "" : "Sold Out"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
