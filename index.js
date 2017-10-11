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
  kittens.append(name)  // "append" method adds element to end of array without altering original array
  return kittens
}
