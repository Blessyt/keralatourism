function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@([a-z])*\.([a-z]{2,3})(.[a-z]{2,3})?$/;
if(inputText.value.match(mailformat))
{
// alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}