import { normalize, schema } from 'normalizr';
import * as data from "../../../../notifications.json"

const user = new schema.Entity("users")
const message = new schema.Entity("messages", {
	idAttribute: "guid"
});
const notification = new schema.Entity("notifications", {
	author: user,
	context: [message] 
});
export const normalizedData = normalize(data, [notification]);

export default function getAllNotificationsByUser(userId) {
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
