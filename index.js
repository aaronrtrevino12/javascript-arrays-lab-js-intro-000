// const app = "I don't do much."

// function Arrays(){
//   function beforeEach(){
//       window.kittens = ['Milo', 'Otis', 'Garfield'];
//   }
// }

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)  // "push" method adds element to end altering original array
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)  // "unshift" method adds element to beginning altering original array
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()  // "pop" method removes last element altering original array
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()  // "shift" method removes first element altering original array
  return kittens
}

function appendKitten(name){
  return [...kittens, name]  // spread operator "..." appends to end (if argument is last) of array without altering original array
  // return kittens
}

function prependKitten(name){
  return [name, ...kittens]  // spread operator "..." prepends to beginning (if argument is first) of array without altering original array
  // return kittens
}
