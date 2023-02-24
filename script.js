const toggleBtn = document.querySelector("#toggle-btn");
const li =document.querySelector('.li-list')



toggleBtn.addEventListener("click", () => {
    li.classList.toggle('show');
    if (li.classList.contains('show')) {
        toggleBtn.classList.remove('fa fa-bars');
        toggleBtn.classList.add('fa-solid fa-xmark');
    }else {
        toggleBtn.classList.remove('fa-solid fa-xmark');
        toggleBtn.classList.add('fa fa-bars');   
    }
})

