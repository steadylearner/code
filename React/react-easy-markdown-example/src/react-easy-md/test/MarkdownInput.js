import React from 'react';
import PropTypes from 'prop-types';

function MarkdownInput({
  onChange,
  value,
  className,
  placeholder,
  onChangeCapture,
  // defaultValue,
}) {
  return (
    <textarea
      onChange={onChange}
      value={value}
      className={className}
      placeholder={placeholder}
    />
  );
}

MarkdownInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default MarkdownInput;