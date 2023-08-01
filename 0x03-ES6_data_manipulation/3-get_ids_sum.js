export default function getStudentIdsSum(students) {
  const studentId = students.map((student) => student.id);
  return studentId.reduce((accumulator, currentValue) => accumulator + currentValue);
}
