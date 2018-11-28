var users=['nitu','nisha'];
function adduser(username,callback){
    setTimeout(function(){
users.push(username);
callback();
    },200);
}
function getusers(){
    
    setTimeout(function(){
console.log(users);
    },100);
}
adduser('dog',getusers);//another function ko passing as parmeter and recived and then reqirment thi tb 
call kiye callback k throw 