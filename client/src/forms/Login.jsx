import React from 'react';
import { Field, reduxForm } from 'redux-form';
import isEmpty from 'lodash/isEmpty';
import { Form, Button } from 'reactstrap';
import { injectIntl } from 'react-intl';
import Input from '../components/Input';

const validate = (values) => {
  const errors = {};
  if (isEmpty(values.email)) {
    errors.email = 'Enter email';
  }
  if (isEmpty(values.password)) {
    errors.password = 'Enter password';
  }
  return errors;
};

let LoginForm = (props) => {
  const {
    handleSubmit,
    submitting,
    isLoading,
  } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        component={Input}
        name="email"
        type="email"
        label="Email"
        disabled={submitting || isLoading}
        required
      />
      <Field
        component={Input}
        name="password"
        type="password"
        label="Password"
        disabled={submitting || isLoading}
        required
      />

      <Button
        type="submit"
        color="primary"
        disabled={submitting || isLoading}
        block
      >
          Login
      </Button>
    </Form>
  );
};

LoginForm = reduxForm({
  form: 'LOGIN',
  validate,
})(LoginForm);

export default injectIntl(LoginForm);
