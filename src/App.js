import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/Navbar';
import FlightForm from './components/FlightForm';
// or less ideally
import { Button } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <header className="App-header">
      <FlightForm></FlightForm>
      </header>
    </div>
  );
}

export default App;
