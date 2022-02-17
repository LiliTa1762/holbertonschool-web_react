import React from "react";
import PropTypes from 'prop-types';

function CourseListRow ({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader === true) {
    if (textSecondCell === null) {
      return (
        <>
        <th colSpan="2">{textFirstCell}</th>
        </>
      )
    }
    else {
      return (
        <>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
        </>
      )
    }
  }
  else if (isHeader === false) {
    return (
      <>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
      </>
    )
  };
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
}

export default CourseListRow;
