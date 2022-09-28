
//auto top-slider
let top_09slider = document.getElementById("top_09slider");

let images1 = ["./images/s1.png",
"./images/s2.png",
"./images/s3.png",
]

//after refreshing slideshow delay removing
let counter = 0;

let img = document.createElement("img");
img.src = images1[counter];
counter++;
top_09slider.append(img);
// console.log("counter :",counter)

setInterval(function (){

    //restart from beginning
    if(counter === images1.length)
    {
        counter =0;
    }

    //provide image to img and appending
    img.src = images1[counter];
    counter++;
    top_09slider.append(img);
    // console.log("counter :",counter)

}, 5000)

//**********************************************************************************************************/


//one to one top-slider
var bestsellersArr = [
    {
      Image:"https://n.nordstrommedia.com/id/sr3/4917e6ee-57e4-4a02-ac0a-d2a90696a330.jpeg?q=45&dpr=2&h=365.31&w=230",
      company: "Steve Madden",
      price: "$ 19.99 (77% OFF)",
      strikethrough: "$ 89.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/cf9e2eab-15b9-4067-a5d6-40d98f7e60e6.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Steve Madden",
        price: "59.99 - $ 79.99",
        strikethrough: "$ 99.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/f93aaab9-8169-426e-9876-ff22e921b683.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Steve Madden",
        price: "$ 59.97 (33% OFF)",
        strikethrough: "$ 89.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/c99732ac-7cb1-465b-b9f2-962a16825024.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Steve Madden",
        price: "$ 109.97 (35% OFF)",
        strikethrough: "$ 169.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/61f4e6d2-459a-4baf-b2a2-248fc15f0578.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Steve Madden",
        price: "$ 33.73 (62% OFF)",
        strikethrough: "$ 89.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/b78dfd49-d8f5-433b-a545-576fa3e340fe.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Steve Madden",
        price: "$ 129.97 (35% OFF)",
        strikethrough: "$ 189.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
       "https://n.nordstrommedia.com/id/sr3/26cd1df6-09d4-4d97-ba6b-8d00a54a9655.jpeg?q=45&dpr=2&h=365.31&w=230",
       company: "Steve Madden",
       price: "$ 34.97 (56% OFF)",
       strikethrough: "$ 79.95",
       star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
        Image:
          "https://n.nordstrommedia.com/id/sr3/6725b475-48a2-4549-9f28-fce05c7ff837.jpeg?q=45&dpr=2&h=365.31&w=230",
          company: "Steve Madden",
          price: "56.23 - $ 79.97",
          strikethrough: "$ 89.99",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/bad808ee-7861-4fef-a54f-01a9f699448b.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Steve Madden",
        price: "74.97 (72% OFF)",
        strikethrough: "$ 129.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/7cefd1b8-028c-4b83-817d-bce5ed4d493d.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Steve Madden",
        price: "$ 33.73 (62% OFF)",
        strikethrough: "$ 89.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/8d1a39d4-eb3a-453c-84d4-963717f3d2a1.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Steve Madden",
        price: "74.97 (72% OFF)",
        strikethrough: "$ 329.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
  
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/1045065a-cea8-4d77-b179-b5b43906a310.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Steve Madden",
        price: "74.97 (72% OFF)",
        strikethrough: "$ 129.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
        Image:
          "https://n.nordstrommedia.com/id/sr3/ec33e2f7-0a32-44ed-a0f9-b8690b77a4f3.jpeg?q=45&dpr=2&h=365.31&w=230",
          company: "Steve Madden",
          price: "24.97 (72% OFF)",
          strikethrough: "$ 89.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/8bb278ab-2a52-477b-84ec-07b254821429.jpeg?q=45&dpr=2&h=365.31&w=230",
          company: "Steve Madden",
          price: "89.97 (52% OFF)",
          strikethrough: "$ 100.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/0943e940-ab4a-4e62-a305-9b76f3bd8ccc.jpeg?q=45&dpr=2&h=365.31&w=230",
          company: "Steve Madden",
          price: "769.97 (58% OFF)",
          strikethrough: "$ 1009.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/7ccaa388-51e1-418d-b14d-0cf5668676cd.jpeg?q=45&dpr=2&h=365.31&w=230",
          company: "Steve Madden",
          price: "34.97 (72% OFF)",
          strikethrough: "$ 59.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/a80c93e9-d7a2-44af-bf76-e7898ad10fdc.jpeg?q=45&dpr=2&h=365.31&w=230",
          company: "Steve Madden",
          price: "64.97" ,
          strikethrough: "$ 99.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/96cf87b1-b917-4993-9c0c-67aebe36f348.jpeg?q=45&dpr=2&h=365.31&w=230",
          company: "Steve Madden",
          price: "74.97 (72% OFF)",
          strikethrough: "$ 529.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/61d894b2-10b8-441f-b4a1-0180501c66ac.jpeg?q=45&dpr=2&h=365.31&w=230",
          company: "Steve Madden",
          price: "79.97 (72% OFF)",
          strikethrough: "$ 429.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/143c3e85-bee5-4bab-89ca-ca58f775cbc5.jpeg?q=45&dpr=2&h=365.31&w=230",
          company: "Steve Madden",
          price: "64.97 (72% OFF)",
          strikethrough: "$ 89.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
  ];

let bestcont = document.getElementById("bestsellers_container");

function append(data, acontainer) {
  // acontainer.innerHTML = "";
  data.forEach((ele) => {
    let div1 = document.createElement("div");
  //   div1.style.backgroundColor = "pink";

    let image = document.createElement("img");
    image.src = ele.Image;

    let company = document.createElement("p");
    company.innerText = ele.company;
    company.className="company"

    let price = document.createElement("h2");
    price.innerText = ele.price;
    price.className="price"

    let strikethrough = document.createElement("p");
    strikethrough.innerText = ele.strikethrough;
    strikethrough.className="strikethrough"

    let star = document.createElement("img");
    star.src = ele.star_img;
    star.className="star09"

    div1.append(image, company, price, strikethrough,star);
    acontainer.append(div1);
  });
}

append(bestsellersArr, bestcont);

var left1 = document.getElementById("left1");
var right1 = document.getElementById("right1");
var bestdivs = document.querySelectorAll("#bestsellers_container>div");
var l = 0;
  right1.onclick = () => {
    l++;
    for (var i of bestdivs) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-550px";
      }
      if (l == 2) {
        i.style.left = "-1100px";
      }
    //   if (l == 3) {
    //     i.style.left = "-2220px";
    //   }
  
      if (l > 2) {
        l = 2;
      }
    }
  };
  
  left1.onclick = () => {
    l--;
    for (var i of bestdivs) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-550px";
      }
      if (l == 2) {
        i.style.left = "-1100px";
      }
  
      if (l < 0) {
        l = 0;
      }
    }
  };


  //**********************************************************************************************************/


  //auto mid-slider1
let mid_09slider = document.getElementById("mid_09slider");

let images2 = ["./images/E1.png",
"./images/E2.png",
"./images/E3.png",
"./images/E4.png",
]

//after refreshing slideshow delay removing
let count = 0;

let img1 = document.createElement("img");
img1.src = images2[count];
count++;
mid_09slider.append(img1);


setInterval(function (){

    //restart from beginning
    if(count === images2.length)
    {
        count =0;
    }

    //provide image to img and appending
    img1.src = images2[count];
    count++;
    mid_09slider.append(img1);
    

}, 5000)

//**********************************************************************************************************/


//one to one top-slider

let great_deals = document.getElementById("great_deals_container");

var great_deals_container = [
    {
      Image:"https://n.nordstrommedia.com/id/sr3/5359e67e-c97f-47bd-bbe9-a378128266d4.jpeg?q=45&dpr=2&h=365.31&w=230",
      company: "Free People",
      price: "$ 34.97 (48% off)",
      strikethrough: "$ 68.00",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/569e0a5f-2304-425f-a5fe-2b077d372246.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Free People",
        price: "$ 39.97 (48% off)",
        strikethrough: "$ 70.00",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/f4c8c06d-9352-4453-ad3b-9b9ce8450389.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Aslon",
        price: "$ 69.97 (30% OFF)",
        strikethrough: "$ 99.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/54b327cb-6295-40cb-83f7-3724dc01adcb.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Lacome",
        price: "$ 29.00",
        strikethrough: "",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/572019d0-d413-4d86-a607-58b3b73e1754.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Laura Mercier",
        price: "$ 14.73 (50% OFF)",
        strikethrough: "$ 29.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/bc133e47-37f2-4822-8edc-136273ae1f80.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Tucker + Tate",
        price: "$ 12.97 (31% OFF)",
        strikethrough: "$ 19.00",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
       "https://n.nordstrommedia.com/id/sr3/23fbb755-55ab-423d-ad3d-88e1b0c83b7e.jpeg?q=45&dpr=2&h=365.31&w=230",
       company: "Hunter",
       price: "$ 99.97 (33% OFF)",
       strikethrough: "$ 150.00",
       star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
        Image:
          "https://n.nordstrommedia.com/id/sr3/b536b364-ce6d-443e-ae94-7dc715f7f350.jpeg?q=45&dpr=2&h=365.31&w=230",
          company: "Marc Fisher LTD",
          price: "56.23 - $ 79.97",
          strikethrough: "$ 89.99",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/83bc2d64-7132-4051-ab54-fe0b97939488.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Sam Edelman",
        price: "74.97 (31% OFF)",
        strikethrough: "$ 110.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/00135c24-82f2-449d-827f-f90c5f2a5ccc.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Clinique",
        price: "$ 23.00",
        strikethrough: "",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/00135c24-82f2-449d-827f-f90c5f2a5ccc.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Lancome",
        price: "22.97 (25% OFF)",
        strikethrough: "$ 31.00",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
];


function append1(data, acontainer) {
  // acontainer.innerHTML = "";
  data.forEach((ele) => {
    let div1 = document.createElement("div");
  //   div1.style.backgroundColor = "pink";

    let image = document.createElement("img");
    image.src = ele.Image;

    let company = document.createElement("p");
    company.innerText = ele.company;
    company.className="company"

    let price = document.createElement("h2");
    price.innerText = ele.price;
    price.className="price"

    let strikethrough = document.createElement("p");
    strikethrough.innerText = ele.strikethrough;
    strikethrough.className="strikethrough";

    let star = document.createElement("img");
    star.src = ele.star_img;
    star.className="star09"

    div1.append(image, company, price, strikethrough,star);
    acontainer.append(div1);
  });
}

append1(great_deals_container, great_deals);

var left2 = document.getElementById("left2");
var right2 = document.getElementById("right2");
var greatdivs = document.querySelectorAll("#great_deals_container>div");
var l1 = 0;
  right2.onclick = () => {
    l1++;
    for (var i of greatdivs) {
      if (l1 == 0) {
        i.style.left = "0px";
      }
      if (l1 == 1) {
        i.style.left = "-550px";
      }
      if (l1 == 2) {
        i.style.left = "-1100px";
      }
    //   if (l1 == 3) {
    //     i.style.left = "-2220px";
    //   }
  
      if (l1 > 2) {
        l1 = 2;
      }
    }
  };
  
  left2.onclick = () => {
    l1--;
    for (var i of greatdivs) {
      if (l1 == 0) {
        i.style.left = "0px";
      }
      if (l1 == 1) {
        i.style.left = "-550px";
      }
      if (l1 == 2) {
        i.style.left = "-1100px";
      }
  
      if (l1 < 0) {
        l1 = 0;
      }
    }
  };


  //**********************************************************************************************************/

  //auto mid-slider1
  let fam_09slider = document.getElementById("fam_09slider");

  let images3 = [
  "./images/F1.png",
  "./images/F2.png",
  ]
  
  //after refreshing slideshow delay removing
  let count1 = 0;
  
  let img2 = document.createElement("img");
  img2.src = images3[count1];
  count1++;
  fam_09slider.append(img2);
  
  
  setInterval(function (){
  
      //restart from beginning
      if(count1 === images3.length)
      {
        count1 =0;
      }
  
      //provide image to img and appending
      img2.src = images3[count1];
      count1++;
      fam_09slider.append(img2);
      
  
  }, 5000)

   //**********************************************************************************************************/


   let great_deals_hover = document.getElementById("great_deals_container");
   great_deals_hover.addEventListener("")