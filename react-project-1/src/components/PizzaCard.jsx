//import pizzaImg from './assets/images/Pizzazaza.jpg';

const PizzaCard = ({pizza}) => {
  return (
    <>
      <div className="card">
        <h3>{pizza.name}</h3>
        <div>pizza info</div>
        <div>Hinta {pizza.price}</div>
        <img src={pizzaImg} alt="" srcSet=""></img>
      </div>
    </>
  );
};

export default PizzaCard;
