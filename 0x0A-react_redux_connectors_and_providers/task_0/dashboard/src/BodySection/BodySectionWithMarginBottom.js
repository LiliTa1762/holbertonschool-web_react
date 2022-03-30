import React from "react";
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import { BodySection } from "./BodySection";

export function BodySectionWithMarginBottom(props) {
	return (
		<div className={css(styles.bodySectionWithMargin)}>
			<BodySection {...props}/>
		</div>
	)
}

const styles = StyleSheet.create({
	bodySectionWithMargin: {
		marginBottom: '40px' 
	}
})

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string,
}

BodySectionWithMarginBottom.defaultProps = {
	title: '',
}
