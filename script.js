const modal = document.querySelector('.modal');
const button = document.querySelector('.clickButton');
const cross = document.querySelector('.cross');

console.log(modal);
console.log(button);

button.addEventListener("click", function(){
    modal.classList.add("open");
});

cross.addEventListener("click", function(){
    modal.classList.remove("open");
    modal.classList.add("hide");
    setTimeout(function (){
        modal.classList.remove("hide");
    }, 200);
});
