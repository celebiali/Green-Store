import React from 'react';
import { Field,ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

interface InputProps {
  label: string;
  name: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ label, name,className}) => {
  return (
    <div>
        {label && <div>{label}</div>}
      <Field name={name}
      className={className}
       />
       <ErrorMessage name={name}  component="div" />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Input;
