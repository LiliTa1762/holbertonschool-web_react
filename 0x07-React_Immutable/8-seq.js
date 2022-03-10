import { Seq } from 'immutable';

export default function printBestStudents(obj) {
	const seq = Seq(obj)
	.filter((student) => student.score >= 70)
	.map((obj) => {
		const student = obj;
		student.firstName = student.firstName[0].toUpperCase() + student.firstName.slice(1);
		student.lastName = student.lastName[0].toUpperCase() + student.lastName.slice(1);
		return student;
	}).toObject();

	console.log(seq);
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
