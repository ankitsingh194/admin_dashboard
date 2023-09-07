
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import List from './pages/List/List';
import New from './pages/New/New';
import Single from './Single/Single';
import { productInputs, userInputs } from './formssource';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='users'>
      <Route index element={<List />}/>
      <Route path='new' element={<New inputs = {userInputs} title="ADD New User"/>}/>
      <Route path=':userId' element={<Single/>}/>
      </Route>
      <Route path='products'>
        <Route index element={<List />}/>
        <Route path=':productId' element={<Single/>}/>
        <Route path='new' element={<New inputs ={productInputs} title="ADD New Product"/>}/>
      </Route>

    </Routes>
    </BrowserRouter>
  
    
   
  
  );
}

export default App;
