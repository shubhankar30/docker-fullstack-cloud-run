import React from 'react';
import isEmpty from 'lodash/isEmpty';
import {
  Label, Input, FormGroup, Col,
} from 'reactstrap';
import styled from 'styled-components';

const ErrMsg = styled.small`
  display: block;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
`;

const renderField = ({
  input,
  placeholder,
  type,
  label,
  name,
  disabled,
  required,
  meta: { touched, error, warning },
}) => (
  <FormGroup row>
    {!isEmpty(label) && (
      <Label for={name} sm="2">
        {label}
      </Label>
    )}
    <Col sm="10">
      <Input
        {...input}
        type={type}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        autoComplete="off"
      />
    </Col>
    {touched && ((error && <ErrMsg>{error}</ErrMsg>) || (warning && <span>{warning}</span>))}
  </FormGroup>
);

export default renderField;