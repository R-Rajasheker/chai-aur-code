function calculateCartPrice(...num1){
    let sum=0;
    for(let i=0;i<num1.length;i++){
        sum+=num1[i];
    }
    return sum
}
console.log(calculateCartPrice(1,7,2));

