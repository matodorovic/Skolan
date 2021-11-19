let myButton = document.querySelector('button');
const title = document.querySelector('h1');

function changeIt() {
document.querySelector("#demo").innerHTML = "My first JavaScript!";
}

let changing = document.querySelector(".change");

changing.addEventListener("click", () => { 
    changeIt();
    console.log("Hello my Friend!"); 
});

myButton.addEventListener("click", () => {
        title.innerHTML = "I NEED TO PRACTISE MORE JAVASCRIPT TO PASS!";
        myButton.disable = true;
        myButton.style. backgroundColor = "gray";
        myButton.style.borderColor = "darkgray";
    }
 );


