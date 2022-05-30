//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
//alert('hello!');

let starImage = document.querySelector('img');

starImage.onclick = function () {
    let mySrc = starImage.getAttribute('src');
    if (mySrc === 'images/ada_superior.jpg') {
        starImage.setAttribute('src', 'images/ada_engineer.jpg');
    } else {
        starImage.setAttribute('src', 'images/ada_superior.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Ada is watching you, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ada is watching you, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
