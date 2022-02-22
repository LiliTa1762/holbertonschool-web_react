import React from "react";
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		const { type, html, value, markAsRead } = this.props;

		if (value) {
			return <li data-notification-type={type}
			onClick = { () => markAsRead(id)}
			>{value}</li>
		} else {
			return <li data-notification-type={type} dangerouslySetInnerHTML={html}
			onClick = { () => markAsRead(id)}
			></li>
		};
	}
}

NotificationItem.propTypes = {
	type: PropTypes.string.isRequired,
	html: PropTypes.shape({
		__html: PropTypes.string,
	}),
	value: PropTypes.string,
	markAsRead: PropTypes.func,
	id: PropTypes.number
}

NotificationItem.defaultProps = {
	type: "default",
	value: "",
  html: {},
	markAsRead: () => {}
}

export default NotificationItem;
