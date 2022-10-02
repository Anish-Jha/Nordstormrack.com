

import navbar from "../components/main_nav.js"
let navbarDiv=document.getElementById('main_nav976')
navbarDiv.innerHTML=navbar();

import footer from "../components/mainFooter.js"
let main_footer=document.getElementById('footer1');
main_footer.innerHTML=footer();


//shoes
let clearance_Arr = [
    {
        Image:
          "https://n.nordstrommedia.com/id/sr3/b01f882a-b4cc-402c-901c-23f0dbbf0f0c.jpeg?h=365&w=240&dpr=2",
          company: "Open Edit",
          price: "$ 33.73 (62% OFF)",
          strikethrough: "$ 89.95",
          dots:"./images/c6.png",
        shipping:"Free Shipping on Orders $89+",
        desc:"Remmy Twist Sandal (Women)",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/f4c8c06d-9352-4453-ad3b-9b9ce8450389.jpeg?h=365&w=240&dpr=2",
          company: "Abound",
          price: "74.97 (72% OFF)",
          strikethrough: "$ 329.95",
          dots:"./images/c8.png",
        shipping:"Free Shipping on Orders $89+",
        desc:"Leyo Flip Flop Sandal (Women)",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      
      {
        Image:
          "https://n.nordstrommedia.com/id/sr3/7a5c452e-c2c0-4f66-a5c9-57ddb463ff64.jpeg?h=365&w=240&dpr=2",
          company: "Steve Madden",
          price: "74.97 (72% OFF)",
          strikethrough: "$ 129.95",
          dots:"./images/c5.png",
        shipping:"Free Shipping on Orders $89+",
        desc:"Averill Strappy Studded Gladiator Sandal (Women)",
          star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
      },
      {
          Image:
            "https://n.nordstrommedia.com/id/sr3/7c284a0a-f199-46eb-9211-d1c5415b3ebb.jpeg?h=365&w=240&dpr=2",
            company: "Sterling Forever",
            price: "24.97 (72% OFF)",
            strikethrough: "$ 89.95",
            dots:"./images/c6.png",
        shipping:"Free Shipping on Orders $89+",
        desc:"14K Gold Plated Beaded Stretch Bracelet Set",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
        {
          Image:
            "https://n.nordstrommedia.com/id/sr3/3bcf368b-a720-4d67-97d0-52deaf76c3e9.jpeg?h=365&w=240&dpr=2",
            company: "DV by Dolce Vita.",
            price: "89.97 (52% OFF)",
            strikethrough: "$16.49 $45.00",
            dots:"./images/c2.png",
        shipping:"Free Shipping on Orders $89+",
        desc:"Jelly Double Strap Slide Sandal (Women)",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
        {
          Image:
            "https://n.nordstrommedia.com/id/sr3/ed82d78e-e375-4e8b-b386-65b9b9a91d2e.jpeg?h=365&w=240&dpr=2",
            company: "MIA",
            price: "769.97 (58% OFF)",
            strikethrough: "$23.99-$24.99 $59.99",
            dots:"./images/c1.png",
        shipping:"Free Shipping on Orders $89+",
        desc:"Cimone Sandal (Women)",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
        {
          Image:
            "https://n.nordstrommedia.com/id/sr3/4443e024-bfa1-4417-8327-a059e4b8a16c.jpeg?h=365&w=240&dpr=2",
            company: "SOREL",
            price: "34.97 (72% OFF)",
            strikethrough: "$ 59.95",
            dots:"./images/c7.png",
        shipping:"Free Shipping on Orders $89+",
        desc:"Zaza Bubble Strap Sandal (Women)",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
        {
          Image:
            "https://n.nordstrommedia.com/id/sr3/1b9a5778-706f-4703-8220-b87f39341021.jpeg?h=365&w=240&dpr=2",
            company: "Sterling Forever",
            price: "64.97" ,
            strikethrough: "$ 99.95",
            dots:"./images/c3.png",
        shipping:"Free Shipping on Orders $89+",
        desc:"Cassandra Platform Penny Loafer (Women)",
            star_img :"https://www.kindpng.com/picc/m/361-3616540_4-star-rating-blue-hd-png-download.png",
        },
        {
            Image:
              "https://n.nordstrommedia.com/id/sr3/4decc746-7706-4f7b-b904-923122a515dc.jpeg?h=365&w=240&dpr=2",
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
              "https://n.nordstrommedia.com/id/sr3/4ca5a9e1-4dc4-4ff6-aa63-c3ecba3d02cd.jpeg?h=365&w=240&dpr=2",
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
              "https://n.nordstrommedia.com/id/sr3/79b1830c-e546-4242-ab0b-4ad7224d379e.jpeg?h=365&w=240&dpr=2",
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
                "https://n.nordstrommedia.com/id/sr3/d436b533-ff4c-401f-8ea8-0c2ae57dbdae.jpeg?h=365&w=240&dpr=2",
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
                "https://n.nordstrommedia.com/id/sr3/4beb64d7-2559-4d64-893d-ef74f04597ce.jpeg?h=365&w=240&dpr=2",
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
                "https://n.nordstrommedia.com/id/sr3/2a478dee-5bcd-4188-ada1-5a0caa11982a.jpeg?h=365&w=240&dpr=2",
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
                "https://n.nordstrommedia.com/id/sr3/14096510-6ed7-4016-b7c8-e0299909da1b.jpeg?h=365&w=240&dpr=2",
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
                "https://n.nordstrommedia.com/id/sr3/eed12429-1995-4bc4-8495-fd4c964b25a5.jpeg?h=365&w=240&dpr=2",
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
  //by default bold
  newArrival_items.style.fontWeight="bold";

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
  
  let clearance_container = document.getElementById("container_data09")
  appendbest(clearance_Arr, clearance_container);

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