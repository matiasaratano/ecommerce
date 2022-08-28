
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
    <div className='d-flex flex-column site-container'>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container className="justify-content-center">
            <Navbar.Brand href="#home">
              <img
                src="/logo.png"
                width="50"
                height="34"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <LinkContainer to="/">
              <Navbar.Brand>Templ.</Navbar.Brand>
            </LinkContainer>      
          
          </Container>
        </Navbar>
      </header>
      <main>
      <Container className='mt-3'>
        <Routes>
            <Route path="/product/:slug" element={<ProductScreen />}/>
            <Route path="/" element={<HomeScreen />}/>
        </Routes>
       </Container>
      </main>
      <footer>
        <div className='text-center'>All rights reserved</div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
