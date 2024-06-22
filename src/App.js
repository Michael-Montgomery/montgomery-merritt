import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about/about';
import Home from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
