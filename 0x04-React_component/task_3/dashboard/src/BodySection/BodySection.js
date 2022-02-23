import React from "react";
import PropTypes from 'prop-types';

export function BodySection(props) {
	return (
		<div className="bodySection">
			<h2>{props.title}</h2>
			{props.children}
		</div>
	);
}

BodySection.propTypes = {
	title: PropTypes.string
}

BodySection.defaultProps = {
	title: ''
}
