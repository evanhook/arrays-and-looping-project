// Business Logic

const transformNum = ["1", "2", "3"];
const greetingArray = ["Beep!", "Boop!", "Won't you be my neighbor?"];
let output = [];
function robogerResponse(userInput, userValue) {
  if (userInput < 0 || userInput === NaN) {
    output.push("Please enter a number greater than 0");
  } else if (userInput.includes(transformNum[2])) {
    output.push(greetingArray[2]);
  } else if (userInput.includes(transformNum[1])) {
    output.push(greetingArray[1]);
  } else if (userInput.includes(transformNum[0])) {
    output.push(greetingArray[0]);
  } for(let i=0; i<userValue; i++) {
    //i=i.split("");
    if (i.includes(transformNum[2])){
      output.push(greetingArray[2]);
     } else if (i.includes(transformNum[1])) {
      output.push(greetingArray[1]);
     } else if (i.includes(transformNum[0])) {
      output.push (greetingArray[0])
     } else {
      output.push(i+1);
     }
  }
};

//User Interface
$(document).ready(function(){
  $("form#numConverter").submit(function(event){
    event.preventDefault();
    output = [];
    const userNum = $("input#userNum").val();
    const splitString = userNum.split("");
    robogerResponse(splitString, userNum);
    $("#numOutput").text(output);
  }); 
});