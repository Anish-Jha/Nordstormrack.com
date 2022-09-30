let form=document.querySelector("form");
let boxF=document.getElementById("nameF");
let boxL=document.getElementById("nameL");
let boxP=document.getElementById("password");
let signupPage=JSON.parse(localStorage.getItem("signup")) ||[];
function display(){
    let signup=JSON.parse(localStorage.getItem("signup")) || [];
    signup.forEach(function(el){
    let mail=document.getElementById("mail");
    mail.innerText=el.email;
    mail.style.fontSize="13px";
    mail.style.fontFamily="Brandon Text","Arial","sans-serif";
    mail.style.lineHeight="18.5px";
    })
}
display();
form.addEventListener("submit", function(event){
    event.preventDefault();

let obj={
    Fname:form.nameF.value,
    Lname:form.nameL.value,
    password:form.password.value,
}
if(obj.Fname==""){
    firstName_box.innerText="Enter the name without special characters";
    firstName_box.style.fontSize="13px";
    firstName_box.style.color="#DF2247";
    firstName_box.style.marginTop="5px"
    firstName_box.style.fontFamily="Brandon Text","Arial","sans-serif";
    boxF.style.border="1px solid #DF2247"
    // boxF.innerText="ⓘ";
    boxF.style.borderBottom="3px solid #DF2247"
}
if(obj.Lname==""){
    lastName_box.innerText="Enter the name without special characters";
    lastName_box.style.fontSize="13px";
    lastName_box.style.color="#DF2247";
    lastName_box.style.marginTop="5px"
    lastName_box.style.fontFamily="Brandon Text","Arial","sans-serif";
    boxL.style.border="1px solid #DF2247"
    boxL.style.borderBottom="3px solid #DF2247"
}
if(obj.password==""){
    ulCase.innerText="⊝ Both upper and lowercase letters";
    ulCase.style.fontSize="13px";
    ulCase.style.color="#DF2247";
    ulCase.style.marginTop="-5px"
    ulCase.style.fontFamily="Brandon Text","Arial","sans-serif";
    nsCase.innerText="⊝ A number or symbol";
    nsCase.style.fontSize="13px";
    nsCase.style.color="#DF2247";
    nsCase.style.marginTop="-5px"
    nsCase.style.fontFamily="Brandon Text","Arial","sans-serif";
    leCase.innerText="⊝ 8-20 characters";
    leCase.style.fontSize="13px";
    leCase.style.color="#DF2247";
    leCase.style.marginTop="-5px"
    leCase.style.fontFamily="Brandon Text","Arial","sans-serif";
    boxP.style.border="1px solid #DF2247"
    boxP.style.borderBottom="3px solid #DF2247"
    return;
}
let symb="12345678";
        if(obj.password.length<symb.length){
            ulCase.innerText="⊝ Both upper and lowercase letters";
    ulCase.style.fontSize="13px";
    ulCase.style.color="#DF2247";
    ulCase.style.marginTop="-5px"
    ulCase.style.fontFamily="Brandon Text","Arial","sans-serif";
    nsCase.innerText="⊝ A number or symbol";
    nsCase.style.fontSize="13px";
    nsCase.style.color="#DF2247";
    nsCase.style.marginTop="-5px"
    nsCase.style.fontFamily="Brandon Text","Arial","sans-serif";
    leCase.innerText="⊝ 8-20 characters";
    leCase.style.fontSize="13px";
    leCase.style.color="#DF2247";
    leCase.style.marginTop="-5px"
    leCase.style.fontFamily="Brandon Text","Arial","sans-serif";
    boxP.style.border="1px solid #DF2247"
    boxP.style.borderBottom="3px solid #DF2247"
    return;
}else if(obj.Fname!=="" && obj.Lname!=="" && obj.password!==""){
    signupPage.push(obj);
    localStorage.setItem("signup", JSON.stringify(signupPage));
    window.location.href="welcome.html"
}   
})