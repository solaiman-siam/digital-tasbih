let num = document.getElementById("num");
let inc = document.getElementById("inc");
let dec = document.getElementById("dec");

let num2 = document.getElementById("num2");
let inc2 = document.getElementById("inc2");
let dec2 = document.getElementById("dec2");

let num3 = document.getElementById("num3");
let inc3 = document.getElementById("inc3");
let dec3 = document.getElementById("dec3");

let btn3 = document.getElementById('btn3')



let sum1 = 0

inc.addEventListener("click", () => {
    if(Number(num.innerText) === 33){
        return alert('SubhanAllah Complete')
    }
    num.innerText = sum1 += 1
});


dec.addEventListener('click', function(){
    if(num .innerText <= 0){
        return alert('Please Provice a Positive Number')
    }
    num.innerText = sum1 -= 1
})



let sum2 = 0
inc2.addEventListener("click", () => {
    if(Number(num2.innerText) === 33){
        return alert('SubhanAllah Complete')
    }
    num2.innerText = sum2 += 1
});


dec2.addEventListener('click', function(){
    if(num2.innerText <= 0){
        return alert('Please Provice a Positive Number')
    }
    num2.innerText = sum2 -= 1
})




let sum3 = 0
inc3.addEventListener("click", () => {
    if(Number(num3.innerText) === 33){
        return alert('SubhanAllah Complete')
    }
    num3.innerText = sum3 += 1
});


dec3.addEventListener('click', function(){
    if(num3.innerText <= 0){
        return alert('Please Provice a Positive Number')
    }
    num3.innerText = sum3 -= 1
})


btn3.addEventListener('click', function(){
   num.innerText = 0;
   num2.innerText = 0;
   num3.innerText = 0;
   sum3 = 0;
   sum2 = 0;
   sum1 = 0;
})