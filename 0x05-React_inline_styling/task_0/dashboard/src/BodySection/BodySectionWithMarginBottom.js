import React from "react";
import PropTypes from 'prop-types';
import { BodySection } from "./BodySection";
import "./BodySection.css";


export function BodySectionWithMarginBottom(props) {
	return (
		<div className="bodySectionWithMargin">
			<BodySection {...props}/>
		</div>
	)
}

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string,
}

BodySectionWithMarginBottom.defaultProps = {
	title: '',
}
