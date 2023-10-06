import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import styles from "../NavBar/NavBar.module.scss";
import { useState } from "react";


const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

    return(
      <Navbar bg="primary" expand="lg" className={"mt-4 mb-4 rounded"}>
        <Container>
          <Navbar.Brand href="#home" className='text-white'>Blog.app</Navbar.Brand>
          <Navbar.Toggle aria-controls="mobile-menu" />
          <Navbar.Collapse id="mobile-menu" className="justify-content-end" >
            <Nav>
              <Nav.Link as={NavLink} to="/" >
                <a href='#' className={styles.graylink}>Home</a>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                <a href='#' className={styles.graylink}>About</a>
              </Nav.Link>
           </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;
