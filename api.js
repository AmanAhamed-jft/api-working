
async function LoadData(){
   try {
    const response=await fetch('http://localhost:3000/emp');
    const data=await response.json();
    return data;
    } catch(e){ console.error('error in loading data',e); } 

}

//adding into db 
async function  addDB(data){
try{
    let request={
        method:'POST',
        headers:{'Content-type':'application/json; charset=UTF-8', },
        body:JSON.stringify(data),
      };
      const response=await fetch('http://localhost:3000/emp',request);
      return await response.json();
  }catch(e){ console.error('error in adding data',e);};
   
}

//deleting in data in db
//deleting in data in db
async function deleteInDB(id){
    try{
 
     const request={
         'method':'DELETE',
     }
     let deleteUrl='http://localhost:3000/emp/'+id;
     const response=await fetch(deleteUrl,request);
     return await response.json();
 
    }catch(e){console.error('error in deleting',e);}
 }



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
