const display = document.getElementById("display");
const result = document.getElementById("result");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

button.addEventListener("click",()=>{

const value = button.textContent;

if(value==="C"){

display.value="";
result.textContent="Result: 0";

}

else if(value==="⌫"){

display.value=display.value.slice(0,-1);
updateResult();

}

else if(value==="="){

calculate();

}

else{

let input=value;

if(value==="×") input="*";
if(value==="÷") input="/";

display.value+=input;

updateResult();

}

});

});

function calculate(){

try{

display.value=eval(display.value);

result.textContent="Result: "+display.value;

}

catch{

display.value="";

result.textContent="Invalid Expression";

}

}

function updateResult(){

try{

if(display.value===""){

result.textContent="Result: 0";

return;

}

let answer=eval(display.value);

result.textContent="Result: "+answer;

}

catch{

result.textContent="Result: ...";

}

}

document.addEventListener("keydown",(e)=>{

const key=e.key;

if("0123456789+-*/.".includes(key)){

display.value+=key;

updateResult();

}

else if(key==="Enter"){

e.preventDefault();

calculate();

}

else if(key==="Backspace"){

display.value=display.value.slice(0,-1);

updateResult();

}

else if(key==="Escape"){

display.value="";

result.textContent="Result: 0";

}

});