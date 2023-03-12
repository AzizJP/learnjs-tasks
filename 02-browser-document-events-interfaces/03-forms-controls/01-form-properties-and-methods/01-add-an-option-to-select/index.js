'use strict';

const genres = document.getElementById('genres');
const selectedOption = genres.options[genres.selectedIndex];
const newOption = new Option('Классика', 'classic');

genres.append(newOption);

newOption.selected = true;

console.log(selectedOption.value);
console.log(selectedOption.text);
