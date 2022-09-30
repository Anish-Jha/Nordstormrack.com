let form=document.querySelector("form");
let empty=document.getElementById("empty_box");
let signupPage=JSON.parse(localStorage.getItem("signup")) ||[];
let mail=document.getElementById("email");
form.addEventListener("submit", function(event){
    event.preventDefault();

let obj={
    email:form.email.value,
}
if(obj.email==""){
// main="./images/card(9).png";
mail.style.border="1px solid red";
mail.style.backgroundColor="#E8F0FE"
empty.innerText="Enter the email address like this: name@email.com";
empty.style.fontSize="13px";
empty.style.color="red";
empty.style.marginTop="-10px";
empty.style.fontFamily="Brandon Text","Arial","sans-serif";
empty.style.lineHeight="18.5px"; 
}else if(obj.email!==""){
signupPage.push(obj);
localStorage.setItem("signup",JSON.stringify(signupPage));
window.location.href="create.html"
}
})