import './App.css';
import Inicio from './components/Inicio';
import Experiencias from './components/Experiencias';
import Tarjeta from './pages/Tarjeta';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Frases from './components/Frases';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<>
            <div className="bg-black mx-auto w-full sm:px-6  px-8">
              <div className="flex flex-col justify-between flex-wrap"> <Inicio /></div>
              <div className='pt-36 pb-12'><Frases /></div>
              <Experiencias />
            </div>
          </>} />
          
          <Route path="/tarjeta/:id" element={ <>
            <Inicio />
            <div className='pt-36 '><Tarjeta /></div>
            </>
          } 
            />
        </Routes>
      </Router>
    </>
  );
};

export default App;