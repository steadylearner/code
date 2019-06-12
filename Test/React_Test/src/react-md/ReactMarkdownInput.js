import React from 'react';
import PropTypes from 'prop-types';

function FunctionMarkdownInput ({ 
  onChange, 
  value, 
  placeholder, 
  className 
}) {
  return (
    <textarea
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      ref="textareaRef"
      className={className}
    />
  );
}

FunctionMarkdownInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default FunctionMarkdownInput;
