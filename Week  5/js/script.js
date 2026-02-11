let cartCount=0;

function toggleDarkMode(){
document.body.classList.toggle("dark-mode");
}

function addToCart(){
cartCount++;
document.getElementById("cartItems").innerText=cartCount+" items";
}

function toggleCart(){
document.getElementById("cart").classList.toggle("active");
}

function scrollToTop(){
window.scrollTo({top:0,behavior:'smooth'});
}

window.onscroll=function(){
if(document.documentElement.scrollTop>300){
document.getElementById("topBtn").style.display="block";
}else{
document.getElementById("topBtn").style.display="none";
}
}

function updatePrice(){
let value=document.getElementById("priceRange").value;
document.getElementById("priceValue").innerText=value;
filterBooks();
}

function filterBooks(){
let genre=document.getElementById("genreFilter").value;
let price=document.getElementById("priceRange").value;
let books=document.querySelectorAll(".book-card");

books.forEach(book=>{
let bookPrice=book.getAttribute("data-price");
if((genre==="all"||book.classList.contains(genre)) && bookPrice<=price){
book.style.display="block";
}else{
book.style.display="none";
}
});
}
