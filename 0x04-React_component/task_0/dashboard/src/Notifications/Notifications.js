import React from "react";
import PropTypes from 'prop-types';
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import close_icon from "../assets/close_icon.png";
import "./Notifications.css";


function Notifications({ displayDrawer, listNotifications }) {
  const  closeButton = () => {
    console.log('Close button has been clicked');
  }

  return (
    <>
    <div className="menuItem">
      <p>Your notifications</p>
    </div>
    {displayDrawer && (
      <div className="Notifications">
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
          <img src={close_icon} alt="Close icon" style={{
            width: "23px",
            height: "23px",
          }}/>
        </button>
        <p>Here is the list of notifications</p>
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
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

Notifications.PropTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
}

export default Notifications;
