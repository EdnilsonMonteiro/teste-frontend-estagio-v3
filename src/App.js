import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import EquipmentListPage from './pages/EquipmentListPage';
import Map from './pages/Map/Map';

function App() {
  return (
      

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/equipmentList" element={<EquipmentListPage />} />
          <Route exact path="/map" element={<Map/>} />
        </Routes>
      </Router>
  );
}

export default App;