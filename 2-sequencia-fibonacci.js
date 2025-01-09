function isFibonacci(num) {
  if (num < 0) return false;

  let a = 0,
    b = 1,
    temp;

  while (a < num) {
    temp = a;
    a = b;
    b = temp + b;
  }

  return a === num;
}

const numero = 21;

if (isFibonacci(numero)) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
