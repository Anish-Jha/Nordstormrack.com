import { Navbar } from "../components/Side_Navbar.js";
let nav=document.getElementById("side_navbar_299")
nav.innerHTML=Navbar()

let Kids_Data=[
    {
        img:`https://n.nordstrommedia.com/id/aa3fe51f-8503-4723-9c29-065f0738c4a0.jpeg?h=1224&w=1224`,
        heading:"Kids' Denim Looks for Fall",
        content:"Event ends in 2 days, 20 hours, and 8 minutes"
    },
    {
        img:`https://n.nordstrommedia.com/id/946656c9-be4b-498b-b0a4-6cf7b95e4d7a.jpeg?h=1224&w=1224`,
        heading:"Kids' Sneakers Feat. DC Shoes",
        content:"Event ends in 2 days, 20 hours, and 8 minutes"
    },
    {
        img:`https://n.nordstrommedia.com/id/03c165f5-d33f-43b8-bf33-32e700c1f85d.jpeg?h=1224&w=1224`,
        heading:"Trendy Tween Outfits & More",
        content:"Event ends in 1 day, 20 hours, and 8 minutes",
        id:"trendy_outlets"
    },
    {
        img:`https://n.nordstrommedia.com/id/411b2030-58e6-4c39-9559-ce1fdedc6c0c.jpeg?h=1224&w=1224`,
        heading:"Kids' Easy-On Sneakers & More",
        content:"Event ends in 1 day, 20 hours, and 8 minutes",
        id:"snakers"
    },
    {
        img:`https://n.nordstrommedia.com/id/a3faf5d5-270a-44c7-93e9-eef7fb657cbb.jpeg?h=1224&w=1224`,
        heading:"Sleepover Styles for Kids Up to 60% Off",
        content:"Event ends in 1 day, 20 hours, and 8 minutes",
        id:"sleepover"
    },
]

let box_s=document.getElementById("child_div_Zero_299")
    
        let img=document.createElement("img")
        img.src=`https://n.nordstrommedia.com/id/ae8ec28b-0671-42a5-90a2-c776e29d134b.jpeg?h=1224&w=1224`
        let h4=document.createElement("h4")
        h4.innerText="Styles for Baby's First Fall Feat. Burt's Bees"
        let p=document.createElement("p")
        p.innerText='Event ends in 2 days, 23 hours, and 57 minutes'
        box_s.append(img,h4,p)

const append_data=()=>{
    let box=document.getElementById("child_div_one_299")
    Kids_Data.forEach(ele => {
        let div=document.createElement("div")
    
        let img=document.createElement("img")
        img.src=ele.img
        let h4=document.createElement("h4")
        h4.innerText=ele.heading
        let p=document.createElement("p")
        p.innerText=ele.content
        if(ele.id==="trendy_outlets"){
            div.addEventListener("click",()=>{
                window.location.href="./kidsoutlets_navbar.html"
            } )
        }
        if(ele.id==="snakers"){
            div.addEventListener("click",()=>{
                window.location.href="./kids_snakers.html"
            } )
        }
        if(ele.id==="sleepover"){
            div.addEventListener("click",()=>{
                window.location.href="./sleepover_styles.html"
            } )
        }
        div.append(img,h4,p)
        box.append(div)
    });
}
append_data()
function Trendy_Outlets(){
    console.log("ho")
}