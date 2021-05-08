let username = document.getElementById("username");
let pwd = document.getElementById("pwd");
let error = document.getElementById("error");

function CheckUsername() {
    var user= "admin";
    if(username.value==user) { 
        alert('Valid Username');
        return true;
    }
    else{ 
        alert('InValid Username');
        return false;
    }
}
function CheckPassword() {
    var decimal= "12345";
    if(pwd.value == decimal) { 
        alert('Valid Password');
        return true;
    }
    else{ 
        alert('InValid Password');
        return false;
    }
}
