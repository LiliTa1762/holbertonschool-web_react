import { Seq } from "immutable";

export default function printBestStudents(object) {
	return Seq(object)
	.filter(student => student.score >= 70)
	.map()
}

// Calling the function should filter any student
// with a score < 70 and print to the console the first
// name and the last name with the first letter capitalized:

const grades = {
	1: {
		score: 99,
		firstName: 'guillaume',
		lastName: 'salva',
	}
};
