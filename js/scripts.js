// Business Logic
  

// User Interface
$(document).ready(function(){
  $("form#numConverter").submit(function(event){
    event.preventDefault();
    let output = [""]
    const userInput = parseInt($("input#userNum").val());
    $("#numOutput").text(output);

    if (userInput < 0){
      alert("please enter a number greater than 0");
    } else if (userInput === 1) {
      $("div#numOutput").text("Beep!");
    } else if (userInput === 2) {
      $("div#numOutput").text("Boop!");
    } else if (userInput ===3) {
      $("div#numOutput").text("Won't you be my neighbor?");
    } else if (userInput )
  });
});


/*const array = [1,2,3];
let transformArray = [];
for (let index = 0; index <= userInput.length; index++) {
  transformArray.split("");
};
*/