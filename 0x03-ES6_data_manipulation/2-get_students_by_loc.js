export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location.toLowerCase().includes(city.toLowerCase()));
}
