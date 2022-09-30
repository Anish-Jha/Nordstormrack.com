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