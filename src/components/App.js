import '../assets/styles/App.css';
import Superbar from './Superbar';
import Marquee from './Marquee';
import Nav from './Nav';
import Promobar from './Promobar';
import Seatbelt from './Seatbelt';
import Canvas from './Canvas';

function App() {
  return (
      <div className="App">
        <Superbar />
        <Nav />
        <Promobar />
        <Marquee />
        <Seatbelt />
        <Canvas />
      </div>
  );
}

export default App;
