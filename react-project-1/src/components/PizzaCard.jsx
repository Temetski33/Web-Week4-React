import pizzaImg from '../assets/images/Pizzazaza.jpg';

const PizzaCard = (props) => {


  const {pizza} = props;
  console.log(props);
  return (
    <>
      <div className="card">
        <h3>{pizza.name}</h3>
        <div>pizza info</div>
        <div>Hinta {pizza.price}</div>
        <img src={pizzaImg} alt="" srcSet=""></img>
        <button onClick={addToCart}>Add one</button>
      </div>
    </>
  );
};

export default PizzaCard;
