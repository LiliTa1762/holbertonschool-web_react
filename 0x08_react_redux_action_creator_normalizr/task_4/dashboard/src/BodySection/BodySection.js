import React from "react";
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

export function BodySection(props) {
	return (
		<div className={css(styles.bodySectionWithMargin)}>
			<h2>{props.title}</h2>
			{props.children}
		</div>
	);
}

const styles = StyleSheet.create({
	bodySectionWithMargin: {
		marginBottom: '40px' 
	}
})

BodySection.propTypes = {
	title: PropTypes.string
}

BodySection.defaultProps = {
	title: ''
}
