import './App.css';
import { Route, Routes } from 'react-router-dom';
import Barchart from './pages/ChartOne';
import Linechart from './pages/ChartTwo';
import Piechart from './pages/ChartThree';
import Doughnutchart from './pages/ChartFour';
import PolarAreachart from './pages/ChartFive';
import BasicNavbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BasicNavbar />
      <Routes>
        <Route path='/' element= { <Barchart />} />
        <Route path='/line' element= { <Linechart />} />
        <Route path='/pie' element= { <Piechart />} />
        <Route path='/doughnut' element= { <Doughnutchart />} />
        <Route path='/polararea' element= { <PolarAreachart />} />
      </Routes>
    </div>
  );
}

export default App;
