
//---------------product details append on html--------------------------------
let appendProductDetails = (data) => {
    if (!data) return;
  
    let img1 = document.getElementById("women-card-image-1");
    img1.src = data.image1;
  
    let img2 = document.getElementById("women-card-image-2");
    img2.src = data.image2;
  
    let prod_name = document.getElementById("women-card-div-name");
    prod_name.innerText = data.name;
  
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
  let arr =JSON.parse(localStorage.getItem("cartItem")) || []
  function AddCart(){
    arr.push(product_details)
    localStorage.setItem("cartItem", JSON.stringify(arr));
    alert("Added to Cart")
  
    btn1.addEventListener("click", function ViewCart(){
      window.location.href = "Cart.html"
    })
  
    let btn2 = document.createElement("button");
    btn2.innerText = "Continue Shopping";
    btn2.addEventListener("click", function Continue(){
      window.location.href = "index.html"
    })
  
    cont.append(btn1, btn2)
  }
  function BuyNow(){
  
  }
  
  //-------------redirect to cart------------------------------------------------------
  let redirect_to_cart = document.getElementById("wishlist");
  redirect_to_cart.addEventListener("click", (e) => {
    window.location.href = "cart.html";
  });