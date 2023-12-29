var login_username="admin";
var login_password="123";

function login()
{
let v1, v2;
//v1 = document.login_form.username.value; //old access format using the name not the id
//v2 = document.login_form.password.value;

//v1 = document.getElementById('uname').value.toLowerCase(); //using the method
v2 = document.getElementById('psw').value;
	//if ((v1 == login_username) &&
	if(document.getElementById('uname').value == login_username &&
	   (v2 == login_password))
	{
		parent.location.href ="indexMenu.html";
	}
	else
	{
	    alert("Enter admin & 123");
		parent.location.href ="index.html";
	}
}

function logOut()
{
		parent.location.href ="index.html";
}