const toggleBtn = document.querySelector("#toggle-btn");
const li =document.querySelector('.li-list')

console.log(li)

toggleBtn.addEventListener("click", () => {
li.classList.toggle('show')
    if (li.classList.contains("show")){
        toggleBtn.textContent = 'x';
    }else{
        toggleBtn.textContent = '=';
    }
    
})