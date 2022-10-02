import navbar from "../components/main_nav.js"
let navbarDiv=document.getElementById('main_nav976')
navbarDiv.innerHTML=navbar();

import footer from "../components/mainFooter.js"
let main_footer=document.getElementById('footer1');
main_footer.innerHTML=footer();


//new arrival arr
let All_new_arrival_Arr=[
    {
      Image:"https://n.nordstrommedia.com/id/sr3/88bd0023-20f4-44f2-a095-ce006da6c635.jpeg?h=365&w=240&dpr=2",
      dots:"./images/c2.png",
      company: "UGG®",
      price: "$69.97 (30% off)",
      strikethrough: "$100.00",
      shipping:"Free Shipping on Orders $89+",
      desc:"Classic Slipper (Women)",
      star_img:"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png"
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/155c7f8e-780b-4d4a-a92b-b48414073aae.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c1.png",
        company: "Madewell",
        price: "$12.73 - $ 16.97 (Up to 31% off select items)",      
        strikethrough: "$18.50",
        shipping:"Free Shipping on Orders $89+",
      desc:"Lula Block Heel Slingback Sandal (Women)",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/9c5e2b6d-c9a5-4ffd-ba8c-fc29f88b867c.jpeg?h=365&w=240&dpr=2",
        
        dots:"./images/c4.png",
        company: "Harper Canyon",
        shipping:"Free Shipping on Orders $89+",
            desc:"Boyfriend Straight Jeans",
        price: "$ $22.97 (Extra 60% 0ff) ",
        strikethrough: "",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/bd26358a-c2bd-46d8-92c1-b948398fd9d5.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c3.png",
        company: "Design History",
        price: "$ 19.97 (35% off)",
        strikethrough: "$ 31.00",
        shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/e9695438-da6f-4cc0-b360-56b68bdfdc7c.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c4.png",
        company: "Design History",
        shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
        price: "$ 24.95 (Extra 60% 0ff)",
        strikethrough: "(Up to 59% off select items)",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/1490980e-8049-4998-ac6b-5b6465852928.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c5.png",
        company: "Peek Aren't You Curious",
        price: "$ 29.97 (69% OFF)",
        shipping:"Free Shipping on Orders $89+",
            desc:"Boyfriend Straight Jeans",
        strikethrough: "$ 98.00",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
       "https://n.nordstrommedia.com/id/sr3/aa979aa2-dc26-42be-bd30-d7fca266dcde.jpeg?h=365&w=240&dpr=2",
       dots:"./images/c8.png",
       company: "Habitual Fisher LTD",
       price: "$ 19.97 (70% OFF)",
       strikethrough: "$ 68.00",
       shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
       star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
        Image:
          "https://n.nordstrommedia.com/id/sr3/c296dba6-535d-4ab3-95ea-67e12208f7d0.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c6.png",
          company: "Katy Perry",
          shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
          price: "56.23 - $ 79.97",
          strikethrough: "$ 189.99",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/c771e283-c0f8-4500-87bb-b7734a0ebf2d.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c7.png",
        company: "Kenneth Cole New York",
        price: "74.97 (72% OFF)",
        shipping:"Free Shipping on Orders $89+",
            desc:"Boyfriend Straight Jeans",
        strikethrough: "$ 129.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/e6f8ea72-081a-4e02-beff-87e7f214a434.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c8.png",
        company: "Melrose and Market",
        price: "$ 33.73 (62% OFF)",
        shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
        strikethrough: "$ 89.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/781161bd-d7d1-4bbe-a49a-16a5be3b62ef.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c1.png",
        shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
        company: "Lovestitch",
        price: "74.97 (72% OFF)",
        strikethrough: "$ 329.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
  
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/0274b095-95d2-41d2-bfd7-dea31ffbe816.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c2.png",
        company: "Melrose and Market",
        price: "74.97 (72% OFF)",
        shipping:"Free Shipping on Orders $89+",
            desc:"Boyfriend Straight Jeans",
        strikethrough: "$ 129.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
        Image:
          "https://n.nordstrommedia.com/id/sr3/05b97816-18a8-454f-9b92-468800c2b9b6.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c6.png",
          company: "Treasure & Bond",
          price: "24.97 (72% OFF)",
          strikethrough: "$ 89.95",
          shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/de4b0114-de05-4c90-8859-20477ac9b02e.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c5.png",
          company: "Lucky Brand",
          shipping:"Free Shipping on Orders $89+",
            desc:"Boyfriend Straight Jeans",
          price: "89.97 (52% OFF)",
          strikethrough: "$ 100.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/52daaa0c-a58b-497a-a611-0bc7b827fd8d.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c3.png",
          company: "RDI",
          shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
          price: "769.97 (58% OFF)",
          strikethrough: "$ 1009.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/65e935a5-b264-4f53-9e53-48efaef98ead.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c1.png",
          company: "Billionaire Club",
          price: "34.97 (72% OFF)",
          shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
          strikethrough: "$ 59.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/8d820b56-c3e4-4cb6-98e8-aef4c73fa4ae.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c2.png",
          company: "KUT feom the KLOTH",
          shipping:"Free Shipping on Orders $89+",
            desc:"Boyfriend Straight Jeans",
          price: "64.97" ,
          strikethrough: "$ 99.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/fef4fe6a-80d5-434a-8642-5a6749f3cb77.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c6.png",
          company: "Sovereign Code",
          shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
          price: "74.97 (72% OFF)",
          strikethrough: "$ 529.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/6d2f31c6-0e43-4b89-ab2f-4d7ee3473254.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c4.png",
          company: "Melrose and Market",
          price: "$29.97 (62% off)",
          strikethrough: "$79.00",
          shipping:"Free Shipping on Orders $89+",
            desc:"Boyfriend Straight Jeans",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/7b238d10-2253-4c3f-99df-69a32d80a852.jpeg?h=365&w=240&dpr=2",
          
          dots:"./images/c7.png",
          company: "Billionaire Boys Club",
          shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
          price: "$39.99Current Price $39.99",
          strikethrough: "",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:"https://n.nordstrommedia.com/id/sr3/c7774df0-9351-4251-af3d-e26f2391252e.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c2.png",
        company: "UGG®",
        price: "$69.97 (30% off)",
        shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
        strikethrough: "$100.00",
        star_img:"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png"
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/3782becd-2545-4423-bc0d-0383584761ac.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c1.png",
          company: "Madewell",
          price: "$12.73 - $ 16.97 (Up to 31% off select items)",      
          strikethrough: "$18.50",
          shipping:"Free Shipping on Orders $89+",
      desc:"Lula Block Heel Slingback Sandal (Women)",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/1db01437-4dd8-4fa7-8462-269672248f1f.jpeg?h=365&w=240&dpr=2",
          
          dots:"./images/c4.png",
          company: "Harper Canyon",
          price: "$ $22.97 (Extra 60% 0ff) ",
          shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
          strikethrough: "",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/a1f16f0c-79b7-462c-84ba-b2cc1c5208ab.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c3.png",
          company: "Design History",
          price: "$ 19.97 (35% off)",
          strikethrough: "$ 31.00",
          shipping:"Free Shipping on Orders $89+",
      desc:"Lula Block Heel Slingback Sandal (Women)",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/e15daad7-c21e-42ab-a0ee-d610e302af84.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c4.png",
          company: "Design History",
          shipping:"Free Shipping on Orders $89+",
            desc:"Boyfriend Straight Jeans",
          price: "$ 24.95 (Extra 60% 0ff)",
          strikethrough: "(Up to 59% off select items)",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/3f457916-bba4-4143-b58f-e55c964d1cf0.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c5.png",
          company: "Peek Aren't You Curious",
          price: "$ 29.97 (69% OFF)",
          strikethrough: "$ 98.00",
          shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
         "https://n.nordstrommedia.com/id/sr3/1d2891e4-1e63-4564-9b53-a42734e15929.jpeg?h=365&w=240&dpr=2",
         dots:"./images/c8.png",
         company: "Habitual Fisher LTD",
         price: "$ 19.97 (70% OFF)",
         shipping:"Free Shipping on Orders $89+",
            desc:"Boyfriend Straight Jeans",
         strikethrough: "$ 68.00",
         star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
          Image:
            "https://n.nordstrommedia.com/id/sr3/ab787a74-d7c5-49cb-9883-4ef6ea4f093f.jpeg?h=365&w=240&dpr=2",
            dots:"./images/c6.png",
            company: "Katy Perry",
            price: "56.23 - $ 79.97",
            strikethrough: "$ 189.99",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/0b5cd87a-8be7-407b-8efe-3e0d54108472.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c7.png",
          company: "Kenneth Cole New York",
          price: "74.97 (72% OFF)",
          strikethrough: "$ 129.95",
          shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/895baf63-c78f-4b02-a2c1-84b2f0d0ae17.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c8.png",
          company: "Melrose and Market",
          shipping:"Free Shipping on Orders $89+",
            desc:"Boyfriend Straight Jeans",
          price: "$ 33.73 (62% OFF)",
          strikethrough: "$ 89.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/183f677c-0e14-4356-beed-37c4374f6a4b.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c1.png",
          company: "Lovestitch",
          price: "74.97 (72% OFF)",
          strikethrough: "$ 329.95",
          shipping:"Free Shipping on Orders $89+",
      desc:"Lula Block Heel Slingback Sandal (Women)",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
    
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/8d0215e6-59b0-4730-ad44-cef62e1fea24.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c2.png",
          company: "Melrose and Market",
          price: "74.97 (72% OFF)",
          strikethrough: "$ 129.95",
          shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
          Image:
            "https://n.nordstrommedia.com/id/sr3/05323423-91f1-403f-b54b-6a7d179be1ba.jpeg?h=365&w=240&dpr=2",
            dots:"./images/c6.png",
            company: "Treasure & Bond",
            price: "24.97 (72% OFF)",
            strikethrough: "$ 89.95",
            shipping:"Free Shipping on Orders $89+",
      desc:"Lula Block Heel Slingback Sandal (Women)",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
        {
          Image:
            "https://n.nordstrommedia.com/id/sr3/11bf425c-510f-4c37-beb3-2ddae3c97883.jpeg?h=365&w=240&dpr=2",
            dots:"./images/c5.png",
            company: "Lucky Brand",
            price: "89.97 (52% OFF)",
            strikethrough: "$ 100.95",
            shipping:"Free Shipping on Orders $89+",
            desc:"Boyfriend Straight Jeans",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
        {
          Image:
            "https://n.nordstrommedia.com/id/sr3/9fb4949c-d2eb-4fde-995a-ba586cb63afd.jpeg?h=365&w=240&dpr=2",
            dots:"./images/c3.png",
            company: "RDI",
            price: "769.97 (58% OFF)",
            strikethrough: "$ 1009.95",
            shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
        {
          Image:
            "https://n.nordstrommedia.com/id/sr3/8f9dcdd2-a0f5-4c58-adce-402b885abbff.jpeg?h=365&w=240&dpr=2",
            dots:"./images/c1.png",
            company: "Billionaire Club",
            price: "34.97 (72% OFF)",
            shipping:"Free Shipping on Orders $89+",
      desc:"Lula Block Heel Slingback Sandal (Women)",
            strikethrough: "$ 59.95",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
        {
          Image:
            "https://n.nordstrommedia.com/id/sr3/6d9873ba-b93d-4e47-8007-670053c7b3f3.jpeg?h=365&w=240&dpr=2",
            dots:"./images/c2.png",
            company: "KUT feom the KLOTH",
            price: "64.97" ,
            strikethrough: "$ 99.95",
            shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
        {
          Image:
            "https://n.nordstrommedia.com/id/sr3/7af5ca4a-98b6-4b86-8182-b231211a1836.jpeg?h=365&w=240&dpr=2",
            dots:"./images/c6.png",
            company: "Sovereign Code",
            price: "74.97 (72% OFF)",
            shipping:"Free Shipping on Orders $89+",
            desc:"Boyfriend Straight Jeans",
            strikethrough: "$ 529.95",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
        {
          Image:
            "https://n.nordstrommedia.com/id/sr3/cd484947-f5a4-4557-bf0a-c55fbda01112.jpeg?h=365&w=240&dpr=2",
            dots:"./images/c4.png",
            company: "Melrose and Market",
            price: "$29.97 (62% off)",
            shipping:"Free Shipping on Orders $89+",
      desc:"Lula Block Heel Slingback Sandal (Women)",
            strikethrough: "$79.00",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
        {
          Image:
            "https://n.nordstrommedia.com/id/sr3/37d2ff0f-5fd5-4288-ae16-039b08b0c81f.jpeg?h=365&w=240&dpr=2",
            
            dots:"./images/c7.png",
            company: "Billionaire Boys Club",
            price: "$39.99Current Price $39.99",
            strikethrough: "",
            shipping:"Free Shipping on Orders $89+",
      desc:"Lula Block Heel Slingback Sandal (Women)",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
  ];

//Accessories
  let Accessories_Arr=[
    {
      Image:"https://n.nordstrommedia.com/id/sr3/f37718b1-0dff-49dc-8fde-62b4821e526e.jpeg?h=365&w=240&dpr=2",
      dots:"./images/c2.png",
      company: "Kurt Geiger",
      price: " $149.99(49% off)",
      strikethrough: " $295.00",
      shipping:"Free Shipping on Orders $89+",
      desc:"Large Leather Soho Bag",
      star_img:"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png"
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/4cc34ec8-8462-4929-af03-0dced14a2738.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c1.png",
        company: "Madewell",
        price: "$12.73 - $ 16.97 (Up to 31% off select items)",      
        strikethrough: "$18.50",
        shipping:"Free Shipping on Orders $89+",
      desc:"Swarovski Crystal Studded Band - Set of 3",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/e2dfb0ed-a648-413b-ab5e-0097de395adc.jpeg?h=365&w=240&dpr=2",
        
        dots:"./images/c4.png",
        company: "SAVVY CIE JEWELS",
        shipping:"Free Shipping on Orders $89+",
            desc:"18K Yellow Gold Vermeil Prong Set Emerald Stud Earrings",
        price: "$24.97(80% off) ",
        strikethrough: "$125.00",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/f05843d4-65f3-4ad0-97ae-72f3988398ba.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c3.png",
        company: "The North Face",
        price: "$22.48(43% off)",
        strikethrough: "$ 40.00",
        shipping:"Free Shipping on Orders $89+",
            desc:"Purrl Stitch Earflap Beanie",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/3857fdf8-4eb8-4bc3-a353-bf7c853c9fd0.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c4.png",
        company: "Adornia",
        shipping:"Free Shipping on Orders $89+",
            desc:"14K Yellow Gold Plated Sterling Silver Screw Cuff",
        price: "$ 24.95 (Extra 60% 0ff)",
        strikethrough: "(Up to 59% off select items)",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/536e5654-0d2f-4683-adc3-f8eb60b21c8e.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c5.png",
        company: "UGG®",
        price: "$ 29.97 (69% OFF)",
        shipping:"Free Shipping on Orders $89+",
            desc:"Knit Pompom Beanie",
        strikethrough: "$ 98.00",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
       "https://n.nordstrommedia.com/id/sr3/aa979aa2-dc26-42be-bd30-d7fca266dcde.jpeg?h=365&w=240&dpr=2",
       dots:"./images/c8.png",
       company: "UGG®",
       price: "$ 19.97 (70% OFF)",
       strikethrough: "$ 68.00",
       shipping:"Free Shipping on Orders $89+",
            desc:"Knit Pompom Beanie",
       star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
        Image:
          "https://n.nordstrommedia.com/id/sr3/79047b5d-0b55-4912-ab5e-1ff33c5e7115.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c6.png",
          company: "Ted Baker London",
          shipping:"Free Shipping on Orders $89+",
            desc:"Sandalwood Large Icon Tote Bag",
          price: "56.23 - $ 79.97",
          strikethrough: "$ 189.99",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/c771e283-c0f8-4500-87bb-b7734a0ebf2d.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c7.png",
        company: "Adornia",
        price: "74.97 (72% OFF)",
        shipping:"Free Shipping on Orders $89+",
            desc:"14K Gold Plated 3mm & 4mm Paperclip Chain Necklace Set",
        strikethrough: "$ 129.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/e6f8ea72-081a-4e02-beff-87e7f214a434.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c8.png",
        company: "Melrose and Market",
        price: "$ 33.73 (62% OFF)",
        shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
        strikethrough: "$ 89.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/f6198752-43a6-45a8-a93a-08b41ce0ed5a.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c1.png",
        shipping:"Free Shipping on Orders $89+",
            desc:"Classic 50mm Hoop Earrings",
        company: "NORDSTROM RACK",
        price: "74.97 (72% OFF)",
        strikethrough: "$ 329.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
  
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/a6f78437-cf4d-44ef-93c7-f213a35c503f.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c2.png",
        company: "Vince Camuto",
        price: "74.97 (72% OFF)",
        shipping:"Free Shipping on Orders $89+",
            desc:"Collection XIIX Circle & Bar Interlocking Belt",
        strikethrough: "$ 129.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
        Image:
          "https://n.nordstrommedia.com/id/sr3/bb605458-ea0d-423d-bb74-d1d78fc15a0f.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c6.png",
          company: "kate spade new york",
          price: "24.97 (72% OFF)",
          strikethrough: "$ 89.95",
          shipping:"Free Shipping on Orders $89+",
            desc:"kat spade new york round stud earrings",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/46484ccd-720d-4795-9c2a-87a412d83511.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c5.png",
          company: "UGG®",
          shipping:"Free Shipping on Orders $89+",
            desc:"Knit Fingerless Gloves",
          price: "89.97 (52% OFF)",
          strikethrough: "$ 100.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/e1f400d4-ddc4-4a73-81b0-aa0fc5241ad2.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c3.png",
          company: "RDI",
          shipping:"Free Shipping on Orders $89+",
            desc:"14K Gold Plated 3mm & 4mm Paperclip Chain Necklace Set",
          price: "769.97 (58% OFF)",
          strikethrough: "$ 1009.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/7a0172a0-b4a8-40e0-a934-2967811f1ade.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c1.png",
          company: "Billionaire Club",
          price: "34.97 (72% OFF)",
          shipping:"Free Shipping on Orders $89+",
            desc:"southport ave hannah leather crossbody bag",
          strikethrough: "$ 59.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/02b5991c-e150-49ee-898c-3d03b40a564c.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c2.png",
          company: "KUT feom the KLOTH",
          shipping:"Free Shipping on Orders $89+",
            desc:"leopard print oblong scarf",
          price: "64.97" ,
          strikethrough: "$ 99.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/8281d88f-1b20-49b5-8ff5-17467baf4a26.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c6.png",
          company: "adidas",
          shipping:"Free Shipping on Orders $89+",
            desc:"Saturday 2.0 Baseball Cap (Women)",
          price: "74.97 (72% OFF)",
          strikethrough: "$ 529.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/3857fdf8-4eb8-4bc3-a353-bf7c853c9fd0.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c4.png",
          company: "Adornia",
          price: "$29.97 (62% off)",
          strikethrough: "$79.00",
          shipping:"Free Shipping on Orders $89+",
            desc:"14K Yellow Gold Plated Sterling Silver Screw Cuff",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/7b238d10-2253-4c3f-99df-69a32d80a852.jpeg?h=365&w=240&dpr=2",
          
          dots:"./images/c7.png",
          company: "Billionaire Boys Club",
          shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
          price: "$39.99Current Price $39.99",
          strikethrough: "",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:"https://n.nordstrommedia.com/id/sr3/469846ae-74ce-4b04-9f3d-63be24563939.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c2.png",
        company: "Ray-Ban",
        price: "$69.97 (30% off)",
        shipping:"Free Shipping on Orders $89+",
            desc:"54mm Polarized Wayfarer Sunglasses",
        strikethrough: "$100.00",
        star_img:"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png"
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/6774fb6c-1ca4-4f38-9d1c-8fde561faab1.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c1.png",
          company: "Ted Baker London",
          price: "$12.73 - $ 16.97 (Up to 31% off select items)",      
          strikethrough: "$18.50",
          shipping:"Free Shipping on Orders $89+",
      desc:"Sandalwood Makeup Bag",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/b3ca9a3e-798c-40e9-b10c-363989646a94.jpeg?h=365&w=240&dpr=2",
          
          dots:"./images/c4.png",
          company: "Harper Canyon",
          price: "$ $22.97 (Extra 60% 0ff) ",
          shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
          strikethrough: "",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/097662c3-eba2-4add-9e7b-531fbd8a648d.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c3.png",
          company: "Design History",
          price: "$ 19.97 (35% off)",
          strikethrough: "$ 31.00",
          shipping:"Free Shipping on Orders $89+",
      desc:"Lula Block Heel Slingback Sandal (Women)",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/42add6b2-14af-4615-ace3-c4dcc4ace7be.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c4.png",
          company: "Design History",
          shipping:"Free Shipping on Orders $89+",
            desc:"Boyfriend Straight Jeans",
          price: "$ 24.95 (Extra 60% 0ff)",
          strikethrough: "(Up to 59% off select items)",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/9068a1bf-c693-487d-915a-b810ea9c703a.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c5.png",
          company: "Peek Aren't You Curious",
          price: "$ 29.97 (69% OFF)",
          strikethrough: "$ 98.00",
          shipping:"Free Shipping on Orders $89+",
            desc:"18K Yellow Gold Plated CZ Evil Eye Band Ring",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
         "https://n.nordstrommedia.com/id/sr3/b37838bf-0c4a-4e8e-9644-b772845a47c0.jpeg?h=365&w=240&dpr=2",
         dots:"./images/c8.png",
         company: "Habitual Fisher LTD",
         price: "$ 19.97 (70% OFF)",
         shipping:"Free Shipping on Orders $89+",
            desc:"Boyfriend Straight Jeans",
         strikethrough: "$ 68.00",
         star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
          Image:
            "https://n.nordstrommedia.com/id/sr3/0274b095-95d2-41d2-bfd7-dea31ffbe816.jpeg?h=365&w=240&dpr=2",
            dots:"./images/c6.png",
            company: "Katy Perry",
            price: "56.23 - $ 79.97",
            strikethrough: "$ 189.99",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/060e8e1a-dbad-42af-abcd-a36f195e1ba5.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c7.png",
          company: "Kenneth Cole New York",
          price: "74.97 (72% OFF)",
          strikethrough: "$ 129.95",
          shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/b594e695-fc92-4f89-886d-55ba13294188.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c8.png",
          company: "Melrose and Market",
          shipping:"Free Shipping on Orders $89+",
            desc:"Boyfriend Straight Jeans",
          price: "$ 33.73 (62% OFF)",
          strikethrough: "$ 89.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/7c284a0a-f199-46eb-9211-d1c5415b3ebb.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c1.png",
          company: "Lovestitch",
          price: "74.97 (72% OFF)",
          strikethrough: "$ 329.95",
          shipping:"Free Shipping on Orders $89+",
      desc:"Lula Block Heel Slingback Sandal (Women)",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
    
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/970906a7-456c-4266-af63-27b43cebabfe.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c2.png",
          company: "Melrose and Market",
          price: "74.97 (72% OFF)",
          strikethrough: "$ 129.95",
          shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
          Image:
            "https://n.nordstrommedia.com/id/sr3/83b7e9fc-32e6-4210-bb8d-8509d66826b6.jpeg?h=365&w=240&dpr=2",
            dots:"./images/c6.png",
            company: "Treasure & Bond",
            price: "24.97 (72% OFF)",
            strikethrough: "$ 89.95",
            shipping:"Free Shipping on Orders $89+",
      desc:"Lula Block Heel Slingback Sandal (Women)",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
        {
          Image:
            "https://n.nordstrommedia.com/id/sr3/c13c8f51-ab42-4588-94c4-cf04da34ca56.jpeg?h=365&w=240&dpr=2",
            dots:"./images/c5.png",
            company: "Lucky Brand",
            price: "89.97 (52% OFF)",
            strikethrough: "$ 100.95",
            shipping:"Free Shipping on Orders $89+",
            desc:"Boyfriend Straight Jeans",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
        {
          Image:
            "https://n.nordstrommedia.com/id/sr3/cd413a09-7451-45a5-b0c7-85493024a63d.jpeg?h=365&w=240&dpr=2",
            dots:"./images/c3.png",
            company: "RDI",
            price: "769.97 (58% OFF)",
            strikethrough: "$ 1009.95",
            shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
        {
          Image:
            "https://n.nordstrommedia.com/id/sr3/f9ee9661-9fca-46c0-b942-63934cf23abe.jpeg?h=365&w=240&dpr=2",
            dots:"./images/c1.png",
            company: "Billionaire Club",
            price: "34.97 (72% OFF)",
            shipping:"Free Shipping on Orders $89+",
      desc:"Lula Block Heel Slingback  (Women)",
            strikethrough: "$ 59.95",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
        {
          Image:
            "https://n.nordstrommedia.com/id/sr3/aa099394-29b2-4382-bc40-b55dbab4da76.jpeg?h=365&w=240&dpr=2",
            dots:"./images/c2.png",
            company: "KUT feom the KLOTH",
            price: "64.97" ,
            strikethrough: "$ 99.95",
            shipping:"Free Shipping on Orders $89+",
            desc:"Faux Cracked Leather High Rise Ankle Leggings",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
        {
          Image:
            "https://n.nordstrommedia.com/id/sr3/14cbc4de-6242-4743-b453-71938417b7db.jpeg?h=365&w=240&dpr=2",
            dots:"./images/c6.png",
            company: "Sovereign Code",
            price: "74.97 (72% OFF)",
            shipping:"Free Shipping on Orders $89+",
            desc:"Boyfriend Straight ",
            strikethrough: "$ 529.95",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
        {
          Image:
            "https://n.nordstrommedia.com/id/sr3/fb6e605f-e07e-44ef-a0be-fdd08baab8cc.jpeg?h=365&w=240&dpr=2",
            dots:"./images/c4.png",
            company: "Melrose and Market",
            price: "$29.97 (62% off)",
            shipping:"Free Shipping on Orders $89+",
            desc:"Lula Block Heel Slingback (Women)",
            strikethrough: "$79.00",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
        {
          Image:
            "https://n.nordstrommedia.com/id/sr3/3ef121fd-aa5a-457d-b86b-bf75afb6d116.jpeg?h=365&w=240&dpr=2",
            
            dots:"./images/c7.png",
            company: "Billionaire Boys Club",
            price: "$39.99Current Price $39.99",
            strikethrough: "",
            shipping:"Free Shipping on Orders $89+",
      desc:"Lula Block Heel Slingback bag (Women)",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
  ];

//clothing
let clothing_Arr=[
  {
    Image:"https://n.nordstrommedia.com/id/sr3/922b2746-5662-46d8-a31f-83bc84e5b2e6.jpeg?h=365&w=240&dpr=2",
    company: "Thread & Supply    ",
    price: "$69.97 (30% off)",
    strikethrough: "$100.00",
    dots:"./images/c2.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
    star_img:"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png"
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/daa12e06-645a-4eae-97b6-51cacb15a8a9.jpeg?h=365&w=240&dpr=2",
      dots:"./images/c1.png",
      company: "Faux Cracked Leather High Rise Ankle Leggings",
      price: "$12.73 - $ 16.97 (Up to 31% off select items)",      
      strikethrough: "$18.50",
      shipping:"Free Shipping on Orders $89+",
    desc:"Faux Cracked Leather High Rise Ankle Leggings",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/d58ece58-c8fd-4d2f-afe1-283046d10c07.jpeg?h=365&w=240&dpr=2",
      
      dots:"./images/c4.png",
      company: "KUT from the Kloth",
      shipping:"Free Shipping on Orders $89+",
          desc:"Boyfriend Straight Jeans",
      price: "$ $22.97 (Extra 60% 0ff) ",
      strikethrough: "",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/aef6939b-5c6a-44b7-8189-30fbe1e29fa0.jpeg?h=365&w=240&dpr=2",
      dots:"./images/c3.png",
      company: "Caslon®",
      price: "$ 19.97 (35% off)",
      strikethrough: "$ 31.00",
      shipping:"Free Shipping on Orders $89+",
          desc:"Double V Knit Tank Top (Regular & Petite)",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/47329588-89ce-4ba6-b562-19b8ea3a5c41.jpeg?h=365&w=240&dpr=2",
      dots:"./images/c4.png",
      company: "T Tahari",
      shipping:"Free Shipping on Orders $89+",
          desc:"Saddle Stripe Long Sleeve Sweater",
      price: "$ 24.95 (Extra 60% 0ff)",
      strikethrough: "(Up to 59% off select items)",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/2cfd535d-fb05-41eb-a1d8-aa147e70f307.jpeg?h=365&w=240&dpr=2",
      dots:"./images/c5.png",
      company: "T Tahari",
      price: "$ 29.97 (69% OFF)",
      shipping:"Free Shipping on Orders $89+",
          desc:"Textured Boatneck Long Sleeve Top",
      strikethrough: "$ 98.00",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
     "https://n.nordstrommedia.com/id/sr3/05161a60-d4ed-4c24-8ce3-e9d33c46cefa.jpeg?h=365&w=240&dpr=2",
     dots:"./images/c8.png",
     company: "Joseph A",
     price: "$ 19.97 (70% OFF)",
     strikethrough: "$ 68.00",
     shipping:"Free Shipping on Orders $89+",
          desc:"Turtleneck Button Sleeve Pullover Sweater",
     star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
      Image:
        "https://n.nordstrommedia.com/id/sr3/c67c4a8a-ed6a-41c0-b4a0-eb5349d77234.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c6.png",
        company: "b.tempt'd by Wacoal",
        shipping:"Free Shipping on Orders $89+",
          desc:"Future Foundation Wireless Racerback Bra",
        price: "56.23 - $ 79.97",
        strikethrough: "$ 189.99",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/ab0dd44e-516d-458a-975e-bc8693db9937.jpeg?h=365&w=240&dpr=2",
      dots:"./images/c7.png",
      company: "RDI",
      price: "74.97 (72% OFF)",
      shipping:"Free Shipping on Orders $89+",
          desc:"Buffalo Plaid Shirt-Jacket",
      strikethrough: "$ 129.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/88a3de86-d2ce-4daa-b598-96dceadcfb74.jpeg?h=365&w=240&dpr=2",
      dots:"./images/c8.png",
      company: "T Tahari",
      price: "$ 33.73 (62% OFF)",
      shipping:"Free Shipping on Orders $89+",
          desc:"High Waist Ponte Knit Leggings",
      strikethrough: "$ 89.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/781161bd-d7d1-4bbe-a49a-16a5be3b62ef.jpeg?h=365&w=240&dpr=2",
      dots:"./images/c1.png",
      shipping:"Free Shipping on Orders $89+",
          desc:"Faux Suede Crop Moto Jacket",
      company: "T Tahari",
      price: "74.97 (72% OFF)",
      strikethrough: "$ 329.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },

  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/c6ea3813-a6ca-4b4b-83f0-d8b2bb8df67f.jpeg?h=365&w=240&dpr=2",
      dots:"./images/c2.png",
      company: "Melrose and Market",
      price: "74.97 (72% OFF)",
      shipping:"Free Shipping on Orders $89+",
          desc:"V-Neck Cashmere Sweater",
      strikethrough: "$ 129.95",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
      Image:
        "https://n.nordstrommedia.com/id/sr3/4de0dcdb-5885-4063-bd7e-81bf2e616a4b.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c6.png",
        company: "Treasure & Bond",
        price: "24.97 (72% OFF)",
        strikethrough: "$ 89.95",
        shipping:"Free Shipping on Orders $89+",
          desc:"Superflex High Rise Elastic Free Ankle Leggings",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/0af8397d-a561-4b9a-a3ae-44b28eae13b1.jpeg?h=365&w=240&dpr=2v",
        dots:"./images/c5.png",
        company: "Lucky Brand",
        shipping:"Free Shipping on Orders $89+",
          desc:"Sandra Assorted Hipster - Pack of 5",
        price: "89.97 (52% OFF)",
        strikethrough: "$ 100.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/aa3e0669-fc12-4947-8016-0bb2052a6397.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c3.png",
        company: "RDI",
        shipping:"Free Shipping on Orders $89+",
          desc:"Faux Cracked Leather High Rise Ankle Leggings",
        price: "769.97 (58% OFF)",
        strikethrough: "$ 1009.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/405a44c9-46a0-43c4-a038-003c2b9bdcb9.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c1.png",
        company: "Billionaire Club",
        price: "34.97 (72% OFF)",
        shipping:"Free Shipping on Orders $89+",
          desc:"Faux Cracked Leather High Rise Ankle Leggings",
        strikethrough: "$ 59.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/405a44c9-46a0-43c4-a038-003c2b9bdcb9.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c2.png",
        company: "KUT feom the KLOTH",
        shipping:"Free Shipping on Orders $89+",
          desc:"Boyfriend Straight Jeans",
        price: "64.97" ,
        strikethrough: "$ 99.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/74bc810a-70bb-45b4-944b-e10d75cd79fb.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c6.png",
        company: "Sovereign Code",
        shipping:"Free Shipping on Orders $89+",
          desc:"Faux Cracked Leather High Rise Ankle Leggings",
        price: "74.97 (72% OFF)",
        strikethrough: "$ 529.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/b92a3fdd-55de-452f-87d9-f9e107a49493.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c4.png",
        company: "Melrose and Market",
        price: "$29.97 (62% off)",
        strikethrough: "$79.00",
        shipping:"Free Shipping on Orders $89+",
          desc:"Boyfriend Straight Jeans",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/cb70fda3-ca23-4404-b4b2-edf6fabae084.jpeg?h=365&w=240&dpr=2",
        
        dots:"./images/c7.png",
        company: "Billionaire Boys Club",
        shipping:"Free Shipping on Orders $89+",
          desc:"Faux Cracked Leather High Rise Ankle Leggings",
        price: "$39.99Current Price $39.99",
        strikethrough: "",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:"https://n.nordstrommedia.com/id/sr3/faa8a2b8-dca8-4643-ad74-5bace215fb4b.jpeg?h=365&w=240&dpr=2",
      dots:"./images/c2.png",
      company: "UGG®",
      price: "$69.97 (30% off)",
      shipping:"Free Shipping on Orders $89+",
          desc:"Faux Cracked Leather High Rise Ankle Leggings",
      strikethrough: "$100.00",
      star_img:"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png"
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/3cbbda17-8534-4afa-b5a8-86caa9593313.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c1.png",
        company: "Madewell",
        price: "$12.73 - $ 16.97 (Up to 31% off select items)",      
        strikethrough: "$18.50",
        shipping:"Free Shipping on Orders $89+",
    desc:"Lula Block Heel Slingback Sandal (Women)",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/db61b381-91dd-4b13-a550-1b621fac4140.jpeg?h=365&w=240&dpr=2",
        
        dots:"./images/c4.png",
        company: "Harper Canyon",
        price: "$ $22.97 (Extra 60% 0ff) ",
        shipping:"Free Shipping on Orders $89+",
          desc:"Faux Cracked Leather High Rise Ankle Leggings",
        strikethrough: "",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/78b7f850-b4ca-4e67-8dfe-479cba06d1e8.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c3.png",
        company: "Design History",
        price: "$ 19.97 (35% off)",
        strikethrough: "$ 31.00",
        shipping:"Free Shipping on Orders $89+",
    desc:"Lula Block Heel Slingback Sandal (Women)",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/1e398a4b-46b7-4cfe-b124-19be79a1322c.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c4.png",
        company: "Design History",
        shipping:"Free Shipping on Orders $89+",
          desc:"Boyfriend Straight Jeans",
        price: "$ 24.95 (Extra 60% 0ff)",
        strikethrough: "(Up to 59% off select items)",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/88d5e30f-812e-4fd6-8892-cc0ab06446dc.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c5.png",
        company: "Peek Aren't You Curious",
        price: "$ 29.97 (69% OFF)",
        strikethrough: "$ 98.00",
        shipping:"Free Shipping on Orders $89+",
          desc:"Faux Cracked Leather High Rise Ankle Leggings",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
       "https://n.nordstrommedia.com/id/sr3/37d2ff0f-5fd5-4288-ae16-039b08b0c81f.jpeg?h=365&w=240&dpr=2",
       dots:"./images/c8.png",
       company: "Habitual Fisher LTD",
       price: "$ 19.97 (70% OFF)",
       shipping:"Free Shipping on Orders $89+",
          desc:"Boyfriend Straight Jeans",
       strikethrough: "$ 68.00",
       star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
        Image:
          "https://n.nordstrommedia.com/id/sr3/4b4ba406-e496-4bf0-bdce-81ca21ac753f.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c6.png",
          company: "Katy Perry",
          price: "56.23 - $ 79.97",
          strikethrough: "$ 189.99",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/cd484947-f5a4-4557-bf0a-c55fbda01112.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c7.png",
        company: "Kenneth Cole New York",
        price: "74.97 (72% OFF)",
        strikethrough: "$ 129.95",
        shipping:"Free Shipping on Orders $89+",
          desc:"Faux Cracked Leather High Rise Ankle Leggings",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/9532e896-f167-4e1c-b27f-c381ac0f72b7.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c8.png",
        company: "Melrose and Market",
        shipping:"Free Shipping on Orders $89+",
          desc:"Boyfriend Straight Jeans",
        price: "$ 33.73 (62% OFF)",
        strikethrough: "$ 89.95",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/1f93c39a-e9af-4d74-a61a-e493260c895b.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c1.png",
        company: "Lovestitch",
        price: "74.97 (72% OFF)",
        strikethrough: "$ 329.95",
        shipping:"Free Shipping on Orders $89+",
    desc:"Lula Block Heel Slingback Sandal (Women)",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
  
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/0869d56f-130f-4827-a2dc-4d69a750f4b3.jpeg?h=365&w=240&dpr=2",
        dots:"./images/c2.png",
        company: "Melrose and Market",
        price: "74.97 (72% OFF)",
        strikethrough: "$ 129.95",
        shipping:"Free Shipping on Orders $89+",
          desc:"Faux Cracked Leather High Rise Ankle Leggings",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
        Image:
          "https://n.nordstrommedia.com/id/sr3/0869d56f-130f-4827-a2dc-4d69a750f4b3.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c6.png",
          company: "Treasure & Bond",
          price: "24.97 (72% OFF)",
          strikethrough: "$ 89.95",
          shipping:"Free Shipping on Orders $89+",
    desc:"Lula Block Heel Slingback Sandal (Women)",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/40855782-e278-4cdc-ace9-b5c11e6c4d42.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c5.png",
          company: "Lucky Brand",
          price: "89.97 (52% OFF)",
          strikethrough: "$ 100.95",
          shipping:"Free Shipping on Orders $89+",
          desc:"Boyfriend Straight Jeans",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/901341b4-6ed5-49a7-9940-5488e6267119.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c3.png",
          company: "RDI",
          price: "769.97 (58% OFF)",
          strikethrough: "$ 1009.95",
          shipping:"Free Shipping on Orders $89+",
          desc:"Faux Cracked Leather High Rise Ankle Leggings",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/1bd39aa5-a7a0-4059-bfc5-92b815b4b0be.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c1.png",
          company: "Billionaire Club",
          price: "34.97 (72% OFF)",
          shipping:"Free Shipping on Orders $89+",
    desc:"Lula Block Heel Slingback Sandal (Women)",
          strikethrough: "$ 59.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/e36595b8-ea5b-417f-a501-3c5d1e3812b8.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c2.png",
          company: "KUT feom the KLOTH",
          price: "64.97" ,
          strikethrough: "$ 99.95",
          shipping:"Free Shipping on Orders $89+",
          desc:"Faux Cracked Leather High Rise Ankle Leggings",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/af9bdb7c-ca7c-4180-a45c-76cae44350ce.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c6.png",
          company: "Sovereign Code",
          price: "74.97 (72% OFF)",
          shipping:"Free Shipping on Orders $89+",
          desc:"Boyfriend Straight Jeans",
          strikethrough: "$ 529.95",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/a6a3d8a6-d432-4e94-8204-516ccd8b1104.jpeg?h=365&w=240&dpr=2",
          dots:"./images/c4.png",
          company: "Melrose and Market",
          price: "$29.97 (62% off)",
          shipping:"Free Shipping on Orders $89+",
    desc:"Lula Block Heel Slingback Sandal (Women)",
          strikethrough: "$79.00",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/ed68c545-13a0-4a33-88db-5809dcd926bf.jpeg?h=365&w=240&dpr=2",
          
          dots:"./images/c7.png",
          company: "Billionaire Boys Club",
          price: "$39.99Current Price $39.99",
          strikethrough: "",
          shipping:"Free Shipping on Orders $89+",
    desc:"Lula Block Heel Slingback Sandal (Women)",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
];

//shoes
let shoes_Arr = [
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/ec14e5ee-e30b-4270-b0e9-74677f569276.jpeg?h=365&w=240&dpr=2",
      company: "UGG®",
      price: "$ 33.73 (62% OFF)",
      strikethrough: "$ 89.95",
      dots:"./images/c6.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"Classic Slipper (Women)",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/f4c8c06d-9352-4453-ad3b-9b9ce8450389.jpeg?h=365&w=240&dpr=2",
      company: "Caslon®",
      price: "74.97 (72% OFF)",
      strikethrough: "$ 329.95",
      dots:"./images/c8.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"Miller Water Resistant Chelsea Boot (Women)",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/abe0f760-0902-46f4-a70f-8565626adb7a.jpeg?h=365&w=240&dpr=2",
      company: "Marc Fisher LTD",
      price: "74.97 (72% OFF)",
      strikethrough: "$ 129.95",
      dots:"./images/c5.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"Oshay Pointed Toe Bootie (Women)",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
      Image:
        "https://n.nordstrommedia.com/id/sr3/94183888-408c-4e90-a9b2-1874623f8099.jpeg?h=365&w=240&dpr=2",
        company: "BP.",
        price: "24.97 (72% OFF)",
        strikethrough: "$ 89.95",
        dots:"./images/c6.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"Lula Slingback Sandal (Women)",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/8bb278ab-2a52-477b-84ec-07b254821429.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "BP.",
        price: "89.97 (52% OFF)",
        strikethrough: "$ 100.95",
        dots:"./images/c2.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"Lollie Jelly Platform Sandal (Women)",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/05c6967f-4cb1-4391-ac11-2a23128c2eca.jpeg?h=365&w=240&dpr=2",
        company: "Vintage Havana",
        price: "769.97 (58% OFF)",
        strikethrough: "$ 1009.95",
        dots:"./images/c1.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"Bianca Sneaker (Women)",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/fc82857f-d13d-4296-811f-80c934f4fae8.jpeg?h=365&w=240&dpr=2",
        company: "SOREL",
        price: "34.97 (72% OFF)",
        strikethrough: "$ 59.95",
        dots:"./images/c7.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"Explorer Carnival Waterproof Boot with Faux Fur Collar (Women)",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/1b9a5778-706f-4703-8220-b87f39341021.jpeg?h=365&w=240&dpr=2",
        company: "Franco Sarto",
        price: "64.97" ,
        strikethrough: "$ 99.95",
        dots:"./images/c3.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"Cassandra Platform Penny Loafer (Women)",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/e538996a-70a0-434a-803d-bdbd8c483b81.jpeg?h=365&w=240&dpr=2",
        company: "DV by Dolce Vita",
        price: "74.97 (72% OFF)",
        strikethrough: "$ 529.95",
        dots:"./images/c4.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"BP Lance Leather Block Heel Bootie (Women)",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/6eadbf5f-b6e3-4f47-936c-8fb14b578f1e.jpeg?h=365&w=240&dpr=2",
        company: "UGG®",
        price: "79.97 (72% OFF)",
        strikethrough: "$ 429.95",
        dots:"./images/c6.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"Fluffita Slipper (Women)",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/453e5d39-0ea6-4880-ac35-9e1427bff6a7.jpeg?h=365&w=240&dpr=2",
        company: "Steve Madden",
        price: "64.97 (72% OFF)",
        strikethrough: "$ 89.95",
        dots:"./images/c4.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"Oh Fluffita Genuine Shearling Slingback Sandal (Women)",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
  {
    Image:"https://n.nordstrommedia.com/id/sr3/4917e6ee-57e4-4a02-ac0a-d2a90696a330.jpeg?q=45&dpr=2&h=365.31&w=230",
    company: "Steve Madden",
    price: "$ 19.99 (77% OFF)",
    strikethrough: "$ 89.95",
    dots:"./images/c2.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
    star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/cf9e2eab-15b9-4067-a5d6-40d98f7e60e6.jpeg?q=45&dpr=2&h=365.31&w=230",
      company: "Steve Madden",
      price: "59.99 - $ 79.99",
      strikethrough: "$ 99.95",
      dots:"./images/c4.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/f93aaab9-8169-426e-9876-ff22e921b683.jpeg?q=45&dpr=2&h=365.31&w=230",
      company: "Steve Madden",
      price: "$ 59.97 (33% OFF)",
      strikethrough: "$ 89.95",
      dots:"./images/c8.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/c99732ac-7cb1-465b-b9f2-962a16825024.jpeg?q=45&dpr=2&h=365.31&w=230",
      company: "Steve Madden",
      price: "$ 109.97 (35% OFF)",
      strikethrough: "$ 169.95",
      dots:"./images/c1.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/61f4e6d2-459a-4baf-b2a2-248fc15f0578.jpeg?q=45&dpr=2&h=365.31&w=230",
      company: "Steve Madden",
      price: "$ 33.73 (62% OFF)",
      strikethrough: "$ 89.95",
      dots:"./images/c3.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/b78dfd49-d8f5-433b-a545-576fa3e340fe.jpeg?q=45&dpr=2&h=365.31&w=230",
      company: "Steve Madden",
      price: "$ 129.97 (35% OFF)",
      strikethrough: "$ 189.95",
      dots:"./images/c5.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
     "https://n.nordstrommedia.com/id/sr3/26cd1df6-09d4-4d97-ba6b-8d00a54a9655.jpeg?q=45&dpr=2&h=365.31&w=230",
     company: "Steve Madden",
     price: "$ 34.97 (56% OFF)",
     strikethrough: "$ 79.95",
     dots:"./images/c4.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
     star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
      Image:
        "https://n.nordstrommedia.com/id/sr3/6725b475-48a2-4549-9f28-fce05c7ff837.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Steve Madden",
        price: "56.23 - $ 79.97",
        strikethrough: "$ 89.99",
        dots:"./images/c2.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/bad808ee-7861-4fef-a54f-01a9f699448b.jpeg?q=45&dpr=2&h=365.31&w=230",
      company: "Steve Madden",
      price: "74.97 (72% OFF)",
      strikethrough: "$ 129.95",
      dots:"./images/c3.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/7cefd1b8-028c-4b83-817d-bce5ed4d493d.jpeg?q=45&dpr=2&h=365.31&w=230",
      company: "Steve Madden",
      price: "$ 33.73 (62% OFF)",
      strikethrough: "$ 89.95",
      dots:"./images/c6.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/8d1a39d4-eb3a-453c-84d4-963717f3d2a1.jpeg?q=45&dpr=2&h=365.31&w=230",
      company: "Steve Madden",
      price: "74.97 (72% OFF)",
      strikethrough: "$ 329.95",
      dots:"./images/c8.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },

  {
    Image:
      "https://n.nordstrommedia.com/id/sr3/1045065a-cea8-4d77-b179-b5b43906a310.jpeg?q=45&dpr=2&h=365.31&w=230",
      company: "Steve Madden",
      price: "74.97 (72% OFF)",
      strikethrough: "$ 129.95",
      dots:"./images/c5.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
      star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
  },
  {
      Image:
        "https://n.nordstrommedia.com/id/sr3/ec33e2f7-0a32-44ed-a0f9-b8690b77a4f3.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Steve Madden",
        price: "24.97 (72% OFF)",
        strikethrough: "$ 89.95",
        dots:"./images/c6.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/8bb278ab-2a52-477b-84ec-07b254821429.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Steve Madden",
        price: "89.97 (52% OFF)",
        strikethrough: "$ 100.95",
        dots:"./images/c2.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/0943e940-ab4a-4e62-a305-9b76f3bd8ccc.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Steve Madden",
        price: "769.97 (58% OFF)",
        strikethrough: "$ 1009.95",
        dots:"./images/c1.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/7ccaa388-51e1-418d-b14d-0cf5668676cd.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Steve Madden",
        price: "34.97 (72% OFF)",
        strikethrough: "$ 59.95",
        dots:"./images/c7.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/a80c93e9-d7a2-44af-bf76-e7898ad10fdc.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Steve Madden",
        price: "64.97" ,
        strikethrough: "$ 99.95",
        dots:"./images/c3.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/96cf87b1-b917-4993-9c0c-67aebe36f348.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Steve Madden",
        price: "74.97 (72% OFF)",
        strikethrough: "$ 529.95",
        dots:"./images/c4.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/61d894b2-10b8-441f-b4a1-0180501c66ac.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Steve Madden",
        price: "79.97 (72% OFF)",
        strikethrough: "$ 429.95",
        dots:"./images/c6.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
    {
      Image:
        "https://n.nordstrommedia.com/id/sr3/143c3e85-bee5-4bab-89ca-ca58f775cbc5.jpeg?q=45&dpr=2&h=365.31&w=230",
        company: "Steve Madden",
        price: "64.97 (72% OFF)",
        strikethrough: "$ 89.95",
        dots:"./images/c4.png",
    shipping:"Free Shipping on Orders $89+",
    desc:"THREAD AND SUPPLY Cardi Coat",
        star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
    },
];

//New Arrival
let newArrival_items = document.getElementById("newArriv09");
let Accessories = document.getElementById("access09");
let clothing = document.getElementById("cloth09");
let shoesss = document.getElementById("shoes09");
//by default bold
newArrival_items.style.fontWeight="bold";
newArrival_items.style.fontSize="18px"

//all new arrival event
newArrival_items.addEventListener("click", () => {
  appendbest(All_new_arrival_Arr, All_new_arrival_container);
  newArrival_items.style.fontWeight="bold";
  Accessories.style.fontWeight="";
  clothing.style.fontWeight="";
  shoesss.style.fontWeight="";

  newArrival_items.style.fontSize="18px"
})

//Accessories event
Accessories.addEventListener("click", () => {
  appendbest(Accessories_Arr, All_new_arrival_container);
  Accessories.style.fontWeight="bold";
  newArrival_items.style.fontWeight="";
  clothing.style.fontWeight="";
  shoesss.style.fontWeight="";

  Accessories.style.fontSize="18px"
})

//clothing event
clothing.addEventListener("click", () => {
  appendbest(clothing_Arr, All_new_arrival_container);
  clothing.style.fontWeight="bold";
  Accessories.style.fontWeight="";
  newArrival_items.style.fontWeight="";
  shoesss.style.fontWeight="";

  clothing.style.fontSize="18px"
})

//shoes event
shoesss.addEventListener("click", () => {
  appendbest(shoes_Arr, All_new_arrival_container);
  shoesss.style.fontWeight="bold";
  Accessories.style.fontWeight="";
  clothing.style.fontWeight="";
  newArrival_items.style.fontWeight="";

  shoesss.style.fontSize="18px"
})

const appendbest = (data, acontainer) => {
  acontainer.innerHTML = "";
  data.forEach((ele) => {
    let div1 = document.createElement("div");
  //   div1.style.backgroundColor = "pink";

    let image = document.createElement("img");
    image.src = ele.Image;

    let company = document.createElement("p");
    company.innerText = ele.company;
    company.style.fontSize ="18px"
    company.className="company"

    let desc = document.createElement("p");
    desc.innerText = ele.desc;
    desc.className="desc09"
    desc.style.fontSize ="17px"
    desc.style.marginTop ="16px"
    desc.style.color ="#686666"
    desc.style.fontWeight ="000"

    let shipping = document.createElement("p");
    shipping.innerText = ele.shipping;
    shipping.className="shipping09"
    shipping.style.fontSize ="18px"
    shipping.style.color ="#686666"

    let price = document.createElement("h2");
    price.innerText = ele.price;
    price.className="price"

    let strikethrough = document.createElement("p");
    strikethrough.innerText = ele.strikethrough;
    strikethrough.className="strikethrough"
    strikethrough.style.textDecoration ="line-through"

    let star = document.createElement("img");
    star.src = ele.star_img;
    star.className="star09"

    let dots = document.createElement("img");
    dots.src = ele.dots;
    dots.className="dots09"

    div1.append(image,dots, company,desc, price, strikethrough,star,shipping);
    acontainer.append(div1);
  });
}

let All_new_arrival_container = document.getElementById("container_data09")
appendbest(All_new_arrival_Arr, All_new_arrival_container);


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

function display(){
  let nameS=JSON.parse(localStorage.getItem("signIn"))||[];
nameS.forEach((el)=>{
  let name=document.getElementById("main_nav976_031");
  name.innerText="Hi, "+el.Fname;
})
}
display();