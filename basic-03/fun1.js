function addition(number1,number2){  
    console.log(number1+number2); 
}
 addition(2,5)

function userloggedin(username){
    if(username===undefined){
        console.log('please enter user name!!!!')
    }
    else{
    console.log(`${username} just logged in`)
    }
}
userloggedin('ramesh')

function userloggedin(username='siri'){
    if(username===undefined){
        console.log('please enter user name!!!!')
    }
    else{
    console.log(`${username} just logged in`)
    }
}
userloggedin()