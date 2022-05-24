function calculation(){
    let num1 = Number(prompt("Enter the first num1"));
    let num2 = Number(prompt("Enter the last num2"));

    document.getElementById("sum").innerHTML=`${num1} + ${num2} = ${sum(num1,num2)}`;

    document.getElementById("subtraction").innerHTML=`${num1} - ${num2} = ${subtraction(num1,num2)}`;

    document.getElementById("multiplication").innerHTML=`${num1} * ${num2} = ${multiplication(num1,num2)}`;

    document.getElementById("division").innerHTML=`${num1} / ${num2} = ${division(num1,num2)}`;
}


function sum(a,b){
    document.getElementById("return").innerHTML= `${num1} + ${num2} = ${sum(num1,num2)}`;

}

function subtraction(a,b){
    return a-b;
}

function multiplication(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}