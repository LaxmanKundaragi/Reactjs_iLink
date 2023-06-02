import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import RestaurentCreate from './components/RestaurentCreate'
import RestaurentDetails from './components/RestaurentDetails'
import RestaurentList from './components/RestaurentList'
import RestaurentSearch from './components/RestaurentSearch'
import RestaurentUpdate from './components/RestaurentUpdate'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { NavLink } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <img className='ilink' src='https://th.bing.com/th?id=OIP.d-juZ0uQ2WLNL7g7kHpsvgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'/>
          <Navbar.Brand href="" style={{ backgroundColor: "black" }}>Welcome to I-Link Digital <>'Link with i-Link'</></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>





      <Router>

        <div className='edit'>

          <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;
          <Link to="/search">Search</Link> &nbsp;&nbsp;&nbsp;
          <Link to="/create">Create</Link> &nbsp;&nbsp;&nbsp;
          <Link to="/list">List</Link> &nbsp;&nbsp;&nbsp;
          <Link to="/update">Update</Link> &nbsp;&nbsp;&nbsp;
          <Link to="/details">Details</Link> &nbsp;&nbsp;&nbsp;

        </div>


        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create" element={<RestaurentCreate />} />
          <Route path="/details" element={<RestaurentDetails />} />
          <Route path="/list" element={<RestaurentList />} />
          <Route path="/search" element={<RestaurentSearch />} />
          <Route path="/update/:id" element={<RestaurentUpdate />}
            render={props => (
              <RestaurentUpdate {...props}

              />)}

          />

        </Routes>
      </Router>

    </div>
  );
}
export default App;
