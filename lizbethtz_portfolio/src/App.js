import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Routes } from 'react-router-dom';
import Home from './screens/Home';
import { Route } from 'react-router-dom';
import './css/style.css'; 
import Shop from './screens/Shop';
import RoadMap from './screens/RoadMap';
function App() {
  return (
    <Container fluid>
      <Row>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/cv" element={<RoadMap/>} />
          </Routes>
      </Row>
      <Row>
      </Row>
    </Container>
  );
}

export default App;