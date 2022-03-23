import * as data from "../../../../notifications.json";
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users")
const message = new schema.Entity("messages", {
	idAttribute: "guid"
});
const notification = new schema.Entity("notifications", {
	author: user,
	context: [message] 
});
const normalizedData = normalize(data, [notification]);

export function getAllNotificationsByUser(userId) {
	const data = normalizedData.entities.notifications;
	const entityMessage = normalizedData.entities.messages;
	const result = [];

	for (let info in data) {
		if (data[info].author === userId) {
			const contextMessage = data[info].context;
			result.push(entityMessage[contextMessage])
		}
	}
	return result;
}

export function notificationsNormalizer(data) {
	return normalize(data, [notification]).entities;
}
