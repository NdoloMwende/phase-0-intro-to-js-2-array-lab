// Write your solution here!
let cats= ['Milo', 'Otis', 'Garfield']


function destructivelyAppendCat(name){
  cats.push(name);
}
destructivelyAppendCat("Ralph");
console.log(cats);

function destructivelyPrependCat(name){
    cats.unshift(name)
}
destructivelyPrependCat("Bob");
console.log(cats)

function destructivelyRemoveLastCat(){
    cats.pop()
}
destructivelyRemoveLastCat();
console.log(cats);

function destructivelyRemoveFirstCat(){
    cats.shift()
}
destructivelyRemoveFirstCat();
console.log(cats);

function appendCat(name){
    return [...cats,name]
}
console.log(appendCat("Broom"));

function prependCat(name){
    return [name,...cats]
}
console.log(prependCat("Arnold"));

function removeLastCat(){
    return cats.slice(0,-1)
}
console.log(removeLastCat(cats));

function removeFirstCat(){
   return cats.slice(1)
}
console.log(removeFirstCat(cats));