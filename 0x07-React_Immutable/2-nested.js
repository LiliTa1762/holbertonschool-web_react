import { getIn, fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
	// object is a plain object
	// array: array containing a list of a path to some key in the object
	return getIn(fromJS(object), array);
}

console.log(accessImmutableObject({
	name: {
			 first: "Guillaume",
			 last: "Salva"
	}
}, ['name', 'first']))
