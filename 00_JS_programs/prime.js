(function () {
  const a = parseInt(prompt("Prime Numbers\nEnter lower no.:"));
  const b = parseInt(prompt("Prime Numbers\nEnter higher no.:"));

  let ans = [];

  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
      ans.push(i);
    }
  }

  alert("Check the console for the answer!");
  console.log(`Prime nos. between ${a} & ${b}: `);
  console.log(ans);
})();

function isPrime(n) {
  for (let j = 2; j <= n / 2; j++) {
    if (n % j == 0) {
      return false;
    }
  }
  return true;
}
