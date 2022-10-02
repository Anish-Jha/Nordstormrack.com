import navbar from "../components/main_nav.js"
let navbarDiv=document.getElementById('main_nav976')
navbarDiv.innerHTML=navbar();

import footer from "../components/mainFooter.js"
let footerDiv=document.getElementById("footer09");
footerDiv.innerHTML=footer();

let form=document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();

let obj={
    mobile:form.mobile.value,
}
if(obj.mobile==""){
    mob_num.innerText="Enter the number without special characters";
    mob_num.style.fontSize="13px";
    mob_num.style.color="red";
    mob_num.style.marginTop="-10px";
    mob_num.style.fontFamily="Brandon Text","Arial","sans-serif";
    mob_num.style.lineHeight="18.5px"; 
    return;
}
else if(obj.mobile!==""){
    window.location.href="index.html";
}
})