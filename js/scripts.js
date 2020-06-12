$(document).ready(function(){
  $("form#numConverter").submit(function(event){
    event.preventDefault();

    const userInput = $("input#userNum").val();
    const transformNum = ["1", "2", "3"];
    const greetingArray = ["Beep!", "Boop!", "Won't you be my neighbor?"];
    let output = [];

    function user(userInput){
      if (userInput < 0){
        alert("please enter a number greater than 0"); // add for letters
      } 
    }
    user(userInput);

    const splitString = userInput.split(" ");
    splitString.forEach(function(value){
      if (userInput.includes(transformNum[0])) {
        output.push(greetingArray[0]);
      } else if (userInput.includes(transformNum[1])) {
        output.push(greetingArray[1]);
      } else if (userInput.includes(transformNum[2])) {
        output.push(greetingArray[2]);;
      }
    })







    
    $("#numOutput").text(output);
  }); 
});
/*
    if (userInput < 0){
      alert("please enter a number greater than 0");
    } else if (userInput === 1) {
      $("div#numOutput").text("Beep!");
    } else if (userInput === 2) {
      $("div#numOutput").text("Boop!");
    } else if (userInput ===3) {
      $("div#numOutput").text("Won't you be my neighbor?");
    }
  });
*/