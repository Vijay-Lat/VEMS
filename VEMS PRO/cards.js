let cardsData=[];
        fetchDataFromBase();
 function fetchDataFromBase()
 {
 
  fetch('http://161.35.3.78/VEMS/api/version1/visitors')
  .then(response=>response.json())
  .then(data=>{
      cardsData.push(data)
      console.log(cardsData[0].data.length)
      generateCards();

      
})
}
// function outTime(){
//     let today = new Date();
//     let outTime= today.getHours()+":"+today.getMinutes();
//     let enteredTime={
//         "out-Time":outTime
//     }
//     outTime.onclick = function() {
//         //disable
//         this.disabled = true;
//     }
    
    // fetch('http://161.35.3.78/VEMS/api/version1/visitors',{
    //     method:'POST',
    //     headers:{
    //     'Component-Type':'application/json'
    //     },
    //     body:JSON.stringify(enteredTime)


    // })



//generating Cards 

function generateCards(){

    

 let cardsHtml=" ";
 let cardsLength=cardsData[0].data.length
 for(let indexValue=0;indexValue<cardsLength;indexValue++){

 cardsHtml +="<div class= 'card' style='width: 18rem;'>"

 cardsHtml+= "<div class='card-body'>"
 cardsHtml+="<h5 class='card-title'> Name:"+cardsData[0].data[indexValue].visitorName+"</h5>"
 cardsHtml+="<p class='card-text'>Mobile:"+cardsData[0].data[indexValue].mobileNo+"</p>"  
 cardsHtml+="<p class='card-text'>Date:"+cardsData[0].data[indexValue].dateOfVisit+"</p>" 
 cardsHtml+="<p class='card-text'>VisitorId:"+cardsData[0].data[indexValue].visitorId+"</p>" 
 cardsHtml+="<p class='card-text'>Time:"+cardsData[0].data[indexValue].inTime+"Hours</p>"
 cardsHtml+="<p class='card-text'>Time:"+cardsData[0].data[indexValue].outTime+"Hours</p>"   
    
 cardsHtml+=" <button class='btn btn-outline-success printBtn' onclick='outTime();' type='button'>Out-Time</button>"
 cardsHtml+="</div>"
 cardsHtml+="</div><br>"
 }
 document.getElementById('cardsGenerate').innerHTML=cardsHtml;


 }
 

 