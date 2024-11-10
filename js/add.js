
import { getStudentList, student } from "./record.js"

const record={}

const existingList=getStudentList(student)||[];





function storingInfo(record){

  const existingList=getStudentList(student)||[];

  console.log(existingList);

 

   
  const nameElement= document.getElementById('student-name');
  record.studentName=nameElement.value;
  console.log(record.studentName);

  record.studentId=record.studentName + new Date();
  console.log(record.studentId);

  const departmentElement= document.getElementById('student-department')
  record.studentDepartment=departmentElement.value
  console.log(record.studentDepartemnt)
  
  
  const yearElement= document.getElementById('joined-year')
  record.joinedYear=yearElement.value
  console.log(record.joinedYear)
  
  
  const ageElement= document.getElementById('student-age')
  record.studentAge=ageElement.value
  console.log(record.studentAge)
  
  
  const genderElement= document.getElementById('student-gender')
  record.studentGender=genderElement.value
  console.log(record.studentGender)

 
  
  
  const courseElement= document.getElementById('student-course')
  record.studentCourse=courseElement.value
  console.log(record.studentCourse)

  console.log(record)
  existingList.push(record)
  
  localStorage.setItem('studentRecord', JSON.stringify(existingList))
  console.log(JSON.stringify(JSON.parse(localStorage.getItem('studentRecord'))))

}









const submitButton=document.getElementById('submit-button');
submitButton.addEventListener('click', ()=> {
  console.log("Butotn clicked")
  
  storingInfo(record)
  


  

  



 
  
})










