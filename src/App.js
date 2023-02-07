
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter >
     <Header/>
     <Routes>
      <Route path='/' exact>
        <Home/>
      </Route>

      <Route path='/cart' exact>
        <Cart/>
      </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
