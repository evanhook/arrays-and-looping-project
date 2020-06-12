// Business Logic

//this excludes negative numbers and letters
function robogerResponse(userInput) {
  if (userInput < 0){
    alert("please enter a number greater than 0");
  }
} 


// User Interface
$(document).ready(function(){
  $("form#numConverter").submit(function(event){
    event.preventDefault();
    let output = [""]
    const userInput = parseInt($("input#userNum").val());
    $("#numOutput").text(output);
    
  });
});



/*testing loop here:
const numbers = [1, 2, 3]
const response = ["Beep!", "Boop!", "Won't you be my neighbor?"];
//let robogerResponse =[""];

for (let index = 0; index <= userInput.length; index++) {
let foundNum = userInput.find(element => element < 4);
  console.log(foundNum);
}
*/