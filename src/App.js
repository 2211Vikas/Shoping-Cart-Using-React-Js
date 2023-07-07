import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header'
import Home from './Component/Home';
import Cart from './Component/Cart';

function App() {
  return (
    
      <BrowserRouter>
      <Header/>
      <div>
        <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Cart" exact element={<Cart/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    
  );
}

export default App;
