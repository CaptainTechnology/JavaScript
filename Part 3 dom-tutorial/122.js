const allButtons = document.querySelectorAll(".my-buttons button");


for(let button of allButtons){
    button.addEventListener("click", function(event){
        console.log(this);
        console.log(event);
    })
}

// for(let i = 0 ; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }
// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this);
//         });
// })

// console.log('hello')