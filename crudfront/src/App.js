import logo from './logo.svg';
import './App.css';
import {Alluser}  from './component/Alluser';
import { Product } from './component/Product';
import { Route, Routes } from 'react-router-dom';
import { Editaddress } from './component/Editaddress';
import { Navbar } from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     
     <Product/>
     <Routes>
     <Route path="/alluser" element={<Alluser/>}></Route>
      <Route path="/editaddress/:id" element={<Editaddress></Editaddress>}></Route>
     </Routes>
    </div>
  );
}

export default App;
