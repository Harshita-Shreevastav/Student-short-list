

export const student=  JSON.parse(localStorage.getItem('studentRecord'))||[]

export function getStudentList(student) {
  console.log("Returning student");
  return student;
}

export const shortlistedStudent=  JSON.parse(localStorage.getItem('shortlistedStudent'))||[]

export function getshortlistedStudentList(shortlistedStudent) {
  console.log("Returning student");
  return shortlistedStudent;
}


