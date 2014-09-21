function fizzBuzz(number){
  if(number % 5 === 0 && number % 3 === 0){
    return "fizzbuzz";
  }
  if(number % 3 === 0){
    return "fizz";
  }
  else if(number % 5 === 0){
    return "buzz";
  }
  return number;
}
