import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Routes } from 'react-router-dom';
import Home from './screens/Home';
import { Route } from 'react-router-dom';
import './css/style.css'; 
function App() {
  return (
    <Container fluid>
      <Row>
        {/* <NavBar /> */}
      </Row>
      <Row>
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/featured" element={<Featured/>} />
            <Route path="/play" element={<Play/>} /> */}
          </Routes>
      </Row>
      <Row>
      </Row>
    </Container>
  );
}

export default App;