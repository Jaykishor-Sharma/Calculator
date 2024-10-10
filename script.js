let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let Arr = Array.from(buttons);
Arr.forEach(button =>{
    button.addEventListener('click' , () =>{
      if(button.innerHTML == '='){
        string=eval(string);
        input.value = string;
      }else if(button.innerHTML == 'AC'){
        string = "";
        input.value = string;
      }else if(button.innerHTML == 'DEL'){
        string = string.substring(0 , string.length-1);
        input.value = string;
     }else if(button.innerHTML == 'input.value=string'){
      string += button.innerHTML;
      input.value = string;
     }
     else{
        string += button.innerHTML;
        input.value = string;
      }
    })
}) 