function oneThroughTwenty() {
  const resultado = [];

  for(let i = 1; i <=20; i++){
    resultado.push(i)
  }
  return resultado
}
console.log(oneThroughTwenty())

function evensToTwenty() {
    const resultado = [];

    for(let i = 1; i <= 20; i++){
      if(i % 2 === 0){
        resultado.push(i)
      }
    }
    return resultado
}
console.log(evensToTwenty())

function oddsToTwenty() {
  const resultado = [];

  for(let i = 1; i <= 20; i++){
    if(i % 2 !== 0){
      resultado.push(i)
    }
  }
  return resultado
}
console.log(oddsToTwenty())

function multiplesOfFive() {
  const resultado = [];

  for(let i = 1; i <= 100; i++){
    if(i % 5 === 0){
      resultado.push(i)
    }
  }
  return resultado
}
console.log(multiplesOfFive())

function squareNumbers() {
    const resultado = [];

    for(let i = 1; i <= 10; i++){
      resultado.push(i*i)
    }
    return resultado
}
console.log(squareNumbers())

function countingBackwards() {
  const resultado = [];

  for(let i = 20; i >= 1; i--){
    resultado.push(i)
  }
  return resultado
}
console.log(countingBackwards())

function evenNumbersBackwards() {
    const resultado = [];

    for(let i = 20; i >= 1; i--){
      if(i % 2 === 0){
        resultado.push(i)
      }
    }
    return resultado
}
console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
    const resultado = [];

    for(let i = 20; i >= 1; i--){
      if(i % 2 !== 0){
        resultado.push(i)
      }
    }
    return resultado
}
console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
    const resultado = [];

    for(let i = 100; i >=1; i--){
      if(i % 5 === 0){
        resultado.push(i)
      }
    }
    return resultado
}
console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
  const resultado = [];

  for(let i = 10; i >= 1; i--){
      resultado.push(i*i)
    }
    return resultado
  }
  console.log(squareNumbersBackwards())
//call function squareNumbersBackwards

//fazer o teste de mesa agora

