import React, { PureComponent } from "react";
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
	constructor(props) {
		super(props);
	}

	render () {
		const { id, type, html, value, markAsRead } = this.props;

		if (value) {
			return <li data-notification-type={type}
			className={css(styles.liDefault, styles.styleSmall)}
			onClick = { () => markAsRead(id)}
			>{value}</li>
		} else {
			return <li data-notification-type={type} dangerouslySetInnerHTML={html}
			className={css(styles.liUrgent, styles.styleSmall)}
			onClick = { () => markAsRead(id)}
			></li>
		};
	}
}

const styles = StyleSheet.create({
	liDefault: {
		color: "blue"
	},

	liUrgent: {
		color: "red"
	},

	styleSmall : {
		'@media (max-width: 900px)': {
			borderBottom:'1px solid black',
			fontSize: '20px',
			padding: '10px 8px'
		}
	}
});

NotificationItem.propTypes = {
	type: PropTypes.string.isRequired,
	html: PropTypes.shape({
		__html: PropTypes.string,
	}),
	value: PropTypes.string,
	markAsRead: PropTypes.func,
	id: PropTypes.number.isRequired
}

NotificationItem.defaultProps = {
	type: "default",
	value: "",
	html: {},
	markAsRead: () => {}
}

export default NotificationItem;
