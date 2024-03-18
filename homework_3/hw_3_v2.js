//  Написать программу FizzBuzz используя BigInt

function fizzbuzz() {
  let num = 1n;
  return {
    next:  () => {
      if (num <= 17n) {
        let res = num;
        (num % 3n === 0n) && (res = 'Fizz');
        (num % 5n === 0n) && (res = 'Buzz');
        ((num % 3n === 0n) & (num % 5n === 0n)) && (res = 'FizzBuzz!');
        console.log(num, res);
        num++;
        return { done: false, value: res }
      }
      else {
        return { done: true}
      }
    }
  }
}

const myFizzBazz = fizzbuzz();

myFizzBazz.next(); // 1n
myFizzBazz.next(); // 2n
myFizzBazz.next(); // Fizz
myFizzBazz.next(); // Buzz
myFizzBazz.next(); // Fizz
