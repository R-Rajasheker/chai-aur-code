const user={
    username:'rajesh',
    age:30
}
const user1={
    username:'vishnu',
    age:40
}
const user2={
    username:'sai',
    age:38
}
function handleObject(anyuser){
    console.log(`${anyuser.username} is ${anyuser.age} years old`);
}
handleObject(user)
handleObject(user1)
handleObject(user2)
handleObject({
    username:'siri',
    age:35
})

// FUNCTION ON ARRAYS
const arr1=[2,43,555,100]
const arr2=[100,200,55,255]
function findlargest(getarray){
    let largest=getarray[0]
    for(let i=0;i<getarray.length;i++){
        if(getarray[i]>largest){
            largest=getarray[i];
        }
    }
    return largest;
}
console.log(findlargest(arr1))
console.log(findlargest(arr2))
console.log(findlargest([20,1,3,15]))