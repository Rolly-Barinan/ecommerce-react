import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">Car Rental</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <LinkContainer to="/">
                <Nav.Link>
                  {" "}
                  <i className=" fas fa-home"></i>Home
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/">
                <Nav.Link>
                  <i className=" fas fa-car"></i>Cars
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Login
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
