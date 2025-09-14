import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

function NavLinkScroll({ to, children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        scroller.scrollTo(to, {
          smooth: true,
          duration: 50,
          offset: -60,
        });
      }, 100);
    } else {
      // Already home → just scroll
      scroller.scrollTo(to, {
        smooth: true,
        duration: 50,
        offset: -60,
      });
    }
  };

  return (
    <a href="/" onClick={handleClick} style={{ cursor: "pointer" }}>
      {children}
    </a>
  );
}

function AppNavbar() {
    return (
        <Navbar bg="light" expand="md" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to="/">McKiernan Art</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as="span">
                            <NavLinkScroll to="carousel">Home</NavLinkScroll>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <NavLinkScroll to="about">About</NavLinkScroll>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <NavLinkScroll to="contact">Contact</NavLinkScroll>
                        </Nav.Link>
                        <NavDropdown title="Works" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/birds">Gallery 1</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/gallery2">Gallery 2</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
