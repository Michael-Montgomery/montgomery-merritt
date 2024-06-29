import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about/about';
import Home from './pages/home/home';
// import Playground from './pages/playground/playground';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      {/* <Route path='/playground' element={<Playground></Playground>}></Route> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
