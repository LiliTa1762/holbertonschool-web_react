interface Student {
	firstName: string
	lastName: string
	age: number
	location: string
}

const student1: Student = {
	firstName: "string",
	lastName: "string",
	age: 42,
	location: "string"
};

const student2: Student = {
	firstName: "string",
	lastName: "string",
	age: 32,
	location: "string"
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((obj) => {
  const row = document.createElement('tr');
  const cellNameStudent = document.createElement('td');
  const cellLocationStudent = document.createElement('td');
  cellNameStudent.textContent = obj.firstName;
  cellLocationStudent.textContent = obj.location;
  row.appendChild(cellNameStudent);
  row.appendChild(cellLocationStudent);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
