import './App.css';
import Greeting from "./components/Greeting";
import { Footer } from './components/Footer';
import { PizzaMenu } from './components/PizzaMenu';
import { PizzaCard } from './components/PizzaCard';

// javascript funktio joka palauttaa JSX
const App = () => {

  const sitename = 'WSK';
  const styles = {
    backgroundColor: 'grey',
    color: 'white',
  }

  return (
    <>
      <h1 style={styles}>{sitename}</h1>
      <div style={{color: 'red'}}>It is true</div>
      <Greeting name='Ulla' age={25} isTeacher={true}/>
      <Greeting name='Matti' age={22} isTeacher={false}/>
      <ul>
        <li>Even though</li>
        <li>You might not believe it</li>
      </ul>
      <PizzaMenu />

      <Footer />
    </>
  );
};
export default App;

