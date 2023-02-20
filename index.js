//NUMBER 3
let general_subjects = "English, Mathematics";
let science_subjects = "Physics, Chemistry, Biology, Technical Drawing";
let socialScience_subjects = "Accounting, Commerce, Marketing, Geography";
let arts_subjects = "Government, Economics, Literature, History";

let classGroup = "art";

if (classGroup == "art") {
  console.log(`Your subjects are ${general_subjects}, ${arts_subjects}.`);
} else if(classGroup == "science"){
  console.log(`Your subjects are ${general_subjects}, ${science_subjects}.`)
} else if(classGroup == "social science") {
  console.log(`Your subjects are ${general_subjects}, ${socialScience_subjects}.`)
}
else {
  console.log(`Your subjects are ${general_subjects}.`)
}

// NUMBER 5
// Program that takes a positive number(num) and finds the power of 2 nearest to it

let num = 40;
let i = 1;
function getPower(number){
  while(i < number){
    if(number - i < Math.floor(i / 2)){
      return i;
    }
    i *= 2;
  }
  return i;
}
getPower(num);
console.log(`The number ${i} is the power of 2 nearest to ${num}.`);