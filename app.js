// console.log('script is running...');
// function fetchData(){
//     console.log("2")

//     let xhrRequest=new XMLHttpRequest();
//     console.log("21")

//     xhrRequest.onload=function(){
//         console.log("22")

//         console.log(xhrRequest.response);
//     }
//     console.log("23")

//     xhrRequest.open('get','http://localhost:3000/emp');
//     console.log("24")

//     xhrRequest.send();
//     console.log("25")

// }

// console.log("1")
// fetchData();
// console.log("3")

/*
feching data from api using fetch method

fetch('http://localhost:3000/emp')
  .then(response => response.json())
  .then(data => console.log(data));


*/



//   putting the data by fetch method by post request

// async function addData(url,data){
      
//     const request={
//         method:'POST',
//         headers:{
//            'Content-type': 'application/json; charset=UTF-8',
//          },
//          body:JSON.stringify(data)
//     };

//     const response=await fetch(url,request);
//     return await response.json();
//   }

//   let a=addData('http://localhost:3000/emp',{
//        id:2,
//        name:'gaurav',
//        job:'SDE',
//        salary:100000
//   });
//   console.log(a);




const table=document.getElementById('myTable');
let btn=document.getElementById('btn');
let empName=document.getElementById('name');
let desig=document.getElementById('desig');
let salaryEmp=document.getElementById('salary');
let myIndex=0;
let lastIndexClick = -1;
let arr=[];
//load the data in table
async function Load(){
try{
        const data=await LoadData();
         if(data){
        for(key in data)
        arr.push(data[key]);
        insertDataTable();
       }
}catch(e){console.log(e);}
      
     
}

(function init(){
  Load();
})();

//inserting the data into table on loading
function insertDataTable(){
  console.log('arrr size is',arr.length);
  let data='';
  arr.forEach((value)=>{
    data+= `<tr id="${value.id}">
       <td>${value.name}</td>
       <td>${value.job}</td>
       <td>${value.salary}</td>
       <td><div class="between">
       <button type="button" onclick="updateData(${value.id})">Edit</button>
       <button type="button" onclick="deleteData(${value.id})">Delete</button>
     </div></td>
      </tr>`
      }); 
      table.innerHTML = data;   
}

//adding data
async function addData(){
    let name=empName.value;
    let job=desig.value;
    let salary=salaryEmp.value;
    if(name==''|| job=='' ||salary==''){
     alert("Field can't be empty");
    }else{
       let obj={ id:arr.length, name:name,job:job,salary:salary }

           const res=await addDB(obj);
           if(res)
           //inserting data in table in html
           appendRowInTable(obj);
       
    }
    //reset the input field
    name=''; job=''; salary='';
}

//append row in the table
function appendRowInTable(obj){
  let htmlData=`<tr id="${obj.id}">
           <td>${obj.name}</td>
           <td>${obj.job}</td>
           <td>${obj.salary}</td>
           <td><div class="between">
           <button type="button" onclick="updateData(${obj.id})">Edit</button>
           <button type="button" onclick="deleteData(${obj.id})">Delete</button>
           </div></td>
           </tr>`;
           var newRow = table.insertRow();
           newRow.innerHTML=htmlData;
}

//delete data
async function deleteData(id){
     const db=await deleteInDB(id);
}

// function addData(e){
//   let Name=name.value;
//   let Desig=desig.value;
//   let Salary=salary.value;
//     let obj={
//       name:Name,
//       desig:Desig,
//       salary:Salary,
//       }
//       if(btn.innerText=='Add')
//         insertData(obj).then(Load).catch((e)=>console.log(e));
//       else{
//         updateEmployee(lastIndexClick,Name,Desig,Salary).then(Load).catch(console.log('error in updating..'));
//         btn.innerHTML='Add';
//       };
      
//       name.value='';   desig.value='';  salary.value='';
// }

// function insertDataTable(){
//   console.log('arrr size is',arr.length);
//   // let tableRow=document.createElement('tr');
//   let data='';
//   arr.forEach((value)=>{
//     data+= `<tr>
//        <td>${value.name}</td>
//        <td>${value.desig}</td>
//        <td>${value.salary}</td>
//        <td><div class="between">
//        <button type="button" onclick="updateData(${value.id})">Edit</button>
//        <button type="button" onclick="deleteData(${value.id})">Delete</button>
//      </div></td>
//       </tr>`
//       }); 
//       table.innerHTML = data;   
// }


// function updateData(e){
//   console.log("update data==", e)
//  btn.innerText='Update';
//   name.value=arr[e].name;
//   desig.value=arr[e].desig;
//   salary.value=arr[e].salary;

//   let n = arr[e].name
//   let d = arr[e].desig
//   let s = arr[e].salary

//   console.log('updateData',e,n,d,s)
//   lastIndexClick = e;
// }

// function deleteData(e){
//    deleteEmployee(e).then(Load).catch((e)=>console.log(e));
// }





