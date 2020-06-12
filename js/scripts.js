$(document).ready(function(){
  $("form#numConverter").submit(function(event){
    event.preventDefault();
    const userInput = $("input#userNum").val();
    const transformNum = ["1", "2", "3"];
    const greetingArray = ["Beep!", "Boop!", "Won't you be my neighbor?"];
    const otherNum = ["0", "4", "5", "6", "7", "8", "9"]
    let output = [];

    for (let i = 0; i <= 100; i++) {
      //console.log(userInput);
    } if(userInput < 0 || userInput >100) {
      output.push("please enter a number between 1 and 100")
      console.log(userInput);
    } if else 
  });
});