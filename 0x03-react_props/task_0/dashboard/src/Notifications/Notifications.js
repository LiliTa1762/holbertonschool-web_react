import React from "react";
import { getLatestNotification } from "../utils/utils";
import "./Notifications.css";
import close_icon from "../close_icon.png";

export default function Notifications() {
	return (
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
				<li data="default">New course available</li>
				<li data="urgent">New resume available</li>
				<li data="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
			</ul>
		</div>
	)
}
