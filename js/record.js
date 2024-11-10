

export const student=  JSON.parse(localStorage.getItem('studentRecord'))||[]

export function getStudentList(student) {
  console.log("Returning student");
  return student;
}

