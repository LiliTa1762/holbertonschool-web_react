import React from "react";
import PropTypes from 'prop-types';
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import "./Notifications.css";
import close_icon from "../assets/close_icon.png";

function Notifications( {displayDrawer} ) {
	return (
		<>
		<div className="menuItem">
			<p>Your notifications</p>
		</div>
		{ displayDrawer && (
		<div className="Notifications">
			<button style={{display: "inline-block",
				background: "transparent",
				position: "absolute",
				border: "none",
				right: 10,
				top: 12}}
				arial-label="Close"
				onClick={() => console.log('Close button has been clicked')} 
				>
				<img src={close_icon} alt="Close icon" style={{width: '23px', height: '23px'}}></img>
			</button>
			<p>Here is the list of notifications</p>
			<ul>
				<NotificationItem type="default" value="New course available" />
				<NotificationItem type="urgent" value="New resume available" />
				<NotificationItem type="urgent" html={{__html: getLatestNotification()}} />
			</ul>
		</div>
		)}
		</>
	)
}

Notifications.propTypes = {
	displayDrawer: PropTypes.bool
}

Notifications.defaultProps = {
	displayDrawer: false,
}
export default Notifications;
