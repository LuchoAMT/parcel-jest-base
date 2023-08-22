function fizzbuzz(n){
  if(n%3 == 0 && n%5 == 0){
    return "FizzBuzz";
  }
  else if(n%5 == 0){
    return "Buzz";
  }
  else if(n%3 == 0){
    return "Fizz";
  }
  return n+"";
}

function SecuenciaFB(m){
  let result = "";
  for(let i = 1; i <= m; i++){
    result += fizzbuzz(i) + "</br>";
  }
  return result;
}

const metods= {SecuenciaFB, fizzbuzz};

export default metods;