
import './App.css'
import LogoTech from './components/LogoTech';
import Nav from './components/Nav';
import Rrss from './components/Rrss';
import FotoEquipo from './components/FotoEquipo';
import Que from './components/Que';
import Servicios from './components/Servicios';





const App = () => {
  return (
    <>
      <div className='Header'>
        <LogoTech />
        <Nav />
      </div>
      <div className='FotoEquipo'>
        <FotoEquipo />
      </div>
      <div className='Que'>
        <Que />
      </div>
      <div className='Servicios'>
        <Servicios />
      </div>
      <div className='Footer'>
        <Rrss />
      </div>
    </>
  );
};


export default App;
