// Business Logic
function beepboop(userInput) {
  if (userInput < 0);
    alert("please enter a number greater than 0")
}

// User Interface
$(document).ready(function(){
  $("form#numConverter").submit(function(event){
    event.preventDefault();
    const userInput = parseInt($("input#userNum").val());
    const output = beepboop(userInput); // beepboop will be the function that examines our exceptions/specs
    $("#numOutput").text(output);
  });
});