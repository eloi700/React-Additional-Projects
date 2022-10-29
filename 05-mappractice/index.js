// Challenge 1 - Given an Array of Numbers, return an array of each number, squared
const nums = [1, 2, 3, 4, 5];
const result = nums.map((num) => Math.pow(num, 2));
console.log(result);

// Challenge 2 - Given an Array of Strings, return an array where the first letter of each string is capitalized.

const names = ['alice', 'bob', 'charlie', 'danielle'];
function capLetter(names) {
  return names.map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  });
}
console.log(capLetter(names));

// OR--------------------
const capitalized = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1);
});
console.log(capitalized);

/* Challenge 3 - Given an Array of Strings, return an array of strings that wraps each of the original strings in an HTML-like <p></p> tag.
 e.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
 return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemonNames = ['Bulbasaur', 'Charmander', 'Squirtle'];
function tagPokemon(pokemonNames) {
  return pokemonNames.map((pokemonName) => {
    return `<p>${pokemonName}</p>`;
  });
}

console.log(tagPokemon(pokemonNames));

const tagPokemonNames = pokemonNames.map((mon) => {
  `<p>${mon}</p>`;
});

console.log(tagPokemonNames);

// Challenge - 4 (Using Map, Replace & Slice)
// Change every third letter into Capital R in the following words
const words = ["flkdsj", "kjlklkj", "hjlj;ujm", "lhjlko", "qagjpk"]
const mWords = words.map((w => {
    // return w.slice(0,2) + 'R' + w.slice(3);
    // return w.replace(/(.{2,2}).(.*)/, '$1R$2');
    return w.replace(w.slice(2),"R") + (w.slice(3));
}))

console.log(mWords);
