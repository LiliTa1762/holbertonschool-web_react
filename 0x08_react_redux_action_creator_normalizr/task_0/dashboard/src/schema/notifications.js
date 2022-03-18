import * as data from "../../../../notifications.json"

export default function getAllNotificationsByUser(userId) {
	const listContext = data.filter(context => context.author.id === userId)
	return [listContext[context]];
}
