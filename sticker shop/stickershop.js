// const h1s= document.getElementsByClassName("title");
// h1s[0].style.color="purple"
// h1s[1].style.color="pink"
const Login=document.getElementById("Login")
Login.addEventListener("submit",function(){
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    alert("username: "+ username + "\npassword:" + password);
});