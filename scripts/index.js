
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

//for hoving each div to show quick view div

  //  let great_deals_hover = document.getElementById("great_deals_container");
  //  great_deals_hover.addEventListener("")


//**********************************************************************************************************/

//one to one filter-Women-slider

let filter_Women_deals = document.getElementById("filter_container");
var filterWomenArr = [
  {
    Image:"https://n.nordstrommedia.com/id/db1de05b-ccba-4e78-bf33-5560f9e675bc.jpeg?h=429&w=279",
    company: "Women's Sweaters",
    price: "",
    strikethrough: "",
    star_img:"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png"
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/6cd97acb-c38f-4386-94a4-d6e31d7cc5a0.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "RDI",
      price: "$24.97 (70% off)",      
      strikethrough: "$ 84.95 - $85.00",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/6bb77933-11a3-4b73-a01a-5febcfc9e523.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "T Tahari",
      price: "$ 19.97 (65% off) ",
      strikethrough: "$ 58.00",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/e8500248-c740-49c2-8af6-e0d8dbe4804d.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "ASTR the Label",
      price: "$ 11.97 (84% off)",
      strikethrough: "$ 79.00",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/ca7c8604-058b-46c3-bb12-f9b2bf19b29c.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "New!",
      price: "Abound",
      strikethrough: "$ 24.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/1963375b-9c54-47c9-beba-b285b3576490.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "T Tahari",
      price: "$ 29.97 (69% OFF)",
      strikethrough: "$ 98.00",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
     "https://n.nordstrommedia.com/id/sr3/2cfd535d-fb05-41eb-a1d8-aa147e70f307.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
     company: "T Tahari",
     price: "$ 19.97 (70% OFF)",
     strikethrough: "$ 68.00",
     star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
      Image:
        "https://n.nordstrommedia.com/id/sr3/f39497a0-0d22-438c-84b4-4ff4deabb0b5.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Sanctuary",
        price: "56.23 - $ 79.97",
        strikethrough: "$ 189.99",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/6777fe7a-2cc7-4aec-bc66-7c7d6fa41930.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "RDI",
      price: "74.97 (72% OFF)",
      strikethrough: "$ 129.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/c30bf767-7a08-44ee-ae76-f3b9dbbf3761.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "Thread & Supply",
      price: "$ 33.73 (62% OFF)",
      strikethrough: "$ 89.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/84c73aa8-bb39-4280-b6d8-0b5d4202f05e.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "Joseph A",
      price: "74.97 (72% OFF)",
      strikethrough: "$ 329.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },

  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/f8712d0f-a0b2-4c0a-bf58-80ab499ca16f.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "T Tahari",
      price: "74.97 (72% OFF)",
      strikethrough: "$ 129.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
      Image:
        "https://n.nordstrommedia.com/id/sr3/05161a60-d4ed-4c24-8ce3-e9d33c46cefa.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Z by Zella",
        price: "24.97 (72% OFF)",
        strikethrough: "$ 89.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/fd926e28-5087-419a-bb24-169885e43b91.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "CYRUS",
        price: "89.97 (52% OFF)",
        strikethrough: "$ 100.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/9d83bd96-fb76-4e1f-8402-d2f45ec6c391.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Magaschoni",
        price: "769.97 (58% OFF)",
        strikethrough: "$ 1009.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/7649eb26-5df1-49db-b422-ad5105068c11.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "T Tahari",
        price: "34.97 (72% OFF)",
        strikethrough: "$ 59.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/53c580e8-5a6d-45f2-8dd5-24ba7d0eb3de.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Sweet Romeo",
        price: "64.97" ,
        strikethrough: "$ 99.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/0c414393-913f-4465-81d0-989f97dc53e1.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "T Tahari",
        price: "74.97 (72% OFF)",
        strikethrough: "$ 529.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/36ea5559-a331-47d5-8f56-efdd72564601.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "1.STATE",
        price: "$29.97 (62% off)",
        strikethrough: "$79.00",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/6c105edc-7b9e-4418-8a55-784dc2cc4db3.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Joseph A",
        price: "$39.99Current Price $39.99",
        strikethrough: "",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
];

//one to one filter-Mens-slider
let filter_Men_deals = document.getElementById("filter_container");
var filterMenArr = [
  {
    Image:"https://n.nordstrommedia.com/id/175f5ede-a0c6-47fe-a4e5-035b8a40e9c8.jpeg?h=429&w=279",
    company: "Men's Sweaters",
    price: "",
    strikethrough: "",
    star_img:"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png"
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/4a689222-8084-43da-9419-241e984cc245.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "Tahari",
      price: "$24.97 (70% off)",      
      strikethrough: "$ 84.95 - $85.00",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/d9b92fca-aaf0-4126-aeb7-f1ddf224e883.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "14th & Union",
      price: "$ 19.97 (65% off) ",
      strikethrough: "$ 58.00",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/965483ee-88ce-476c-94bd-69a8967a545d.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "14th & Union",
      price: "$ 11.97 (84% off)",
      strikethrough: "$ 79.00",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/8cd7b81b-300e-4ba3-9c45-c9f9b014694a.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "Billionaire Boys Club",
      price: "$ 24.95 ",
      strikethrough: "(Up to 59% off select items)",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/a5ddce59-2e25-411e-b74c-810ee49cdb97.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "Buffalo Jeans",
      price: "$ 29.97 (69% OFF)",
      strikethrough: "$ 98.00",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
     "https://n.nordstrommedia.com/id/sr3/b76910e7-2705-47dd-90cf-5724dd552ac5.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
     company: "Original Penguin",
     price: "$ 19.97 (70% OFF)",
     strikethrough: "$ 68.00",
     star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
      Image:
        "https://n.nordstrommedia.com/id/sr3/ec40917e-4608-46a5-906a-cbcef4a9536a.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Ben Sherman",
        price: "56.23 - $ 79.97",
        strikethrough: "$ 189.99",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/cc7a1882-9ec9-4606-899f-f5646dc4aec1.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "Original Penguin",
      price: "74.97 (72% OFF)",
      strikethrough: "$ 129.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/29fbc271-781f-43cc-b7ec-9a4b33545e53.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "Nordstrom",
      price: "$ 33.73 (62% OFF)",
      strikethrough: "$ 89.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/d11a392d-ce5d-48f9-97e8-ca7f23de56ae.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "Weatherproof®",
      price: "74.97 (72% OFF)",
      strikethrough: "$ 329.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },

  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/f8712d0f-a0b2-4c0a-bf58-80ab499ca16f.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "Trunks Surf & Swim Co.",
      price: "74.97 (72% OFF)",
      strikethrough: "$ 129.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
      Image:
        "https://n.nordstrommedia.com/id/sr3/e1f6136e-8c6b-45db-a342-1899a9d269d9.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "PacSun",
        price: "24.97 (72% OFF)",
        strikethrough: "$ 89.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/c57fe133-2188-4d40-b11a-77700d5a1c48.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Weatherproof®",
        price: "89.97 (52% OFF)",
        strikethrough: "$ 100.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/a50a1e1c-e832-4d33-b16d-faf5cf4625ca.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Original Penguin",
        price: "769.97 (58% OFF)",
        strikethrough: "$ 1009.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/676de4a2-d081-4488-b58b-fe3b137241b5.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Buffalo Jeans",
        price: "34.97 (72% OFF)",
        strikethrough: "$ 59.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/708b861e-930e-4b19-97c9-ca0a34d41b20.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Weatherproof®",
        price: "64.97" ,
        strikethrough: "$ 99.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/7be14fbd-39fe-46b0-92aa-256de6a41090.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Weatherproof®",
        price: "74.97 (72% OFF)",
        strikethrough: "$ 529.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/d7073225-a266-4358-9580-63b0c39ca995.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Buffalo Jeans",
        price: "$29.97 (62% off)",
        strikethrough: "$79.00",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/9d7ec6ef-e178-4191-b960-cf02e319986c.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Weatherproof®",
        price: "$39.99Current Price $39.99",
        strikethrough: "",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
];

//one to one filter-Kids-slider
let filter_Kids_deals = document.getElementById("filter_container");
var filterKidsArr = [
  {
    Image:"https://n.nordstrommedia.com/id/3e31cf4c-311e-4ebc-8f68-448782319710.jpeg?h=429&w=279",
    company: "Kid's Sweaters",
    price: "",
    strikethrough: "",
    star_img:"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png"
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/52e62fca-5c43-4074-b1b4-44701c4213f1.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "Harper Canyon",
      price: "$22.97",      
      strikethrough: "",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/52d16205-de15-4c2b-b9b0-7be5ef4e90f4.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "Harper Canyon",
      price: "$ $22.97 ",
      strikethrough: "",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/433c5569-e4fb-4f81-a5a0-f4a25b803ff6.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "Design History",
      price: "$ 19.97 (35% off)",
      strikethrough: "$ 31.00",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/36db58ba-2601-48e2-b6e3-221249c94bbb.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "Design History",
      price: "$ 24.95 ",
      strikethrough: "(Up to 59% off select items)",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/34aac352-a158-4aa9-9557-d63754b642a0.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "Peek Aren't You Curious",
      price: "$ 29.97 (69% OFF)",
      strikethrough: "$ 98.00",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
     "https://n.nordstrommedia.com/id/sr3/4b5278dd-6b7d-4eaf-8e83-4ef87457fd81.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
     company: "Habitual Kids",
     price: "$ 19.97 (70% OFF)",
     strikethrough: "$ 68.00",
     star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
      Image:
        "https://n.nordstrommedia.com/id/sr3/fea87d09-cd17-42bf-9d4e-60529a62f200.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Design History",
        price: "56.23 - $ 79.97",
        strikethrough: "$ 189.99",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/6fc90cb1-5b7b-4b60-9b0f-3dc209a00758.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "Design History",
      price: "74.97 (72% OFF)",
      strikethrough: "$ 129.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/65ba2dbb-fb19-48fc-9c99-8be8c41355a9.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "Melrose and Market",
      price: "$ 33.73 (62% OFF)",
      strikethrough: "$ 89.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/f772ae63-d9b2-4ecd-a459-f036456da04c.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "Peek Aren't You Curious",
      price: "74.97 (72% OFF)",
      strikethrough: "$ 329.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },

  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/e4ff4443-2750-4f73-8eea-305cd983d0af.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "Melrose and Market",
      price: "74.97 (72% OFF)",
      strikethrough: "$ 129.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
      Image:
        "https://n.nordstrommedia.com/id/sr3/8b5ff7b7-15d2-44b3-a680-0645b2b4e649.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Treasure & Bond",
        price: "24.97 (72% OFF)",
        strikethrough: "$ 89.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/7a9a519e-c805-4149-bc7b-0afba5fb451d.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Melrose and Market",
        price: "89.97 (52% OFF)",
        strikethrough: "$ 100.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/f04457c7-0e93-469c-8851-7db075a6ecb2.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Design History",
        price: "769.97 (58% OFF)",
        strikethrough: "$ 1009.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/cf2f4a38-5227-4c9c-9071-e5248a979691.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Billionaire Boys Club",
        price: "34.97 (72% OFF)",
        strikethrough: "$ 59.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/472bcace-8788-4773-9786-7a54db402cf6.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Freshman",
        price: "64.97" ,
        strikethrough: "$ 99.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/632efce6-42ca-4baf-b26f-b143f98cc464.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Sovereign Code",
        price: "74.97 (72% OFF)",
        strikethrough: "$ 529.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/4affbe15-2fa1-4f0c-a3c9-551a67a403cc.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Design History",
        price: "$29.97 (62% off)",
        strikethrough: "$79.00",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/c5d111da-baf1-43dc-bfad-00a2a59c447d.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        company: "Billionaire Boys Club",
        price: "$39.99Current Price $39.99",
        strikethrough: "",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
];

//**********************************************************************************************************/

//on-click event for filtering

let filter1Womens = document.getElementById("fil1");
let filter1Mens = document.getElementById("fil2");
let filter1Kids = document.getElementById("fil3");

// onclick event for womens filters

let line2 = document.querySelector("#fil1>.fil_lin");
line2.style.display = "block";

let line1_bold = document.querySelector("#fil1>p");
line1_bold.style.fontWeight = "1000";
line1_bold.style.color = "black";

filter1Womens.onclick = () =>{

  //for making bold
  let line1_bold = document.querySelector("#fil1>p");
  line1_bold.style.fontWeight = "1000";
  line1_bold.style.color = "black";

  let line2_bold = document.querySelector("#fil2>p");
  line2_bold.style.fontWeight = "";
  line2_bold.style.color = "#393939";

  let line3_bold = document.querySelector("#fil3>p");
  line3_bold.style.fontWeight = "";
  line3_bold.style.color = "#393939";

  //for showing line
  let line2 = document.querySelector("#fil2>.fil_lin");
  line2.style.display = "none";

  let line3 = document.querySelector("#fil3>.fil_lin");
  line3.style.display = "none";
  
  append2(filterWomenArr, filter_Women_deals);

  let line1 = document.querySelector("#fil1>.fil_lin");
  line1.style.display = "block";

  var left3 = document.getElementById("left3");
  var right3 = document.getElementById("right3");
  var filterdivs = document.querySelectorAll("#filter_container>div");
  var l2 = 0;
  right3.onclick = () => {
    l2++;
    for (var i of filterdivs) {
      if (l2 == 0) {
        i.style.left = "0px";
      }
      if (l2 == 1) {
        i.style.left = "-550px";
      }
      if (l2 == 2) {
        i.style.left = "-1100px";
      }
    //   if (l2 == 3) {
    //     i.style.left = "-2220px";
    //   }
  
      if (l2 > 2) {
        l2 = 2;
      }
    }
  };
  
  left3.onclick = () => {
    l2--;
    for (var i of filterdivs) {
      if (l2 == 0) {
        i.style.left = "0px";
      }
      if (l2 == 1) {
        i.style.left = "-550px";
      }
      if (l2 == 2) {
        i.style.left = "-1100px";
      }
  
      if (l2 < 0) {
        l2 = 0;
      }
    }
  };
}

//**********************************************************************************************************/

// onclick event for Mens filters
filter1Mens.onclick = () =>{

   //for making bold
   let line2_bold = document.querySelector("#fil2>p");
   line2_bold.style.fontWeight = "1000";
   line2_bold.style.color = "black";
 
   let line1_bold = document.querySelector("#fil1>p");
   line1_bold.style.fontWeight = "";
   line1_bold.style.color = "#393939";
 
   let line3_bold = document.querySelector("#fil3>p");
   line3_bold.style.fontWeight = "";
   line3_bold.style.color = "#393939";
 
   //for showing line
  let line2 = document.querySelector("#fil1>.fil_lin");
  line2.style.display = "none";

  let line3 = document.querySelector("#fil3>.fil_lin");
  line3.style.display = "none";

  append2(filterMenArr, filter_Men_deals);

  let line1 = document.querySelector("#fil2>.fil_lin");
  line1.style.display = "block";

  var left3 = document.getElementById("left3");
  var right3 = document.getElementById("right3");
  var filterdivs = document.querySelectorAll("#filter_container>div");
  var l2 = 0;
  right3.onclick = () => {
    l2++;
    for (var i of filterdivs) {
      if (l2 == 0) {
        i.style.left = "0px";
      }
      if (l2 == 1) {
        i.style.left = "-550px";
      }
      if (l2 == 2) {
        i.style.left = "-1100px";
      }
    //   if (l2 == 3) {
    //     i.style.left = "-2220px";
    //   }
  
      if (l2 > 2) {
        l2 = 2;
      }
    }
  };
  
  left3.onclick = () => {
    l2--;
    for (var i of filterdivs) {
      if (l2 == 0) {
        i.style.left = "0px";
      }
      if (l2 == 1) {
        i.style.left = "-550px";
      }
      if (l2 == 2) {
        i.style.left = "-1100px";
      }
  
      if (l2 < 0) {
        l2 = 0;
      }
    }
  };
}

//**********************************************************************************************************/

// onclick event for Kids filters
filter1Kids.onclick = () =>{

  //for making bold
  let line3_bold = document.querySelector("#fil3>p");
  line3_bold.style.fontWeight = "1000";
  line3_bold.style.color = "black";

  let line2_bold = document.querySelector("#fil2>p");
  line2_bold.style.fontWeight = "";
  line2_bold.style.color = "#393939";

  let line1_bold = document.querySelector("#fil1>p");
  line1_bold.style.fontWeight = "";
  line1_bold.style.color = "#393939";

  

  //for showing line
  let line2 = document.querySelector("#fil1>.fil_lin");
  line2.style.display = "none";

  let line3 = document.querySelector("#fil2>.fil_lin");
  line3.style.display = "none";

  append2(filterKidsArr, filter_Kids_deals);

  let line1 = document.querySelector("#fil3>.fil_lin");
  line1.style.display = "block";

  var left3 = document.getElementById("left3");
  var right3 = document.getElementById("right3");
  var filterdivs = document.querySelectorAll("#filter_container>div");
  var l2 = 0;
  right3.onclick = () => {
    l2++;
    for (var i of filterdivs) {
      if (l2 == 0) {
        i.style.left = "0px";
      }
      if (l2 == 1) {
        i.style.left = "-550px";
      }
      if (l2 == 2) {
        i.style.left = "-1100px";
      }
    //   if (l2 == 3) {
    //     i.style.left = "-2220px";
    //   }
  
      if (l2 > 2) {
        l2 = 2;
      }
    }
  };
  
  left3.onclick = () => {
    l2--;
    for (var i of filterdivs) {
      if (l2 == 0) {
        i.style.left = "0px";
      }
      if (l2 == 1) {
        i.style.left = "-550px";
      }
      if (l2 == 2) {
        i.style.left = "-1100px";
      }
  
      if (l2 < 0) {
        l2 = 0;
      }
    }
  };
}

//**********************************************************************************************************/

function append2(data, acontainer) {
  acontainer.innerHTML = "";
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

//by default womens filter
append2(filterWomenArr, filter_Women_deals);

//**********************************************************************************************************/


//Best selling items

let bestSell = document.getElementById("best_selling_container")
var bestsellingArr = [
  {
    Image:"https://n.nordstrommedia.com/id/sr3/6f1fde5b-e59f-448a-aa8a-5f0b7940e857.jpeg?q=45&dpr=2&h=365.31&w=230",
    dots:"./images/c2.png",
    company: "UGG®",
    price: "$69.97 (30% off)",
    strikethrough: "$100.00",
    star_img:"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png"
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/8d1f81c0-49c8-4a8d-a491-3ee516a981a2.jpeg?q=45&dpr=2&h=365.31&w=230",
      dots:"./images/c1.png",
      company: "Madewell",
      price: "$12.73 - $ 16.97 (Up to 31% off select items)",      
      strikethrough: "$18.50",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/4d90446b-4e28-490b-ba95-e498a130fd80.jpeg?q=45&dpr=2&h=365.31&w=230",
      
      dots:"./images/c4.png",
      company: "Harper Canyon",
      price: "$ $22.97 (Extra 60% 0ff) ",
      strikethrough: "",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/b3db3ab7-a24a-4a14-89da-34f28ba49f01.jpeg?q=45&dpr=2&h=365.31&w=230",
      dots:"./images/c3.png",
      company: "Design History",
      price: "$ 19.97 (35% off)",
      strikethrough: "$ 31.00",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/f62f2dcb-96b9-4648-a0ac-6a6250bf776c.jpeg?q=45&dpr=2&h=365.31&w=230",
      dots:"./images/c4.png",
      company: "Design History",
      price: "$ 24.95 (Extra 60% 0ff)",
      strikethrough: "(Up to 59% off select items)",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/8ae0a64c-fa54-4710-9084-75dae1c0a3f7.jpeg?q=45&dpr=2&h=365.31&w=230",
      dots:"./images/c5.png",
      company: "Peek Aren't You Curious",
      price: "$ 29.97 (69% OFF)",
      strikethrough: "$ 98.00",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
     "https://n.nordstrommedia.com/id/sr3/8c76d9ed-b2ba-49a2-96d4-87d821309413.jpeg?q=45&dpr=2&h=365.31&w=230",
     dots:"./images/c8.png",
     company: "Habitual Fisher LTD",
     price: "$ 19.97 (70% OFF)",
     strikethrough: "$ 68.00",
     star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
      Image:
        "https://n.nordstrommedia.com/id/sr3/1160db62-41ef-45f2-a6bc-34021b497446.jpeg?q=45&dpr=2&h=365.31&w=230",
        dots:"./images/c6.png",
        company: "Katy Perry",
        price: "56.23 - $ 79.97",
        strikethrough: "$ 189.99",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/738b93eb-cf72-4316-8d11-d4b8cd07bca1.jpeg?q=45&dpr=2&h=365.31&w=230",
      dots:"./images/c7.png",
      company: "Kenneth Cole New York",
      price: "74.97 (72% OFF)",
      strikethrough: "$ 129.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/02fd677e-46c9-4da7-b4cd-49f4fd8aa27d.jpeg?q=45&dpr=2&h=365.31&w=230",
      dots:"./images/c8.png",
      company: "Melrose and Market",
      price: "$ 33.73 (62% OFF)",
      strikethrough: "$ 89.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/d58ece58-c8fd-4d2f-afe1-283046d10c07.jpeg?q=45&dpr=2&h=365.31&w=230",
      dots:"./images/c1.png",
      company: "Lovestitch",
      price: "74.97 (72% OFF)",
      strikethrough: "$ 329.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },

  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/1dfa97ee-e329-41ba-9a66-9c958ec1b260.jpeg?q=45&dpr=2&h=365.31&w=230",
      dots:"./images/c2.png",
      company: "Melrose and Market",
      price: "74.97 (72% OFF)",
      strikethrough: "$ 129.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
      Image:
        "https://n.nordstrommedia.com/id/sr3/abe0f760-0902-46f4-a70f-8565626adb7a.jpeg?q=45&dpr=2&h=365.31&w=230",
        dots:"./images/c6.png",
        company: "Treasure & Bond",
        price: "24.97 (72% OFF)",
        strikethrough: "$ 89.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/271be165-8deb-4dc0-bc57-34ba30164e29.jpeg?q=45&dpr=2&h=365.31&w=230",
        dots:"./images/c5.png",
        company: "Lucky Brand",
        price: "89.97 (52% OFF)",
        strikethrough: "$ 100.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/5d8f9956-d7e9-4045-8693-6807cec4199b.jpeg?q=45&dpr=2&h=365.31&w=230",
        dots:"./images/c3.png",
        company: "RDI",
        price: "769.97 (58% OFF)",
        strikethrough: "$ 1009.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/77559d7e-f15d-4560-b96a-7ca319190899.jpeg?q=45&dpr=2&h=365.31&w=230",
        dots:"./images/c1.png",
        company: "Billionaire Club",
        price: "34.97 (72% OFF)",
        strikethrough: "$ 59.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/009f34c5-7197-4277-b2d8-7f419a6bbb0a.jpeg?q=45&dpr=2&h=365.31&w=230",
        dots:"./images/c2.png",
        company: "KUT feom the KLOTH",
        price: "64.97" ,
        strikethrough: "$ 99.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/6d9873ba-b93d-4e47-8007-670053c7b3f3.jpeg?q=45&dpr=2&h=365.31&w=230",
        dots:"./images/c6.png",
        company: "Sovereign Code",
        price: "74.97 (72% OFF)",
        strikethrough: "$ 529.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/a6a3d8a6-d432-4e94-8204-516ccd8b1104.jpeg?q=45&dpr=2&h=365.31&w=230",
        dots:"./images/c4.png",
        company: "Melrose and Market",
        price: "$29.97 (62% off)",
        strikethrough: "$79.00",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/88c93d15-3cf7-4b9b-8ccc-ec0c2d20c065.jpeg?q=45&dpr=2&h=365.31&w=230",
        
        dots:"./images/c7.png",
        company: "Billionaire Boys Club",
        price: "$39.99Current Price $39.99",
        strikethrough: "",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
];

function appendbest(data, acontainer) {
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

    let dots = document.createElement("img");
    dots.src = ele.dots;
    dots.className="dots09"

    div1.append(image,dots, company, price, strikethrough,star);
    acontainer.append(div1);
  });
}

appendbest(bestsellingArr, bestSell);

var left4 = document.getElementById("left4");
var right4 = document.getElementById("right4");
var best_divs = document.querySelectorAll("#best_selling_container>div");
var l_b = 0;
  right4.onclick = () => {
    l_b++;
    for (var i of best_divs) {
      if (l_b == 0) {
        i.style.left = "0px";
      }
      if (l_b == 1) {
        i.style.left = "-550px";
      }
      if (l_b == 2) {
        i.style.left = "-1100px";
      }
    //   if (l_b == 3) {
    //     i.style.left = "-2220px";
    //   }
  
      if (l_b > 2) {
        l_b = 2;
      }
    }
  };
  
  left4.onclick = () => {
    l_b--;
    for (var i of best_divs) {
      if (l_b == 0) {
        i.style.left = "0px";
      }
      if (l_b == 1) {
        i.style.left = "-550px";
      }
      if (l_b == 2) {
        i.style.left = "-1100px";
      }
  
      if (l_b < 0) {
        l_b = 0;
      }
    }
  };

  //**********************************************************************************************************/

  //your look slider

let lookslider = document.getElementById("Racklook")
var yourlookArr = [
    {
      Image:"https://cdn.dashhudson.com/media/640/1635798101.057760741882.jpeg",
    },
    {
      Image:"https://cdn.dashhudson.com/media/640/1628598956.37983440346.jpeg",
    },
    {
      Image:"https://cdn.dashhudson.com/media/640/1625812071.39856985243.jpeg",
    },
    {
      Image:"https://cdn.dashhudson.com/media/640/1626312391.206982943516.jpeg",
    },
    {
      Image:"https://cdn.dashhudson.com/media/640/1619542695.85628681795.jpeg",
    },
    {
      Image:"https://cdn.dashhudson.com/media/640/1635024938.355172968493.jpeg",
    },
    {
      Image:"https://cdn.dashhudson.com/media/640/1631993473.42439544038.jpeg",
    },
    {
      Image:"https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjQ0OTU2MDExLjA1NzIyOTM2NTE1Ny5qcGVn.jpg?w=640&h=640&fit=cover",
    },
    {
      Image:"https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjQ1MzA3NTM4LjQzMjE1NzU1MTU5OC5qcGVn.jpg?w=640&h=640&fit=cover",
    },
    {
      Image:"https://dashhudson-static.s3.amazonaws.com/media/video_frames/1645552575_161984.jpg",
    },
    {
      Image:"https://dashhudson-static.s3.amazonaws.com/media/video_frames/1646075206_149858.jpg",
    },
    {
      Image:"https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjYxNjI0NTgzLjc3MDQzMTU3MTQ5Ni5qcGVn.jpg?w=400&h=400&fit=cover",
    },
    {
      Image:"https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjYyODMzODEzLjM0MTcyOTkxNjk2LmpwZWc=.jpg?w=400&h=400&fit=cover",
    },
    {
      Image:"https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjYyNjgyNzczLjc0MjMxNDgxODUxNy5qcGVn.jpg?w=400&h=400&fit=cover",
    },
    {
      Image:"https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjYwNTk1NDYzLjQ3Mzk4ODY0NTM4LmpwZWc=.jpg?w=400&h=400&fit=cover",
    },
    {
      Image:"https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU5MTI4NTc5LjgyNTI4ODU0NDYuanBlZw==.jpg?w=400&h=400&fit=cover",
    },
    {
      Image:"https://dashhudson-static.s3.amazonaws.com/media/video_frames/1655235004_147787.jpg",
    },
    {
      Image:"https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU0MzczNDY0LjUyODE5MTYxNzc4LmpwZWc=.jpg?w=640&h=640&fit=cover",
    },
    {
      Image:"https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjUyMjE2NTk3LjEyNDQ1ODU5ODk4LmpwZWc=.jpg?w=640&h=640&fit=cover",
    },
    {
      Image:"https://dashhudson-static.s3.amazonaws.com/media/video_frames/1647972588_156888.jpg",
    },
    {
      Image:"https://dashhudson-static.s3.amazonaws.com/media/video_frames/1648226651_192192.jpg",
    },
    {
      Image:"https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjQ3Nzk2NTA4LjI2NDMxNTE4MzE5MS5qcGVn.jpg?w=640&h=640&fit=cover",
    },
    {
      Image:"https://dashhudson-static.s3.amazonaws.com/media/video_frames/1656647086_102637.jpg",
    },
    {
      Image:"https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU4NTIwNjE2Ljc3Njk5ODM2MDUzMi5qcGVn.jpg?w=640&h=640&fit=cover",
    },
    {
      Image:"https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU4Nzc2ODEyLjIxMjIyMTk2ODY0Ny5qcGVn.jpg?w=400&h=400&fit=cover",
    },
    {
      Image:"https://dashhudson-static.s3.amazonaws.com/media/video_frames/1656462636_118613.jpg",
    },
    {
      Image:"https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU4OTQ5MzgzLjgzMjk2NzU2MDU1Mi5qcGVn.jpg?w=640&h=640&fit=cover",
    },
    {
      Image:"https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU4MzQ0MDUxLjM3Mjg3NDM2NzQ0Mi5qcGVn.jpg?w=400&h=400&fit=cover",
    } 
]

function appendLook(data, acontainer) {
  // acontainer.innerHTML = "";
  data.forEach((ele) => {
    let div1 = document.createElement("div");
  //   div1.style.backgroundColor = "pink";
    div1.className = "fade_image"

    let image = document.createElement("img");
    image.src = ele.Image;
    image.className = "div_img_slide";

    div1.append(image);
    acontainer.append(div1);
  });
}

appendLook(yourlookArr, lookslider);

var left5 = document.getElementById("left5");
var right5 = document.getElementById("right5");
var look_divs = document.querySelectorAll("#Racklook>div");
var l_l = 0;
  right5.onclick = () => {
    l_l++;
    for (var i of look_divs) {
      if (l_l == 0) {
        i.style.left = "0px";
      }
      if (l_l == 1) {
        i.style.left = "-550px";
      }
      if (l_l == 2) {
        i.style.left = "-1100px";
      }
    //   if (l_l == 3) {
    //     i.style.left = "-2220px";
    //   }
  
      if (l_l > 2) {
        l_l = 2;
      }
    }
  };
  
  left5.onclick = () => {
    l_l--;
    for (var i of look_divs) {
      if (l_l == 0) {
        i.style.left = "0px";
      }
      if (l_l == 1) {
        i.style.left = "-550px";
      }
      if (l_l == 2) {
        i.style.left = "-1100px";
      }
  
      if (l_l < 0) {
        l_l = 0;
      }
    }
  };

  //**********************************************************************************************************/

  //recently viewed

  let recently = [
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
      "https://n.nordstrommedia.com/id/sr3/4a689222-8084-43da-9419-241e984cc245.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "Tahari",
      price: "$24.97 (70% off)",      
      strikethrough: "$ 84.95 - $85.00",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/1963375b-9c54-47c9-beba-b285b3576490.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      company: "T Tahari",
      price: "$ 29.97 (69% OFF)",
      strikethrough: "$ 98.00",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  }
  ]

  function appendrecent(data, acontainer) {
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
  
  let recentlyViwe_Item = document.getElementById("recentlyViewed");
  appendrecent(recently, recentlyViwe_Item);