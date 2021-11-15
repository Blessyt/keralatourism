function validate()
{
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var pwd = document.getElementById("pwd").value;
var cpwd= document.getElementById("confirmpwd").value;


var mailformat = /^\w+([\.-]?\w+)*@([a-z])*\.([a-z]{2,3})(.[a-z]{2,3})?$/;
var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
var letters = /^[A-Za-z]+$/;
// var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var phno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

if(!letters.test(name))
{
    alert('Name field required only alphabet characters');
}

else if (!mailformat.test(email))
{
    alert('Invalid email');
}

else if(!phno.test(phone))
{
    alert('Invalid Phone Number or You have inserted special characters');

}

else if(!pwd_expression.test(pwd))
{
    alert ('Upper case, Lower case, Special character and Numeric letter are required in Password field');
}
else if(pwd.length < 6)
{
    alert ('Password minimum length is 6');
}
else if(pwd.length >= 12)
{
    alert ('Password max length is 12');
}
else if(pwd != cpwd)
{
    alert ('Password not Matched');
}
// else if(document.getElementById("t5").value.length < 6)
// {
//     alert ('Password minimum length is 6');
// }
// else if(document.getElementById("t5").value.length > 12)
// {
//     alert ('Password max length is 12');
// }
else
{				                            
       alert('Thank You for Login');
       window.location = "login.html"
}  


}

