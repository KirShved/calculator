let num1=document.querySelector('.number1')
let num2=document.querySelector('.number2')
let answer=document.querySelector('.res')
let znaki=document.querySelectorAll('.znak')

znaki.forEach((item)=>{
    item.addEventListener('click',(event)=>{
        calc(event.target.textContent)
    })
})

function calc(e){
    let result;
    let number1=Number(num1.value)
    let number2=Number(num2.value)
    switch(e){
        case '+':
            result=+number1+number2;
            break;
        case '-':
            result=number1-number2;
            break;
        case 'x':
            result=number1*number2;
            break;
        case ':':
            result=number1/number2;
            break;            
    }
    answer.innerHTML=result
}