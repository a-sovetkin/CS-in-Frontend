function fizzbuzz( next = 1n, last = 10n ) {
  let res;

  if ((typeof(next) !== 'bigint') || (typeof(last) !== 'bigint')) {
    return console.log('wrong type');
  }

  if (next > last) return console.log('wrong order');

  while ( next <= last ) {
    res = next;
    (next % 3n === 0n) && (res = 'Fizz');
    (next % 5n === 0n) && (res = 'Buzz');
    ((next % 3n === 0n) & (next % 5n === 0n)) && (res = 'FizzBuzz!');
    console.log(next , res);
    next++;
  }
}

fizzbuzz(1n,17n);
fizzbuzz(4n, 2);
fizzbuzz(4n, 1n);


// 1n 1n
// 2n 2n
// 3n 'Fizz'
// 4n 4n
// 5n 'Buzz'
// 6n 'Fizz'
// 7n 7n
// 8n 8n
// 9n 'Fizz'
// 10n 'Buzz'
// 11n 11n
// 12n 'Fizz'
// 13n 13n
// 14n 14n
// 15n 'FizzBuzz!'
// 16n 16n
// 17n 17n
// wrong type
// wrong order
