//console. log('Ready!');

function check_info(){
	var userName = document.getElementById('username').value;

var userEmail = document.getElementById('useremail').value;

var userMessage = document.getElementById("usermessage").value;
if(userName == "" && userEmail == ""&& userMessage == ""){

alert("Please fill in all information before submitting ");
return false;
}
//console.log('check_info()');
//}
else{
window.location.href = window.location.href + "/contact.html";
}
}
