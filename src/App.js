
import AnalogClock from './AnalogClock';
import './App.css';
import Clock from './Clock';
import Timezone from './Timezone';

function App() {

  return (
    <div className="App">
           <div className="content">
         <Timezone/>
         <Clock/>
        <AnalogClock/>
      
      </div>
    </div>
  ); 
}

export default App;
