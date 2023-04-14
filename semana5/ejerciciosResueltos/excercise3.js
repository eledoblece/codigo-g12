function numeroRandom(min, max){
  //Generar un número al azar entre 15 y 34 y devolverlo
  const number = Math.floor(Math.random()*(max-min+1)+min)
  return number
}

const result = numeroRandom(15, 34);
console.log(result);