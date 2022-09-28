import { Navbar } from "../components/Side_Navbar.js";
let nav=document.getElementById("side_navbar_299")
nav.innerHTML=Navbar()

let women_Data=[
    {
        img:`https://n.nordstrommedia.com/id/b39c7585-2424-4fe6-ba3c-53b295c58dda.jpeg?h=1224&w=1224`,
        heading: "Thigh-High & Over-the-Knee Boots",
        content: "Event ends in 2 days, 20 hours, and 33 minutes" ,
    },
    {
        img:`https://n.nordstrommedia.com/id/b6a5d386-6f5d-49f0-ba27-49cdbe816b93.jpeg?h=1224&w=1224`,
        heading:"Campus Kicks Feat. Superga Up to 55% Off",
        content: "Event ends in 2 days, 20 hours, and 33 minutes" ,
    },
    {
        img:`https://n.nordstrommedia.com/id/4ca652f9-64a1-4d75-a364-88ad98b6e459.jpeg?h=1224&w=1224`,
        heading:"Nicholas Up to 60% Off" ,
        content: "Event ends in 2 days, 20 hours, and 33 minutes" ,
    },
    {
        img:`https://n.nordstrommedia.com/id/72f68eee-eee0-4839-b890-2930c57a5a3e.jpeg?h=1224&w=1224`,
        heading:"Best of Intimates Feat. Natori & Wacoal" ,
        content: "Event ends in 2 days, 20 hours, and 33 minutes" ,
    },
    {
        img:`https://n.nordstrommedia.com/id/18eb01df-e1b6-4e66-ad56-bd46bbb74dc2.jpeg?h=1224&w=1224`,
        heading:"Women's Special Occasion Dressing Up to 60% Off" ,
        content: "Event ends in 2 days, 20 hours, and 33 minutes" ,
    },
    {
        img:`https://n.nordstrommedia.com/id/c8434a0d-4911-4b30-991d-8a8c9fd1fd78.jpeg?h=1224&w=1224`,
        heading:"Women's Casual Dressing Up to 60% Off" ,
        content: "Event ends in 2 days, 20 hours, and 33 minutes" ,
    },
    {
        img:`https://n.nordstrommedia.com/id/498874ab-e092-4a9c-a619-2217c79af226.jpeg?h=1224&w=1224`,
        heading:"Sanctuary Swimwear & More Up to 60% Off",
        content: "Event ends in 2 days, 20 hours, and 33 minutes" ,
    },
    {
        img:`https://n.nordstrommedia.com/id/b2607887-0182-4a25-a67f-912c20e1a7a3.jpeg?h=1224&w=1224`,
        heading: "Must-Have Fall Scarves & More Up to 65% Off",
        content: "Event ends in 2 days, 20 hours, and 33 minutes" ,
    },
    {
        img:`https://n.nordstrommedia.com/id/4a804012-542b-436a-be75-f9b062871e64.jpeg?h=1224&w=1224`,
        heading:"Reworked Chain Necklaces & More Up to 60% Off" ,
        content: "Event ends in 2 days, 20 hours, and 27 minutes" ,
    },
    {
        img:`https://n.nordstrommedia.com/id/76b43812-effd-469d-a1d2-1f203431e36f.jpeg?h=1224&w=1224`,
        heading: "Women's Designer Sunglasses Feat. Fendi",
        content: "Event ends in 1 day, 20 hours, and 27 minutes" ,
    },
    {
        img:`https://n.nordstrommedia.com/id/b17ea6b4-1658-4359-8b53-b17d6659b1c3.jpeg?h=1224&w=1224`,
        heading: "Fall Jeans Under $100",
        content:"Event ends in 1 day, 20 hours, and 26 minutes"  ,
    },
    {
        img:`https://n.nordstrommedia.com/id/7d198165-b313-4de5-b673-6241bda08402.jpeg?h=1224&w=1224`,
        heading: "Boots for Everyone Under $100",
        content: "Event ends in 20 hours and 26 minutes" ,
    },
    {
        img:`https://n.nordstrommedia.com/id/4274d8ee-3ea0-49bf-91dc-a8d460eac634.jpeg?h=1224&w=1224`,
        heading: "Luggage & Travel Style Blowout",
        content: "Event ends in 20 hours and 26 minutes" ,
    },
    {
        img:`https://n.nordstrommedia.com/id/a5a20f82-a157-4fff-974e-84d44f7a109c.jpeg?h=1224&w=1224`,
        heading: "Ted Baker Up to 55% Off",
        content: "Event ends in 1 day, 20 hours, and 26 minutes" ,
    },
    {
        img:`https://n.nordstrommedia.com/id/92237092-6666-4328-9afd-aaf3c16685c3.jpeg?h=1224&w=1224`,
        heading:"LAGOS Fine Jewelry",
        content:"Event ends in 1 day, 20 hours, and 22 minutes"
    },
    {
        img:`https://n.nordstrommedia.com/id/770c8279-f0c6-4a83-8df2-2856483d6e14.jpeg?h=1224&w=1224`,
        heading:"Fall Comfort Shoes Feat. Børn Up to 60% Off",
        content:"Event ends in 1 day, 20 hours, and 22 minutes"
    },
    {
        img:`https://n.nordstrommedia.com/id/0356105a-3b40-497b-b527-7c3bcd2b108b.jpeg?h=1224&w=1224`,
        heading:"Level Up in Platforms Feat. Steve Madden",
        content:"Event ends in 1 day, 20 hours, and 22 minutes"
    },
    {
        img:`https://n.nordstrommedia.com/id/924ae36d-2753-499f-ad4b-7ad9b678cf46.jpeg?h=1224&w=1224`,
        heading:"Dressed-Up Styles Under $100",
        content:"Event ends in 1 day, 20 hours, and 22 minutes"
    },
    {
        img:`https://n.nordstrommedia.com/id/e36ce12c-72ca-498a-be37-d5a64076a173.jpeg?h=1224&w=1224`,
        heading:"Fall Sweater Dresses From $25",
        content:"Event ends in 1 day, 20 hours, and 22 minutes"
    },
    {
        img:`https://n.nordstrommedia.com/id/9d9daea6-15e3-42ac-a12b-dbc5185d1474.jpeg?h=1224&w=1224`,
        heading:"Sweaty Betty & More Up to 60% Off",
        content:"Event ends in 1 day, 20 hours, and 22 minutes"
    },
    {
        img:`https://n.nordstrommedia.com/id/c622c1ad-b0fb-426a-b3f6-57254290bdfa.jpeg?h=1224&w=1224`,
        heading:"Best-Selling Denim Feat. Democracy Up to 60% Off",
        content:"Event ends in 1 day, 20 hours, and 22 minutes"
    }

    
]
const append_Data=()=>{
    let box=document.getElementById("child_div_299")

women_Data.forEach(ele => {
    let div=document.createElement("div")

    let img=document.createElement("img")
    img.src=ele.img
    let h4=document.createElement("h4")
    h4.innerText=ele.heading
    let p=document.createElement("p")
    p.innerText=ele.content
    div.append(img,h4,p)
    box.append(div)
});
}
append_Data()