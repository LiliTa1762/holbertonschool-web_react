import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import close_icon from "../assets/close_icon.png";


class Notifications extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			displayDrawer,
			listNotifications,
			handleDisplayDrawer,
			handleHideDrawer,
			markNotificationAsRead } = this.props;

		return (
			<>
			<div className={css(styles.menuItem, styles.menuItemSmall)}
			onClick={handleDisplayDrawer}
			>
				<p>Your notifications</p>
			</div>
			{displayDrawer && (
				<div className={css(styles.notifications, styles.notificationsSmall)}>
					<button aria-label="Close"
					style={{
						display: "inline-block",
						background: "transparent",
						position: "absolute",
						border: "none",
						right: 20,
					}}
					onClick={ handleHideDrawer }
					>
						<img className={css(styles.img)} src={close_icon} alt="Close icon" style={{
							width: "23px",
							height: "23px",
						}}/>
					</button>
					<p className={css(styles.p)}>Here is the list of notifications</p>
					<ul className={css(styles.ulSmall)}>
						{listNotifications.length === 0 ?
						(<NotificationItem id={0}
						value="No new notification for now"
						type='no-new'
						markAsRead={this.markAsRead} />) : <></>}
						{listNotifications.map(({ id, type, value, html }) => (
							<NotificationItem
							id={id}
							key={id}
							type={type}
							value={value}
							html={html}
							markAsRead={markNotificationAsRead}
							/>
						))}
					</ul>
				</div>
				)}
			</>
		);
	}
};

const opacityFrames = {
	from: {
		opacity: 0.5,
	},

	to: {
		opacity: 1,
	},
};

const translateYFrames = {
	"0%": {
		transform: "translateY(0)",
	},

	"50%": {
		transform: "translateY(-5px)",
	},

	"75%": {
		transform: "translateY(5px)",
	},

	"100%": {
		transform: "translateY(0)",
	},
};

const borderFrames = {
	"0%": {
		border: '3px dashed blue',
	},

	"100%": {
		border: '3px dashed #e01d3f',
	},
};

const styles = StyleSheet.create({
	notifications: {
		float: "right",
		border: "3px dashed #e01d3f",
		padding: "10px",
		marginBottom: "20px",
		animationName: [borderFrames],
		animationDuration: "0.8s",
		animationIterationCount: 1,
		animationFillMode: "forwards",
		":hover": {
			border: '3px dashed blue',
		},
	},

	menuItem: {
		textAlign: "right",
		":hover": {
			cursor: "pointer",
			animationName: [opacityFrames, translateYFrames],
			animationDuration: "1s, 0.5s",
			animationIterationCount: 3,
		},
	},

	img: {
		width: "20px"
	},

	p: {
		margin: "0",
		marginTop: "15px"
	},

	menuItemSmall: {
		'@media screen and (max-width: 900px)': {
			textAlign: 'right',
			marginRight: '30px'
		}
	},

	notificationsSmall: {
		'@media screen and (max-width: 900px)': {
			float: 'none',
			fontSize: '20px',
			":hover": {
				border: "none",
			},
		}
	},

	ulSmall: {
		'@media screen and (max-width: 900px)': {
			padding: '0',
			listStyle: 'none'
		}
	}
});

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
	handleDisplayDrawer: PropTypes.func,
	handleHideDrawer: PropTypes.func,
	markNotificationAsRead: PropTypes.func
}

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
	handleDisplayDrawer: () => {},
	handleHideDrawer: () => {},
	markNotificationAsRead: () => {}
}

export default Notifications;
