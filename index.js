const projektA = document.querySelector('.sum');
const projektB =document.querySelector('.minus');
const projektC = document.querySelector('.answer')
const projektD = document.querySelector('.poro')
const projektF = document.querySelector('.amount')


function sum (a, b){
    return a + b
}
function minus(a, b){
    return a - b
}
function multi(a, b){
    return a * b
}


const operasion = {
    sum:'+',
    minus:'-',
    multi: '*'

};

function actions({ a, b, opera}){
    let result = null;
   switch (opera) {
    case operasion.sum:
        result = sum(a, b)
        break;
    case operasion.minus:
        result = minus(a, b)
        break;
    case operasion.multi:
        result = multi(a, b)
    default:
        break;
   }

    return result
}
projektC.addEventListener('click', function(){
    const a =Number(projektA.value);
    const b = Number(projektB.value);
    const opera = projektD.value;

    const result = actions({ a, b, opera})
    projektF.innerHTML = result
})
