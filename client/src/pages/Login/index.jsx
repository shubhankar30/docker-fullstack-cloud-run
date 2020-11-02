import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { login } from '../../services/Auth/actions';
import LoginForm from '../../forms/Login';

const Title = styled.h1`
  text-align: center;
  margin-top: 3rem;
`;

class Login extends Component {
  onLogin = (values) => {
    const { email, password } = values;
    this.props.login(email, password, () => {
      this.props.history.push('/dashboard');
    });
  }

  render() {
    const {
      Auth: {
        isLoading,
      },
    } = this.props;

    return (
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <div className="d-flex flex-column justify-content-center align-items mt-5">
              <Title>
                <FormattedMessage id="Pages.Login.Title" />
              </Title>
              <LoginForm
                onSubmit={this.onLogin}
                isLoading={isLoading}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  Auth: state.Auth,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);