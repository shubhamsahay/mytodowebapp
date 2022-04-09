document.querySelector("#form").addEventListener("submit", myFunction);

var todoArr ;
if(localStorage.getItem("todoData")==null){
  todoArr=[];
}else{
  todoArr=JSON.parse(localStorage.getItem("todoData"));

}

// var todoArr=JSON.parse(localStorage.getItem("todoData")||[]);

function myFunction() {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var quantity = document.querySelector("#qty").value;
  var prior = document.querySelector("#priority").value;

  var todoObj = {
    itemName: name,
    itemQty: quantity,
    itemPrior: prior,
  };
  //console.log(todoObj);
  todoArr.push(todoObj);
  // console.log(todoArr);

  localStorage.setItem("todoData", JSON.stringify(todoArr));
}
