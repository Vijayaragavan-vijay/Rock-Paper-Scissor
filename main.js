let name = prompt('Enter your name?');
const user_stone = document.querySelector('#user-stone');
const user_paper = document.querySelector('#user-paper');
const user_scissor = document.querySelector('#user-scissor');
user_stone.setAttribute('name', 'stone');
user_paper.setAttribute('name', 'paper');
user_scissor.setAttribute('name', 'scissor');

let player_choice = document.querySelector('#player_choice');
let comp_choice = document.querySelector('#comp_choice');

let result = document.querySelector('.result');

const comp_stone = document.querySelector('#comp-stone');
const comp_paper = document.querySelector('#comp-paper');
const comp_scissor = document.querySelector('#comp-scissor');
comp_stone.setAttribute('name', 'stone');
comp_paper.setAttribute('name', 'paper');
comp_scissor.setAttribute('name', 'scissor');




let arr = [comp_paper, comp_scissor, comp_stone];

user_stone.addEventListener('click', stone);
user_paper.addEventListener('click', paper);
user_scissor.addEventListener('click', scissor);

function stone() {

    // console.log('hello');
    console.log(user_stone.getAttribute('name'));

    let random = Math.floor(Math.random() * (3) + 0);
    console.log(arr[random].getAttribute('name'));
    if (arr[random].getAttribute('name') === 'stone') {
        console.log('draw');
        result.textContent = 'Match draw 👏';
        result.style.color = 'blue';
    } else if (arr[random].getAttribute('name') === 'paper') {
        console.log('computer wins');
        result.textContent = `${name} Lost 👎`;
        result.style.color = 'red';
    } else if (arr[random].getAttribute('name') === 'scissor') {
        console.log('player wins');
        result.textContent = `${name} Won 👍💫`;
        result.style.color = 'green';
    }
    player_choice.textContent = `${name} choice: stone`;
    comp_choice.innerHTML = `Computer choice: ${arr[random].getAttribute('name')}`
}

function paper() {
    console.log(user_paper.getAttribute('name'));

    let random = Math.floor(Math.random() * (3) + 0);
    console.log(arr[random].getAttribute('name'));

    if (arr[random].getAttribute('name') === 'paper') {
        console.log('draw');
        result.textContent = 'Match draw 👏';
        result.style.color = 'blue';
    } else if (arr[random].getAttribute('name') === 'stone') {
        console.log('player wins');
        result.textContent = `${name} Won 👍💫`;
        result.style.color = 'green';
    } else if (arr[random].getAttribute('name') === 'scissor') {
        console.log('computer wins');
        result.textContent = `${name} Lost 👎`;
        result.style.color = 'red';
    }
    player_choice.textContent = `${name} choice: paper`;
    comp_choice.innerHTML = `Computer choice: ${arr[random].getAttribute('name')}`
}

function scissor() {

    console.log(user_scissor.getAttribute('name'));

    let random = Math.floor(Math.random() * (3) + 0);
    console.log(arr[random].getAttribute('name'));

    if (arr[random].getAttribute('name') === 'scissor') {
        console.log('draw');
        result.textContent = `Match draw 👏`;
        result.style.color = 'blue';
    } else if (arr[random].getAttribute('name') === 'stone') {
        console.log('computer wins');
        result.textContent = `${name} Lost 👎`;
        result.style.color = 'red';
    } else if (arr[random].getAttribute('name') === 'paper') {
        console.log('player wins');
        result.textContent = `${name} Won 👍💫 `;
        result.style.color = 'green';
    }
    player_choice.textContent = `${name} choice: scissor`;
    comp_choice.innerHTML = `Computer choice: ${arr[random].getAttribute('name')}`
}

console.log(name);