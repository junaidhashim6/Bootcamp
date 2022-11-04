function check(){
    var a = document.getElementById("number").value;
    if (a > 0){
        document.getElementById("head").innerHTML = "Number is positive"
    }
    else if( a < 0){
        document.getElementById("head").innerHTML = "Number is Negative"
    }
    else{
        document.getElementById("head").innerHTML = "Number is Zero"
    }
}