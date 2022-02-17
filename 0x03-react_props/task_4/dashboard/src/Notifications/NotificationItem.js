import React from "react";
import PropTypes from 'prop-types';

function NotificationItem({type, html, value}) {
	if (value) {
		return <li data-notification-type={type}>{value}</li>
	} else {
		return <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
	}
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
}

NotificationItem.defaultProps = {
  type: "default",
}

export default NotificationItem;
