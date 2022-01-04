(function () {
  const n = prompt("Generate fibanocci series:\nEnter a no.: ");

  let a = 0,
    b = 1,
    c = 0;

  let ans = [a, b];

  for (let i = 2; i <= n; i++) {
    c = a + b;
    ans.push(c);

    a = b;
    b = c;
  }

  alert("Check the console for the answer!");
  console.log("Fibanocci series: ");
  console.log(ans);
})();
