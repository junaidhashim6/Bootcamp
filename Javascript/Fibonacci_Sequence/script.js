document.getElementById("number").value= number;
var n1 = 0, n2 = 1, nextTerm;
function fibonacci(){

document.getElementById("head").innerHTML="Fibonacci Sequence";

nextTerm = n1 + n2;

while (nextTerm <= number) {

    // print the next term
    document.getElementById("res").innerHTML=nextTerm;
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
}
