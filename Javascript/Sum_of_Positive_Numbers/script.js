var arr = [1,-1,0,-3,5];
sum = 0;
function findSum(){
    arr.forEach(i => {
        if (i>0){
            sum=sum+i;
            document.getElementById("head").innerHTML=sum;
        }
    });
}
