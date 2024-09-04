/*import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [query, setQuery] = React.useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${query}`);
  };

  return (
    <nav>
      <Link to="/">Popular</Link>
      <Link to="/top-rated">Top Rated</Link>
      <Link to="/upcoming">Upcoming</Link>
      <input 
        type="text" 
        placeholder="Search by Movie Name..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </nav>
  );
};

export default Navbar;
*/

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavbarComponent = () => {
  const [query, setQuery] = React.useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${query}`);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Navbar.Brand as={Link} to="/">MovieDB</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Popular</Nav.Link>
          <Nav.Link as={Link} to="/top-rated">Top Rated</Nav.Link>
          <Nav.Link as={Link} to="/upcoming">Upcoming</Nav.Link>
        </Nav>
        <Form inline className="d-flex">
          <FormControl 
            type="text" 
            placeholder="Search by Movie Name..." 
            className="mr-sm-2" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
          />
          <Button variant="outline-success" onClick={handleSearch}>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
