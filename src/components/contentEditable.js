import PropTypes from 'prop-types';
import React from 'react';

const ContentEditable = ({ Tag, id, className, onBlur, placeholder, text  }) => (
    <Tag
        id={id}
        contentEditable={true}
        className={className}
        placeholder={ placeholder }
        suppressContentEditableWarning={true}
        onBlur={onBlur}>{text}</Tag>
)

ContentEditable.propTypes = {
  Tag: PropTypes.any,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  onBlur: PropTypes.func,
}

export default ContentEditable
