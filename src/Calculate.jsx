
function add(a , b) {
   let add = a + b ;
   return add;
}

function sub(a , b) {
    let sub = a - b ;
    return sub;
 }

function div(a , b) {
   let div = (a / b) ;
   div = div.toFixed(2)
   return div;
}


function mul(a , b) {
    let mul = a * b ;
    return mul;
 }

export { add, sub, div, mul } ;
