import PizzaCard from "./PizzaCard"
import { useState } from "react";

const pizzas = [
  {id: 1, name: 'Margarita', price: 12},
  {id: 2, name: 'El Giga Pollo', price: 666},
  {id: 3, name: 'Vegetariana', price: 15},
];

export const PizzaMenu = () => {
  const [cart, setCart] = useState(0);

  // kun lapsikomponentti pyytää lisäämään yhden pizzan
  // ajetaan tämä parent elementin funktio

  const addToCart = () => {
    setCart((prev) => prev + 1);
  };


  return (
    <>
      <h2>PizzaMenu</h2>
      <div>Pizza timeeeeeeeeee!</div>
      <div>Ostoskorissa on tällä hetkellä {cart} tuotetta</div>
      <div className='container'>
        {pizzas.map((pizza) => {
          <PizzaCard key={pizza.id} pizza={pizza}
          addToCart={addToCart} />
        })}
      </div>
    </>

  )
}
