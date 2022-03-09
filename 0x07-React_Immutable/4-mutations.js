import { Map, WithMutations } from 'immutable';

export const map = Map ({
	1: 'Liam',
	2: 'Noah',
	3: 'Elijah',
	4: 'Oliver',
	5: 'Jacob',
	6: 'Lucas',
});

export const map2 = map.WithMutations((i) => {
	i.set(2, 'Bejnamin').set(4, 'Oliver')
});

console.log(map2);
