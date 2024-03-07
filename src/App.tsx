import Card from "./components/Card";
import useCoffee from "./hooks/useCoffee";
import Button from "./components/Button";
import { coffeeToCoffeeCard } from "./mappers/coffeeToCoffeeCard";
import { useState } from "react";

export default function App() {
  const { coffee, filterAvailable, getCoffeeListing } = useCoffee();
  const [tabActive, setTabActive] = useState(0);

  const handleChangeTab = (index: number) => {
    setTabActive(index);

    if (index === 0) {
      getCoffeeListing();
    } else {
      filterAvailable();
    }
  };

  // const buttons = document.querySelectorAll(".button");

  // const handleAvailable = () => {
  //   for (let i = 0; i < buttons.length; i++) {
  //     buttons[0].classList.remove("active");
  //     buttons[1].classList.add("active");
  //   }
  //   filterAvailable();
  // };

  // const handleProduct = () => {
  //   for (let i = 0; i < buttons.length; i++) {
  //     buttons[0].classList.add("active");
  //     buttons[1].classList.remove("active");
  //   }
  //   getCoffeeListing();
  // };

  return (
    <div className="flex flex-col md:py-12 bg-card-background my-20 md:my-40 rounded-xl">
      <div className=" w-[90%] md:w-[45%] text-xl flex flex-col mx-auto mt-16 mb-20 text-center gap-8">
        <h1 className="text-4xl md:text-5xl font-bold">Our collection</h1>
        <p className="text-lg md:font-medium text-text-color-secondary">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className="flex justify-center gap-4 md:gap-4">
          <Button
            name="All Products"
            handleclick={() => handleChangeTab(0)}
            isAcitve={tabActive == 0}
          />
          <Button
            name="Available Now"
            handleclick={() => handleChangeTab(1)}
            isAcitve={tabActive == 1}
          />
        </div>
      </div>

      <div className="w-[90%] md:w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:px-24 mx-auto bg-card-background">
        {coffee.map((item) => (
          <Card key={item.id} {...coffeeToCoffeeCard(item)} />
        ))}
      </div>
    </div>
  );
}
