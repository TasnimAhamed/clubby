// Stop Propagation

document.querySelector(".notification .dropdown-menu").addEventListener("click",(e)=>{
    e.stopPropagation();                 
})
document.querySelector(".profile .dropdown-menu").addEventListener("click",(e)=>{
    e.stopPropagation();                 
})
