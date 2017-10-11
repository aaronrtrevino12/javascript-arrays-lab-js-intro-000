const app = "I don't do much."

function Arrays(){
  function beforeEach(){
      window.kittens = ['Milo', 'Otis', 'Garfield'];
  }
}

const kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
