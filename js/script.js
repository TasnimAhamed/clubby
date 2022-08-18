// Stop Propagation

document.querySelector(".notification .dropdown-menu").addEventListener("click",(e)=>{
    e.stopPropagation();                 
})
document.querySelector(".profile .dropdown-menu").addEventListener("click",(e)=>{
    e.stopPropagation();                 
})


// Show public budget

const showPublicWrapper=document.getElementById('show--public')
const showPublicToogler=document.getElementById('showPublic')

showPublicToogler.addEventListener('change',function(e){
    showPublicWrapper.classList.toggle('active')
})