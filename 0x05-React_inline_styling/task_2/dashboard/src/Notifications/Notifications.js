import React from "react";
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import close_icon from "../assets/close_icon.png";
import { Component, PureComponent } from 'react';


class Notifications extends React.Component {
	constructor(props) {
		super(props)
		this.markAsRead = this.markAsRead.bind(this);
	}
	
	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`)
	}

	shouldComponentUpdate(nextProps) {
		if (nextProps.listNotifications.length > this.props.listNotifications.length) {
			return true;
		} else {
			return false;
		}
	}

	render() {
		const { displayDrawer, listNotifications } = this.props;

		const  closeButton = () => {
			console.log('Close button has been clicked');
		}

		return (
			<>
			<div className={css(styles.menuItem)}>
				<p>Your notifications</p>
			</div>
			{displayDrawer && (
				<div className={css(styles.notifications)}>
					<button aria-label="Close"
					style={{
						display: "inline-block",
						background: "transparent",
						position: "absolute",
						border: "none",
						right: 20,
					}}
					onClick={ closeButton }
					>
						<img className={css(styles.img)} src={close_icon} alt="Close icon" style={{
							width: "23px",
							height: "23px",
						}}/>
					</button>
					<p className={css(styles.p)}>Here is the list of notifications</p>
					<ul>
						{listNotifications.length === 0 && (
							<NotificationItem value="No new notification for now" />
						)}
						{listNotifications.map((todos) => (
							<NotificationItem
							key={todos.id}
							type={todos.type}
							value={todos.value}
							html={todos.html}
							/>
						))}
					</ul>
				</div>
				)}
			</>
		);
	}
};

const styles = StyleSheet.create({
	notifications: {
		float: "right",
		border: "3px dashed #e01d3f",
		padding: "10px",
		marginBottom: "20px"
	},

	menuItem: {
		textAlign: "right"
	},

	img: {
		width: "20px"
	},

	p: {
		margin: "0",
		marginTop: "15px"
	},
});

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
}

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
}

export default Notifications;
