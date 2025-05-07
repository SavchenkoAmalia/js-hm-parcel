import { yourName } from './greet.js'

const input = document.getElementById('nameInput');
const btn = document.getElementById('greetBtn');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    const name = input.value.trim();
    result.textContent = name ? yourName(name) : "Введіть ім'я";
})