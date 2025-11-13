import { PizzaCard } from "./PizzaCard"

const pizzas = [
  {id: 1, name: 'Margarita', price: 12},
  {id: 2, name: 'El Giga Pollo', price: 666},
  {id: 3, name: 'Vegetariana', price: 15},
];

export const PizzaMenu = () => {
  return (
    <>
      <h2>PizzaMenu</h2>
      <div>Pizza timeeeeeeeeee!</div>
      <div className='container'>{
        pizzas.map((pizza) => {
          <PizzaCard key={pizza.id} pizza={pizza} />
        })}
      </div>
    </>

  )
}
