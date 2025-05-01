const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

const alerte = () =>{
   alert("Please input a value")
}


function isInvalidInput(str) {
  const regex = /[\s()\/,_.-]/g;
  return str.replace(regex, '');
}


const checkBtn = document.getElementById("check-btn").addEventListener("click", (e) =>{
   e.preventDefault();
  if(textInput.value === ""){
   return  alerte()
  } 
  const cleanInput= isInvalidInput(textInput.value).toLowerCase();
  
  const reverse = cleanInput.split('').reverse().join('');
  
  if (reverse === cleanInput) {
    
    result.innerText = `${textInput.value} is a palindrome!`;
  } else {
    result.innerText = `${textInput.value} is  not a palindrome!`;
  }
});