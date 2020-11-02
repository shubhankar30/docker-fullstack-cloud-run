import React from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authenticate extends React.Component {
    componentDidMount() {
      const {
        Auth: {
          isAuthenticated,
        },
      } = this.props;

      if (!isAuthenticated) {
        toast.warn('You need to be signed in to access this page');
        this.props.history.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  const mapStateToProps = state => ({
    Auth: state.Auth,
  });

  const mapDispatchToProps = {
  };

  return connect(mapStateToProps, mapDispatchToProps)(Authenticate);
}