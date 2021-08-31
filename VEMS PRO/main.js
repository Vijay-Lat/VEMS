// Declaring an empty Array and variables
let collectData=[];
let fName= document.querySelector("#name")
let mNumber= document.querySelector("#mobile");
let meet= document.querySelector("#meet");
let locat= document.querySelector("#location");
let purpose= document.querySelector("#pur");
let today= new Date();
let date = today.getDate()+ '-'+(today.getMonth()+1)+'-'+today.getFullYear()
let visitorId ="V"+Math.floor( Math.random()*10000);
let time = today.getHours()+":"+today.getMinutes();

// onclick function 

// validate the form 
function formValidation(){
    if(fName.value.trim().length==0){
        fName.style.backgroundColor =" red"
        return false;
}
if ( mNumber.value.trim().length==0 && typeof(mNumber)==="number")
{
    mNumber.style.backgroundColor = " red"
    return false;
}
if ( meet.value.trim().length==0)
{
    meet.style.backgroundColor = " red"
    return false;
}
if ( locat.value.trim().length==0)
{
    locat.style.backgroundColor = " red"
    return false;
}
if ( purpose.value.trim().length==0)
{
    purpose.style.backgroundColor = " red"
    return false;
}
    
saveData();
    

}
function saveData(){
   
    let userData ={
        "visitorName":fName.value,
        "mobileNo":mNumber.value,
        "whomToMeet":meet.value,
        "address":locat.value,
        "purpose":purpose.value,
        "dateOfVisit":date,
         "visitorId":visitorId,
         "inTime" :time
    
        }
        

     fetch('http://161.35.3.78/VEMS/api/version1/visitors',{
         method:'POST',
         headers:{
             'Content-Type':'application/json'
         },
         body:JSON.stringify(userData),
    
     }).then(response => response.json())
       .then(data => {
       console.log('Success:', data);
     })
     .catch((error) => {
       console.error('Error:', error);
     });

        fName.value = " ";
        mNumber.value= " ";
        meet.value= " ";
        locat.value= " ";
        purpose.value= " ";

        fName.style.backgroundColor="white ";
        mNumber.style.backgroundColor="white ";
        meet.style.backgroundColor="white ";
        locat.style.backgroundColor="white ";
        purpose.style.backgroundColor="white ";
        
      //message after Submitting 

      document.querySelector('.message').style.display='block';

    //   message disappearing
      setTimeout(function (){
          
      document.querySelector('.message').style.display='none';
      }, 2000)

        
}

  