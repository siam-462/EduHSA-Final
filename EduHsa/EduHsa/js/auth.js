if(localStorage.a==undefined){
    console.log(localStorage.a==undefined);
    localStorage.a=JSON.stringify([]);
}

console.log(localStorage.dp);


var username = document.getElementById("usern");



var useremail = document.getElementById("usere");


var userpass = document.getElementById("userp");


var usercpass = document.getElementById("usercp");

var usersignup= document.getElementById("usersign");

let user={usern:"",
usere:"",
userp:"",
usercp:"",
};

function signup(){
    user={usern:usern.value,
    usere:usere.value,
    userp:userp.value,
    usercp:usercp.value,
    };
    console.log(user);
    
    let users=JSON.parse(localStorage.a);
    users.push(user);
    localStorage.a=JSON.stringify(users);
    console.log(user.usure);
   
    

}

function upSubmit(){
    let fr=document.forms["upform"];
    if(fr["usern"].value ==""){
        return false;
    }
    if(fr["userp"].value !=fr["usercp"].value){
        return false;
    }
    let users=JSON.parse(localStorage.a);
    for(let i=0 ; i<users.length; i++){
        if(usere.value==users[i]){
           localStorage.dp="dublicate";
           alert("Users already Exits");
           return;


        }
    }
    signup();
}

console.log(JSON.parse(localStorage.a));
