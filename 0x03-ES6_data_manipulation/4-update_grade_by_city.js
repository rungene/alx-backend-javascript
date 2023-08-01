export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const updatedStudent = studentList.map((student) => {
    const gradeMatch = newGrades.find((std) => std.studentId === student.id);
    if (gradeMatch) {
      return {
        ...student,
        grade: gradeMatch.grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });
  return updatedStudent.filter((std) => std.location === city);
}
