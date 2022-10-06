const hamburger=document.querySelector(".hamburger");
const navList=document.querySelector(".navlist");
const hoverList=document.querySelector(".hover_list");
const navLink=document.querySelector("nav-link");
const searchButton=document.querySelector("fa-magnifying-glass");
hamburger.addEventListener("click",()=>{
	hamburger.classList.toggle("active");
	navList.classList.toggle("active");
})
document.querySelectorAll(".navitem").forEach(n => n.addEventListener("click",() =>{
	hamburger.classList.remove("active");
	navList.classList.remove("active");

}))

navLink.addEventListener("click",()=>{
	hoverList.classList.toggle("active");
	
})

