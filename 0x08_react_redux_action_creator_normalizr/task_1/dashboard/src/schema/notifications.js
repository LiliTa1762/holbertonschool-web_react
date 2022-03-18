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
	if (userId === data[author][id]) {
		console.log([data[context]]);
	}
}
