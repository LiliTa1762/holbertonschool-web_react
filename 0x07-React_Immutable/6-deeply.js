import { Map } from "immutable";

export default function mergeDeeplyElements(page1, page2) {
	if(page1 === page2) {
		const map1 = Map(page1);
		const map2 = Map(page2);
		const map3 = map1.merge(map2);
		return map3;
	} else {
		const map1 = Map(page1);
		const map2 = Map(page2);
		const map3 = map1.mergeDeep(map2);
		return map3;
	}
}

const page1 = {
	'user-1': {
		id: 1,
		name: 'test',
		likes: {
			1: {
				uid: 1234,
			}
		}
	},
};

const page2 = {
	'user-1': {
		likes: {
			2: {
				uid: 134,
			}
		}
	},
};
console.log(mergeDeeplyElements(page1, page2).toJS());
