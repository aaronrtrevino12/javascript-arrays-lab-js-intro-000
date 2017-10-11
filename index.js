// const app = "I don't do much."

// function Arrays(){
//   function beforeEach(){
//       window.kittens = ['Milo', 'Otis', 'Garfield'];
//   }
// }

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
