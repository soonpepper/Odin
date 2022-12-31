console.log("Starting up...");

const container = document.querySelector('#container');
// selects the #container div (don't worry about the syntax, we'll get there)

console.dir(container.firstElementChild);                      
// selects the first child of #container => .display             

const btn = document.querySelector('#btn');

btn.addEventListener('click', function (e){
    e.target.style.background = 'red';
    alert("HAHAHA! YOU GOT A VIRUS UR FUCKED!!! >:3");
    console.log("Virus uploaded onto client.");
});

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});

// div.style.color = 'pink';
// div.style.cssText='color: green background: grey;';
// div.setAttribute('style', 'color: blue; background: white;');
// div.innerHTML = '<span>Hwllo World!</span>'
// div.textContent = 'Hello World!';

// your JavaScript file
// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';
// content.textContent = 'Thing';

// container.appendChild(content);

// div.innerHTML = '<h1> thing <h1>';
console.log('Ran Script!');