import { Navbar } from "../components/Side_Navbar.js";
let nav=document.getElementById("side_navbar_299")
nav.innerHTML=Navbar()

let men_Data=[
    {
        img:`https://n.nordstrommedia.com/id/06ede336-1ab7-4564-b64e-056e4357ca9d.jpeg?h=1224&w=1224`,
        heading:"Men's Special Occasion Dressing Up to 65% Off",
        content:"Event ends in 2 days, 20 hours, and 14 minutes"
    },
    {
        img:`https://n.nordstrommedia.com/id/2f629662-35ed-411c-8875-fef93a3f5b2a.jpeg?h=1224&w=1224`,
        heading:"Men's Best Swimwear Under $40",
        content:"Event ends in 2 days, 20 hours, and 14 minutes"
    },
    {
        img:`https://n.nordstrommedia.com/id/2a7e87e0-912b-4666-adf4-79c872bd7a4a.jpeg?h=1224&w=1224`,
        heading:"Fall Favorite Boots for Men Up to 60% Off",
        content:"Event ends in 2 days, 20 hours, and 14 minutes"
    },
    {
        img:`https://n.nordstrommedia.com/id/ee8966d6-7bee-45bf-a4d7-9e2baabe0638.jpeg?h=1224&w=1224`,
        heading:"Men's Button-Ups, Tees & More Up to 70% Off",
        content:"Event ends in 2 days, 20 hours, and 14 minutes"
    },
    {
        img:`https://n.nordstrommedia.com/id/5dd2749b-c454-4c4a-92bb-f878d5fc42da.jpeg?h=1224&w=1224`,
        heading:"Men's PUMA & More from $20",
        content:"Event ends in 20 hours and 14 minutes"
    },
     {
        img:`https://n.nordstrommedia.com/id/68355bd6-181a-4ec8-bb9f-c3f6a7089a4b.jpeg?h=1224&w=1224`,
        heading:"Men's Ted Baker London & More Up to 55% Off",
        content:"Event ends in 1 day, 20 hours, and 14 minutes"
    },
    {
        img:`https://n.nordstrommedia.com/id/cc651825-a1fe-4578-b6b9-6834657168da.jpeg?h=1224&w=1224`,
        heading:"Men's Cool-Weather Jackets Feat. Levi’s® from $60",
        content:"Event ends in 20 hours and 14 minutes"
    },
    {
        img:`https://n.nordstrommedia.com/id/d3c86ea9-47e7-4842-88f0-1ae3deb843f6.jpeg?h=1224&w=1224`,
        heading:"Men's Denim Bestsellers Up to 70% Off",
        content:"Event ends in 1 day, 20 hours, and 14 minutes"
    },
    {
        img:`https://n.nordstrommedia.com/id/359b06fa-14f8-49f9-b049-bde644e9e0bd.jpeg?h=1224&w=1224`,
        heading:"Men's Polos for Any Occasion from $25",
        content:"Event ends in 20 hours and 14 minutes"
    },
    {
        img:`https://n.nordstrommedia.com/id/5d63aae9-1ab7-4cb7-9f0a-f80033efb5d5.jpeg?h=1224&w=1224`,
        heading:"Men's Luxe Shoes Up to 60% Off Feat. Bally",
        content:"Event ends in 1 day, 20 hours, and 14 minutes"
    },
    {
        img:`https://n.nordstrommedia.com/id/6b4e5f1e-ea37-4107-978d-3beef6bd54e7.jpeg?h=1224&w=1224`,
        heading:"Men's Comfort Shoes Up to 50% Off Feat. Nunn Bush",
        content:"Event ends in 1 day, 20 hours, and 14 minutes"
    },
]

const append_data=()=>{
    let box=document.getElementById("child_one_299")
    men_Data.forEach(ele => {
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
append_data()