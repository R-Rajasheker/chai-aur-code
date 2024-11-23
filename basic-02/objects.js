const user={
    id:'123abc',
    username:'raju',
    email:'some@gmail.com',
    isLoggedIn:false
}
console.log(user.isLoggedIn)
console.log(user.hasOwnProperty('isLoggedIn'));

// DE-STRUCTURING THE OBJECT
const{username:name}=user
console.log(name)
