import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../services/Auth/actions';

class Header extends Component {
  state = {
    isOpen: false,
  }

  toggleNav = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;
    const {
      Auth: {
        isAuthenticated,
      },
    } = this.props;

    return (
      <Fragment>
        {isAuthenticated ? (
        <Navbar light expand="md" style={{ backgroundColor: '#7FB3D5' }}>
          <Fragment>
            <Link
              to="/dashboard"
              className="navbar-brand"
            >
              <Button color="secondary">
                <strong>
                  Dashboard
                </strong>
              </Button>
            </Link>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <Link
                    to="/temp-route"
                    className="navbar-brand"
                    onClick={this.toggleNav}
                  >
                    <Button color="secondary">
                        Page Title
                    </Button>
                  </Link>
                </NavItem>
                <NavItem onClick={() => { this.props.logout(); }}>
                  <Link
                    to="/"
                    className="navbar-brand"
                    onClick={this.toggleNav}
                  >
                    <Button color="danger">
                        Logout
                    </Button>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Fragment>
        </Navbar>
        ) : (
          <Navbar light expand="md" style={{ backgroundColor: '#7FB3D5' }}>
          <Fragment>
            <Link
              to="/dashboard"
              className="navbar-brand"
            >
              <Button color="secondary">
                <strong>
                  Dashboard
                </strong>
              </Button>
            </Link>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <Link
                    to="/temp-route"
                    className="navbar-brand"
                    onClick={this.toggleNav}
                  >
                    <Button color="secondary">
                        Page Title
                    </Button>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Fragment>
        </Navbar>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  Auth: state.Auth,
});

const mapDispatchToProps = {
  logout,
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);