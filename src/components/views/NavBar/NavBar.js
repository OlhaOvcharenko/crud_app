import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";




const NavBar = () => {
    return(
      <Navbar bg="primary" data-bs-theme="dark" expand="lg" className={"mt-4 mb-4 rounded "}>
        <Container>
          <Navbar.Brand href="#home">Blog.app</Navbar.Brand>
          <Nav className='flex-sm-row navbar-custom'>
            <Nav.Link as={NavLink} to="/" className='py-0 me-2' >Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className='py-0 me-2'>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar;