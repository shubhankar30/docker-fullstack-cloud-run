import React, { Component } from 'react';
import {
  Container, Row, Col,
} from 'reactstrap';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-3">
          <Col xs="12" md={{ size: 9, offset: 1 }}>
            Dashboard Page Data
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  Clients: state.Clients,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);