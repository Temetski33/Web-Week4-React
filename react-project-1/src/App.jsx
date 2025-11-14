import './App.css';
import Layout from './components/Layout';
import {BrowserRouter, Route, Routes} from 'react-router';
import Profile from './views/Profile';


 const App = () => {
   return (
     <BrowserRouter>
       <Routes>
         <Route element={<Layout />}>
           <Route path="/" element={<Home />} />
           <Route path="/profile" element={<Profile />} />
           <Route path="/upload" element={<Upload />} />
           <Route path="/single" element={<Single />} />
           {/* TODO: add missing routes */}
         </Route>
       </Routes>
     </BrowserRouter>
   );
 };
 export default App;
