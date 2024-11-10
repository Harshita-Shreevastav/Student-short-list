
import { getStudentList, student } from "./record.js";









const updateContainer=document.getElementById('update-c')
console.log(updateContainer);
const record=JSON.parse(localStorage.getItem('info'));
const existingList=getStudentList(student)||[];
console.log(existingList)
console.log(record)
console.log("Running update content function")
updateContainer.innerHTML=`<div class="shadow p-3 mb-5 bg-body-tertiary rounded d-flex flex-column mb-3 details-box" style="margin: 50px ;">

    <div style="display: flex; justify-content: center; font-size: 30px; font-weight: 600;">
      Update Students  Details
    </div>

    <!--Name-->

    <div style="display:flex">
      
      <div style="padding: 20px 80px; font-size: 18px;">
        <p> Name :</p>
      </div>
      
      <div style="padding: 20px; margin-left:-40px; display: flex; flex-grow: 1 ;width: 50%;">
        <input type="text" id="student-name"  style="width: 90%; height: 35px;">

      </div>
    </div>

    <!--Department-->

    <div style="display:flex; margin-top:-35px;">
      <div style="padding: 20px 80px; font-size: 18px;">
        <p>Department :</p>
      </div>

      <div style="padding: 20px; margin-left:-95px; display: flex; flex-grow: 1 ;width: 50%;">
        <input type="text" id="student-department" style="width: 60%; height: 35px;" placeholder="Enter Department">

      </div>
    </div>

    

    <div style="display:flex; margin-top:-35px;">

      <!--joined year-->
      <div style="display: flex; width: 50%;">
        <div style="padding: 20px 5px ;margin-left: 75px; font-size: 18px;  width:150px">
          <p>Joined Year :</p>
        </div>

        <div style="padding: 20px; margin-left:-20px; display: flex; flex-grow: 1 ;">
          <input type="number" id="joined-year" style="width: 90%; height: 35px;" placeholder="20XX">

        </div>
      </div>
        

    
      <!--Age-->
      <div style="display: flex; width: 50%; ">
        <div style="padding: 20px 30px; font-size: 18px; width:150px">
          <p>Age :</p>
        </div>

        <div style="padding: 20px; margin-left:-83px; display: flex; flex-grow: 1 ;width: 90%;">
          <input type="number" id="student-age" style="width: 60%; height: 35px;" placeholder="XX">

        </div>
      </div>

      <!-- Gender-->

      <div style="display: flex; width: 50%; margin-left: -80px; ">
        <div style="padding: 20px 0px; font-size: 18px; width:150px">
          <p>Gender :</p>
        </div>

        <div style="padding: 20px; margin-left:-83px; display: flex; flex-grow: 1 ;width: 90%;">
          <input type="text" id="student-gender" style="width: 67%; height: 35px;" placeholder="Male / Female / Others:Xxx">

        </div>
      </div>
    </div>

    <div style="display:flex; margin-top:-35px;">
      <div style="padding: 20px 80px; font-size: 18px;">
        <p>Course :</p>
      </div>

      <div style="padding: 20px; margin-left:-50px; display: flex; flex-grow: 1 ;width: 50%;">
        <input type="text" id="student-course" style="width: 90%; height: 35px;" placeholder="Enter Course">

      </div>
    </div>

    <div style="display: flex; margin-left: auto; margin-top: -25px; margin-bottom: 20px;">
      <button type="button" class="btn btn-light shadow  bg-body-tertiary rounded add-update" style=" font-size: 18px;border:1px solid black" id="add-update-button">Update</button>
    </div>
  </div>`


  function preFillForm(record){
    document.getElementById('student-name').value=`${record.studentName}`;
    document.getElementById('student-department').value=`${record.studentDepartment}`;
    document.getElementById('student-course').value=`${record.studentCourse}`;
    document.getElementById('student-gender').value=`${record.studentGender}`;
    document.getElementById('joined-year').value=`${record.joinedYear}`;
    document.getElementById('student-age').value=`${record.studentAge}`;

  }

preFillForm(record);



const addUpdateButton=document.getElementById('add-update-button')
addUpdateButton.addEventListener('click', () => {

  console.log("add-update-button clicked")

  record.studentName=document.getElementById('student-name').value;
  record.studentDepartment=document.getElementById('student-department').value;
  record.joinedYear= document.getElementById('student-course').value;
  record.studentAge=document.getElementById('student-age').value;
  record.studentGender=document.getElementById('student-gender').value;
  record.studentCourse=document.getElementById('student-course').value;
  console.log(record);
  existingList.push(record);
  console.log(JSON.stringify(localStorage.getItem('studentRecord')));


  existingList.forEach( (sd,index) => {
    if (sd.studentId===record.studentId){
      existingList.splice(index,1);
      return
    }
  });
  localStorage.setItem('studentRecord',JSON.stringify(existingList))

  console.log(JSON.stringify(localStorage.getItem('studentRecord')));

    
  

})



  


