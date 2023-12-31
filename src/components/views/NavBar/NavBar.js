import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  
    return(
      <Navbar bg="primary" expand="lg" className={"mt-4 mb-4 rounded"}>
        <Container>
          <Navbar.Brand href="#home" className='text-white'>Blog.app</Navbar.Brand>
          <Navbar.Toggle aria-controls="mobile-menu" />
          <Navbar.Collapse id="mobile-menu" className="justify-content-end" >
            <Nav>
              <Nav.Link as={NavLink} to="/" >
                <span className={styles.link}>Home</span>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/categories">
                <span className={styles.link}>Categories</span>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                <span className={styles.link}>About</span>
              </Nav.Link>
           </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;
