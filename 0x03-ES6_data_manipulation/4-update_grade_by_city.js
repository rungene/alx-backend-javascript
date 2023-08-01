export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const updatedStudent = studentList.map((student) => {
    if (newGrades.studentId && student.id === newGrades.studentId) {
      return {
        ...student,
        grade: newGrades.grade,
      };
    } else {
      return {
        ...student,
        grade: 'N/A',
      };
    }
  });
return updatedStudent.filter((std) => std.location == city);
}
