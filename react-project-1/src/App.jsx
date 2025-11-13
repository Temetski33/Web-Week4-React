import './App.css';
import Home from './components/Home';
import Counter from './components/Counter';
import { PizzaMenu } from './components/PizzaMenu';

 const App = () => {
   return (
     <>
       <h1>My App</h1>
       <Home />
       <PizzaMenu />
       <Counter />
     </>
   );
 };
 export default App;
