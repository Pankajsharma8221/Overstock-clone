
//This Functionality for Signup Purpose

document.querySelector("#zformtag").addEventListener("submit",signup)

var userData = JSON.parse(localStorage.getItem("user"))||[];

function signup()
{
    event.preventDefault();

    var userObj = {
        email:zformtag.zmail.value,
        password:zformtag.zpass.value,
        confirmPassword:zformtag.zpasss.value,
    };

    userData.push(userObj);
    console.log(userData);

    localStorage.setItem("user",JSON.stringify(userData));

    document.getElementById("zmail").value = null;
    document.getElementById("zpass").value = null;
    document.getElementById("zpasss").value = null;
   window.location.href = "account.html";
}

//For login part

document.querySelector("#Zform").addEventListener("submit",login)

var userlog = JSON.parse(localStorage.getItem("user"))||[];
console.log(userlog);
function login()
{
    event.preventDefault();

    let email = Document.querySelector("#Zmail1").value;
    let pass = Document.querySelector("#Zpass1").value;
    let confirm = Document.querySelector("#Zpasss1").value;
    console.log(email,pass,confirm);

    for(var i = 0; i<userlog.length;i++)
    {
      if(userlog[i]==Eemail && userlog[i]==Ppass && userlog[i]==Cconfirm)
      {
          alert("login Successful!")
          window.location.href = "index.html";
          break;
      }
      else
      {
          alert("Invalid Credential!")
      }
    }
    document.getElementById("Zmail1").value = null;
    document.getElementById("Zpass1").value = null;
    document.getElementById("Zpasss1").value = null;
};