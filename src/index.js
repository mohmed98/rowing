import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Container, Navbar, Nav } from "react-bootstrap";
import Home from "./pages/home";
import RowingTypes from "./pages/rowingTypes";
import WhyRowing from "./pages/whyRowing";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/rowingTypes", name: "RowingTypes", Component: RowingTypes },
  { path: "/whyRowing", name: "WhyRowing", Component: WhyRowing },
];

function Example() {
  return (
    <Router>
      <>
        <Navbar bg="light">
          <Nav className="mx-auto">
            {routes.map((route) => (
              <Nav.Link
                key={route.path}
                as={NavLink}
                to={route.path}
                activeClassName="active"
                exact
              >
                {route.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar>
        <Container className="container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={3000}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Container>
      </>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);
