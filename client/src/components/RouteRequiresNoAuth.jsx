import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class RouteRequiresNoAuth extends React.Component {
    static propTypes = {
      isAuthenticated: PropTypes.bool.isRequired,
    }

    componentDidMount() {
      const { isAuthenticated } = this.props;

      if (isAuthenticated) {
        this.props.history.push('/home');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
  });

  return connect(mapStateToProps)(RouteRequiresNoAuth);
}