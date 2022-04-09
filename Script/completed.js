




var completed1 = JSON.parse(localStorage.getItem("completed"));
// console.log(completed1)
var completed2=JSON.parse(localStorage.getItem("allcomplete"))||[]
completed1.map(function(elem){
    console.log(elem);
    var tr=document.createElement("tr");
    
    var td01=document.createElement("td");
    td01.innerText=elem.itemName;
    
    var td02=document.createElement("td");
    td02.innerText=elem.itemQty;
    
    var td03=document.createElement("td");
    td03.innerText=elem.itemPrior;
    
    
    
    // var btn=document.createElement("button");
    // btn.innerText="Mark as complete";
    // td4.append(btn);
    tr.append(td01,td02,td03);
    localStorage.setItem("allcomplete",JSON.stringify(completed1))
    document.querySelector("tbody").append(tr);
    


});
