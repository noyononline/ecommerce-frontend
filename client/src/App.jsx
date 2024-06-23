import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Shops from './pages/Shops';
import Card from './pages/Card';
import Details from './pages/Details';
import Register from './pages/Register';
import Login from './pages/Login';
import Shipping from './pages/Shipping';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/shops' element={<Shops />}></Route>
      <Route path='/card' element={<Card />}></Route>
      <Route path='/product/details/:slug' element={<Details />}></Route>
      <Route path='/shipping' element={<Shipping /> }></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
