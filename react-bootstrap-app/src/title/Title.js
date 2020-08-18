import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Title.css';

class Title extends React.Component {
  render() {
    return <Navbar collapseOnSelect expand="false" bg="dark" variant="dark">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Brand href="#home">CovidTracker</Navbar.Brand>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <Nav.Link href="#deets">Locations</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;

    // return <div className="Title">
    //   <header className="Title-header">
    //     <h1>CovidTracker</h1>
    //   </header>
    // </div>;
  }
}

export default Title;
