const button = document.querySelector("button");
const input = document.querySelector(".inputClass");
const customAlert = document.querySelector('.alert');
const alertDescription = document.querySelector('#description');

let inputValue = "";

const onChange = (event) => {
    inputValue = event.target.value;
}   

const buttonClicked = () => {

    // Different operators:  === / !== / < / > / <= / >= / && / ||

    if(inputValue.length !== 0){
        customAlert.classList.toggle('show');
        alertDescription.innerHTML = inputValue;
    }else {
        alert("Please type in some value...")
    }

    // This is a commentar...
}

button.addEventListener("click",buttonClicked);
input.addEventListener('input', onChange);
