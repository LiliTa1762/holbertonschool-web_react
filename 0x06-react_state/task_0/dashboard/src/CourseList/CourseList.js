import React from "react";
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";

function CourseList({ listCourses }) {
	return (
		<table id="CourseList" className={css(styles.CourseList)}>
			<thead>
				< CourseListRow textFirstCell="Available courses" isHeader={true} />
				< CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
			</thead>
			<tbody>
				{listCourses.length === 0 && (
					<CourseListRow textFirstCell="No course available yet"
					/>
				)}
				{listCourses.map((todo) => (
					<CourseListRow
					key={todo.id}
							textFirstCell={todo.name}
							textSecondCell={todo.credit}
						/>
					))}
			</tbody>
		</table>
	);
}

const styles = StyleSheet.create({
	CourseList: {
		margin: "40px 0 350px 0",
		border: "1px solid rgba(131, 129, 129, 0.89)",
		borderCollapse: "collapse",
		width: "85%",
	},
	
	th: {
		borderTop: "1px solid rgba(131, 129, 129, 0.89)",
		borderBottom: "1px solid rgba(131, 129, 129, 0.89)",
		textAlign: "left",
		fontSize: "18px",
	},
	
	colSpan: {
		textAlign: "center",
	},
	
	td: {
		textAlign: "left",
	}
});

CourseList.defaultProps = {
	listCourses: [],
};

CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape)
};


export default CourseList;
