import inquirer from "inquirer";

const answers:{
numberOne : number,
numberTwo : number,
operator : String
}

=await inquirer.prompt([
{

    type :"number",
    name : "numberOne",
    message : "Please enter your first no:"
},
{

    type :"number",
    name : "numberTwo",
    message : "Please enter your second no:"
},
{
type: "list",
name : "operator",
choices: ["+","-","*","/"],
message: "Select operation:"
},
])
const {numberOne , numberTwo, operator} = answers;
if(numberOne && numberTwo && operator ){
 let result:number = 0
    if(operator === "+"){
  result = numberOne + numberTwo
  console.log(operator)
  }else if(operator === "-"){
    result = numberOne - numberTwo
    console.log(operator)
  } else if(operator === "*"){
    result = numberOne * numberTwo
    console.log(operator)
  } else if(operator === "/"){
    result = numberOne / numberTwo
    console.log(operator)
  }
  console.log("Your result is :", result )
}else{
    console.log('Kindly enter valid input')
}
