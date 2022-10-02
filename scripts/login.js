let form=document.querySelector("form");
let mail=document.getElementById("email");
let pass=document.getElementById("password");
let signupPage = JSON.parse(localStorage.getItem("signup")) || [];
let loginPage=JSON.parse(localStorage.getItem("signIn")) || [];
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let obj = {
        email: form.email.value,
        password: form.password.value,
    }
    console.log(obj);
    if(obj.email==""){
        empty.innerText="Enter the email address like this: name@email.com";
        empty.style.fontSize="13px";
        empty.style.color="red";
        empty.style.marginTop="-10px";
        empty.style.fontFamily="Brandon Text","Arial","sans-serif";
        empty.style.lineHeight="18.5px"; 
        mail.style.border="1px solid red";
        
    }
    if(obj.password==""){
        passWarn.innerText="This field is required";
        passWarn.style.fontSize="13px";
        passWarn.style.color="red";
        passWarn.style.marginTop="-10px";
        passWarn.style.paddingBottom="10px";
        passWarn.style.fontFamily="Brandon Text","Arial","sans-serif";
        pass.style.border="1px solid red";
        return;
    }
    
    let Result=false;
    signupPage.forEach(function (ele) {
        if (ele.email === obj.email) {
            Result = true;
            console.log(obj.password);
            localStorage.setItem("signin", JSON.stringify(ele));
            return;
        }
        if(ele.email!== obj.email){
            empty.innerText="Hmm, that doesn't look right. Try again?";
            empty.style.fontSize="16px";
            empty.style.color="red";
            empty.style.padding="10px";
            empty.style.borderRadius="5px";
            empty.style.marginTop="10px";
            empty.style.marginBottom="10px";
            empty.style.fontFamily="Brandon Text","Arial","sans-serif";
            empty.style.backgroundColor="#FFCCCB"
            return;
        }
    })
    let flag=false;
    loginPage.forEach(function(el){
        if(el.password === obj.password){
            flag=true;
            localStorage.setItem("signin", JSON.stringify(el));
            window.location.href="index.html"
            return;
        }
        if(el.password!== obj.password){
            passWarn.innerText="Hmm, that doesn't look right. Try again?";
            passWarn.style.fontSize="16px";
            passWarn.style.color="red";
            passWarn.style.padding="10px";
            passWarn.style.borderRadius="5px";
            passWarn.style.marginTop="10px";
            passWarn.style.marginBottom="10px";
            passWarn.style.fontFamily="Brandon Text","Arial","sans-serif";
            passWarn.style.backgroundColor="#FFCCCB"
            return;
        }
    })
})
