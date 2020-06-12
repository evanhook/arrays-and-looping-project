$(document).ready(function(){
  $("form#numConverter").submit(function(event){
    event.preventDefault();

    const userInput = $("input#userNum").val();
    const transformNum = ["1", "2", "3"];
    const otherNum = ["0", "4", "5", "6", "7", "8", "9"]
    const greetingArray = ["Beep!", "Boop!", "Won't you be my neighbor?"];
    let output = [];

    function user(userInput){
      if (userInput < 0 || userInput === NaN) {
        output.push("Please enter a number greater than 0");
      }
    }
    user(userInput);

    const splitString = userInput.split(" ");
    splitString.forEach(function(value){
      if (userInput.includes(transformNum[2])) {
        output.push(greetingArray[2]);
      } else if (userInput.includes(transformNum[1])) {
        output.push(greetingArray[1]);
      } else if (userInput.includes(transformNum[0])) {
        output.push(greetingArray[0]);;
      } else if (userInput.includes(otherNum)){
        while (userInput > 0 && !userInput.includes(transformNum[0,1,2]))
          console.log(output);
      }
    });


    $("#numOutput").text(output);
  }); 
});

//if the user input does not contain a 123, show a count starting at 0 and replacing all 123 with the strings and the other numbers as numbers


  //output.push(element)
//}


//else if (!userInput.includes(transformNum[2,1,0])) {
 // output.push("placeholder");
//}
/*
const otherNum = ["0", "4", "5", "6", "7", "8", "9"];
let output = [];
while (userInput > 0 && !userInput.includes(transformNum[0,1,2])) {
  console.log(output)
*/