// Stop Propagation

document.querySelector(".notification .dropdown-menu").addEventListener("click",(e)=>{
    e.stopPropagation();                 
})
document.querySelector(".profile .dropdown-menu").addEventListener("click",(e)=>{
    e.stopPropagation();                 
})
document.querySelector(".club-mesage--profile-img .dropdown-menu")?.addEventListener("click",(e)=>{
    e.stopPropagation();                 
})


// Show public budget

const showPublicWrapper=document.getElementById('show--public')
const showPublicToogler=document.getElementById('showPublic')

showPublicToogler?.addEventListener('change',function(e){
    showPublicWrapper.classList.toggle('active')
})

const addToGoal=document.getElementById('add-to-goal')
const addToGoalToggler=document.getElementById('addToGoalToggler')
addToGoalToggler?.addEventListener('change',function(e){
    addToGoal.classList.toggle('active')
})


// Selector JS


let selectFields = document.querySelectorAll('.select--field');
let options_wrapper = document.querySelectorAll('.list--items');

const selector= document.querySelectorAll('.custom--selector');
const hidden_inputs=document.querySelectorAll('.hidden_input')

for(let i=0; i<selector.length; i++){
    const singleSelector=selector[i]
    singleSelector.addEventListener('click', function(){
    const selectorOptionsWrapper=singleSelector.querySelector('.list--items');
    const selectText=singleSelector.querySelector('.custom--selector-wrapper .select--field .select--text')
    const selectorOptions=selectorOptionsWrapper.querySelectorAll('.list--item')
    selectorOptionsWrapper.classList.toggle('hide');
    for(let j=0;j<selectorOptions.length;j++){
        const option=selectorOptions[j];
        option.addEventListener('click', function(e){
            const span=option.querySelector('span')
            selectText.innerHTML = option.innerHTML;
            e.stopPropagation()
            selectorOptionsWrapper.classList.add('hide');
        })
    }

})
}
