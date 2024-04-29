import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Foodlist from './pages/Foodlist';
import Singleview from './pages/Singleview';
import Pnfd from './pages/Pnfd';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Foodlist/>}></Route>
        <Route path='/Singleview/:id' element={<Singleview/>}></Route>
        <Route path='/*' element={<Pnfd/>}></Route>
      </Routes>
      
      <Footer></Footer>

    </div>
  );
}

export default App;
