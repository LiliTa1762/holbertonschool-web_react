import React, { useEffect, useState } from "react";
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
	useEffect(() => {
		console.log("clicked on");
	})
	const [check, setCheck] = useState(false);
	const checkedChange = ({ target }) => {
		setCheck(target.check);
	}

	if (isHeader === true) {
		if (textSecondCell === null) {
			return (
				<tr className={css(styles.divStyleHeader)}>
					<th colSpan="2" className={css(styles.colSpan)}>
						{textFirstCell}
					</th>
				</tr>
			)
		} else {
			return (
				<tr className={css(styles.divStyleHeader)}>
					<th>{textFirstCell}</th>
					<th>{textSecondCell}</th>
				</tr>
			)
		}
	} else if (isHeader === false) {
		return (
			<tr className={css(styles.row)}>
				<td className={css(styles.td)}>{textFirstCell}</td>
				<td className={css(styles.td)}>{textSecondCell}</td>
			</tr>
		)
	}
}

const styles = StyleSheet.create({
	divStyleRow: {
		backgroundColor: '#f5f5f5ab'
	},

	divStyleHeader: {
		backgroundColor: '#deb5b545'
	},

	td: {
		textAlign: "left"
	},

	thcolSpan: {
		textAlign: "center"
	},

	rowChecked: {
		backgroundColor: "#e6e4e4"
	}
});

CourseListRow.propTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
}

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
}

export default CourseListRow;
