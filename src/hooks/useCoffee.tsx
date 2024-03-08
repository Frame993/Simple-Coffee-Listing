import { CoffeeListing } from "../interfaces/GetCoffeeListing";
import { useEffect, useState } from "react";

export default function useCoffee() {
  const [coffee, setCoffee] = useState<CoffeeListing[]>([]);

  const getCoffeeListing = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    );
    const data = await response.json();
    setCoffee(data);
    console.log(data);
  };

  const filterAvailable = () => {
    const available = coffee.filter((item) => item.available);
    setCoffee(available);
  }

  useEffect(() => {
    getCoffeeListing();
  }, []);

  return { coffee, setCoffee, filterAvailable, getCoffeeListing };
}
