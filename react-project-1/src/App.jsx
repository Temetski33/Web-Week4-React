import './App.css';
import Layout from './components/Layout';
import {BrowserRouter, Route, Routes} from 'react-router';
import Profile from './views/Profile';
import Single from './views/Single';
import Upload from './views/Upload';
import Home from './views/Home';



 const App = () => {
   return (
     <BrowserRouter basename={import.meta.env.BASE_URL} >
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
