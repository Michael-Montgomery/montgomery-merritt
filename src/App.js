import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about/about';
import Home from './pages/home/home';
import Spotify from './pages/spotify/spotify';
// import Playground from './pages/playground/playground';

function App() {
  return (
    <HashRouter basename='/'>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      {/* <Route path='/playground' element={<Playground></Playground>}></Route> */}
      <Route path='/spotify' element={<Spotify></Spotify>}></Route>
    </Routes>
    </HashRouter>
  );
}

export default App;
