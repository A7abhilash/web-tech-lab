const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const test1 = parseInt(form["test-1"].value, 10);
  const test2 = parseInt(form["test-2"].value, 10);
  const test3 = parseInt(form["test-3"].value, 10);

  // console.log({test1,test2,test3});

  const high1 = Math.max(test1, Math.max(test2, test3));
  const low = Math.min(test1, Math.min(test2, test3));
  const high2 = test1 + test2 + test3 - (high1 + low);

  const avg = (high1 + high2) / 2;

  // alert the values
  alert(`
            USN: ${form.usn.value} \n
            Subject Code: ${form["sub-code"].value} \n
            Avg of best 2 marks: ${avg} \n
        `);
});
