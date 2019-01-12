//make the function read score
// let score = document.getElementById('score');
// var score;
function grabscore(score){
var score = document.getElementById('score').value;

function grade(x) {
console.log("score in grade is "+ score)
if (x <= 59) {
  alert("F");
  return "a f"
}
else if (x <= 69) {
  alert(" a d")
  console.log("neither")
  return "a D"
}
else if (x <= 79) {
  alert(" A c")
  return "a c"
}
else if (x <= 89){
  alert("a b")
  return "a b"
}
else if (x <= 99){
  alert("an a")
  return "an a"
}
else {
  alert("cheating")
  console.log("there")
  return "over 50";
}
}
console.log("value of score inside grabscore is "+ score)
grade(score);
};
