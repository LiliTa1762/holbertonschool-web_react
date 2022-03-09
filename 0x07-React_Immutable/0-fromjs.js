import { fromJS } from 'immutable';

// Take in Object and returns Immutable object
export default function getImmutableObject(object) {
	return fromJS(object);
};

const object = {
	fear: true,
	smell: -1033575916.9145899,
	wall: false,
	thing: -914767132
};
console.log(getImmutableObject(object));
