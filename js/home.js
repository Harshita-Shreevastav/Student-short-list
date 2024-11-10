

// const studentRecord=[{

import { getStudentList,student } from "./record.js";



//   studentName:'Happy Singh',
//   studentDepartment: 'Jornalism',
//   joinedYear:2021,
//   studentAge:23,
//   studentGender:'Male',
//   studentCourse:'Bachelor in Journalism and Mass Communication',
  

// },
// {
//   studentName:'John Dobier',
//   studentDepartment: 'Commerce',
//   joinedYear:2021,
//   studentAge:27,
//   studentGender:'Male',
//   studentCourse:'MBA',
  

// },
// {
//   studentName:'Caroline Hemsworth',
//   studentDepartment: 'Sales and Marketing',
//   joinedYear:2023,
//   studentAge:20,
//   studentGender:'Female',
//   studentCourse:'Bachelor in Marketing and Sales',
  

// }]
// let detailsObject='';

// studentRecord.forEach((record)=> {
//   console.log('Running for each function')
//   console.log(record);
//   detailsObject=`<div style='display:flex; width:100%; margin-top:-40px;height:160px'   class="btn btn-light shadow  bg-body-tertiary   roundedshadow  p-3 mb-5 bg-body-tertiary rounded">  
//               <div class="d-flex flex-column mb-3 " style="margin-left:10px; width:350px;"id='student-details'>

//                 <div id='display-name' style='display:flex; margin-top:-14px; '>
//                   <p style='font-size:25px; font-weight:600;'>${record.studentName}</p>
//                 </div>

//                 <div id='display-name' style='display:flex ; font-size:14px; margin-top:-15px; color:gray'>
//                   From ${record.studentDepartment} Department
//                 </div>

//                 <div id='display-name' style='display:flex ; font-size:14px ; color:gray''>
//                     Joined in : ${record.joinedYear}
//                 </div>

//                 <div id='display-name' style='display:flex; font-size:14px ; color:gray''>
//                     Pursueing ${record.studentCourse}
//                 </div>

//                 <div id='display-name' style='display:flex ; font-size:14px ; color:gray''>
//                   Age : ${record.studentAge}
//                 </div>

//                 <div id='display-name' style='display:flex ; font-size:14px ; color:gray ; margin-bottom:1px'>
//                     Gender : ${record.studentGender}
//                 </div>

                
            
//               </div>

//               <div style='display:flex; flex-grow:1'>
//               </div> 

//               <div style="display: flex;
//                flex-grow:1;margin:40px 0px 0px -30px;">

//                 <div style="display: flex; margin-left: auto; width:75px;z-index=1">
//                   <button type="button" class="btn btn-light shadow  bg-body-tertiary rounded submit" style=" font-size: 13px; margin:30px 0 25px 10px ;border:1px solid black" id="update-button">Update</button>
//                 </div>

//                 <div style='display:flex; flex-grow:1'>
//                 </div> 


//                 <div style="display: flex; margin-left: auto; z-index=1">
//                   <button type="button" class="btn btn-light shadow  bg-body-tertiary rounded submit" style=" font-size: 13px;margin:30px 0 25px 0 ;width:75px; border:1px solid black " id="update-button">Delete</button>
//                 </div>

                
                

//                 <div style='display:flex; flex-grow:1'>
//                 </div> 
              
//                 <div style="display: flex  ; justify-content:end; padding: 1px 4px; margin-top:50px; " class="   roundedshadow  bg-body-tertiary rounded d-flex flex-column mb-3" >

//                   <div style='margin-top:20px'>
//                     <input style="width: 20px;"
//                     type="checkbox" id="Shortlisted" >
//                   </div>
//                   <div style="font-size: 13px;  ">
//                     Shortlist
//                   </div>
                  

//                 </div>

//               </div>

//               <div style='display:flex; flex-grow:1'>
//               </div> 
//               `

// console.log(detailsObject)


// });

// document.querySelector('.all-student-details').innerHTML+=detailsObject;
let  detailsObject=''
let  studentList=[];
console.log(`studentList=${studentList}`)

let isUpdate=false;





if (isUpdate===false){

  studentList=getStudentList(student);

  
  
  if ( studentList && studentList.length>0) {
      
  

  

    console.log(`studentList:${JSON.stringify(studentList)}`)

  


  
      studentList.forEach( (record) => {
        console.log('Running for each function')
        console.log(`record:${JSON.stringify(record)}`);
          detailsObject=`<div style='display:flex; width:100%; margin-top:-40px;height:160px'   class="btn btn-light shadow  bg-body-tertiary   roundedshadow  p-3 mb-5 bg-body-tertiary rounded">  
            <div class="d-flex flex-column mb-3 " style="margin-left:10px; width:350px;"id='student-details'>

              <div id='display-name' style='display:flex; margin-top:-14px; '>
                <p style='font-size:25px; font-weight:600;'>${record.studentName}</p>
              </div>

              <div id='display-name' style='display:flex ; font-size:14px; margin-top:-15px; color:gray'>
                From ${record.studentDepartment} Department
              </div>

              <div id='display-name' style='display:flex ; font-size:14px ; color:gray''>
                  Joined in : ${record.joinedYear}
              </div>

              <div id='display-name' style='display:flex; font-size:14px ; color:gray''>
                  Pursueing ${record.studentCourse}
              </div>

              <div id='display-name' style='display:flex ; font-size:14px ; color:gray''>
                Age : ${record.studentAge}
              </div>

              <div id='display-name' style='display:flex ; font-size:14px ; color:gray ; margin-bottom:1px'>
                  Gender : ${record.studentGender}
              </div>

              
          
            </div>

            <div style='display:flex; flex-grow:1'>
            </div> 

            <div style="display: flex;
              flex-grow:1;margin:40px 0px 0px -30px;">

              <div style="display: flex; margin-left: auto; width:75px;z-index=1">
                <a href='update.html' class="btn btn-light shadow  bg-body-tertiary rounded update-link" style=" display: inline; font-size: 13px; margin:30px 0 25px 10px ;border:1px solid black" id="update-button" data-button-update='${record.studentId}'>Update</a>
              </div>

              <div style='display:flex; flex-grow:1'>
              </div> 


              <div style="display: flex; margin-left: auto; z-index=1">
                <button type="button" class="btn btn-light shadow  bg-body-tertiary rounded delete" style=" font-size: 13px;margin:30px 0 25px 0 ;width:75px; border:1px solid black " id="delete-button"  data-button-delete='${record.studentId}'>Delete</button>
              </div>

              
              

              <div style='display:flex; flex-grow:1'>
              </div> 
            
              <div style="display: flex  ; justify-content:end; padding: 1px 4px; margin-top:50px; " class="   roundedshadow  bg-body-tertiary rounded d-flex flex-column mb-3" >

                <div style='margin-top:20px'>
                  <input style="width: 20px;"
                  type="checkbox" id="Shortlisted" >
                </div>
                <div style="font-size: 13px;  ">
                  Shortlist
                </div>
                

              </div>

            </div>

            <div style='display:flex; flex-grow:1'>
            </div> 
            `
            
      
        console.log(detailsObject)

        if (detailsObject){
    
          console.log('object found!')
      
          
      
            console.log('reflecting change on homepage!')
            
            document.querySelector('.all-student-details').innerHTML+=detailsObject;

            isUpdate=true
            
      
          
      
        }


      })
  }
  
      
    
  
  
    
    
  else{

      console.log('No recoreds yet')
      document.querySelector('.all-student-details').innerHTML=
      `<div>
        <p style='font-size:18px;'> No records yet!</p>
      </div`



  };
  
}
else{
  console.log("Homepage is upto date. Nothing to update!")
}

let selectedRecord={};
const updateButton = document.querySelectorAll('.update-link');
console.log(updateButton)
  updateButton.forEach((button) => {
    button.addEventListener('click', () => {
      
      console.log('Update button clicked!');
      console.log(button.dataset.buttonUpdate); // Should output the correct data attribute value

      studentList=getStudentList(student)
      console.log(studentList)
      studentList.forEach( (record)=> {
        if (record.studentId===button.dataset.buttonUpdate){
          selectedRecord=record;
          console.log(selectedRecord)
          localStorage.setItem('info',JSON.stringify(selectedRecord))
            
        }


      })
    });
  });




const deleteButton=document.querySelectorAll('.delete');
console.log(deleteButton);
deleteButton.forEach((button) => {
  console.log("Adding event listner to each button")
  button.addEventListener('click', () => {
    console.log("Delete button clicked!")
    console.log(button.dataset.buttonDelete)


    studentList.forEach((sd,index)=> {
      if (sd.studentId===button.dataset.buttonDelete){
        studentList.splice(index,1);
      }
    })
    localStorage.setItem('studentRecord',JSON.stringify(studentList))

    console.log(JSON.stringify(localStorage.getItem('studentRecord')));
    location.reload()

    
  })
})

  
  
  


/////////////////////////////////////////////////////////////////////////////////////