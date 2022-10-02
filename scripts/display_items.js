import navbar from "../components/main_nav.js"
let navbarDiv=document.getElementById('main_nav976')
navbarDiv.innerHTML=navbar();

import footer from "../components/mainFooter.js"
let footerDiv=document.getElementById("footer09");
footerDiv.innerHTML=footer();

let btN=document.getElementById("addcart");
btN.addEventListener("click", function(){
    AddCart();
  })
//---------------product details append on html--------------------------------
let appendProductDetails = (data) => {
    if (!data) return;
  
    let img1 = document.getElementById("women-card-image-1");
    img1.src = data.img;
  
    let img2 = document.getElementById("women-card-image-2");
    img2.src = data.image2;
  
    let prod_name = document.getElementById("women-card-div-name");
    prod_name.innerText = data.heading;
  
    let prod_des = document.getElementById("women-card-div-des");
    prod_des.innerText = data.des;
  
    let prod_price = document.getElementById("women-card-div-price");
    // prod_price.innerHTML = data.price;
    // console.log(prod_price)
  };
  
  //-----------append function invoke-----------------------------------------------
  let product_details = JSON.parse(localStorage.getItem("women-product")) || null;
  appendProductDetails(product_details);
  
  
  //----------------add to cart function--------------------------------------------
  let arr =JSON.parse(localStorage.getItem("addcart")) || []
  const AddCart=()=>{
    console.log("rrrr");
    arr.push(product_details);
    localStorage.setItem("addcart", JSON.stringify(arr));
    let alert=document.getElementById("alert");
    alert.innerText="Added to Cart!";
    alert.style.color="green";
    alert.style.fontFamily="Sans-sarif";
    alert.style.fontSize="25px";
    alert.style.fontWeight="400";
    alert.style.textAlign="center";
    alert.style.border="1px solid #373737";


    // btn1.addEventListener("click", function ViewCart(){
    //   window.location.href = "Cart.html"
    // })
  
    // let btn2 = document.createElement("button");
    // btn2.innerText = "Continue Shopping";
    // btn2.addEventListener("click", function Continue(){
    //   window.location.href = "index.html"
    // })
  
    // cont.append(btn1, btn2)
  }
  // AddCart();
  function BuyNow(){
  
  }
  
  //-------------redirect to cart------------------------------------------------------
  // let redirect_to_cart = document.getElementById("wishlist");
  // redirect_to_cart.addEventListener("click", (e) => {
  //   window.location.href = "cart.html";
  // });