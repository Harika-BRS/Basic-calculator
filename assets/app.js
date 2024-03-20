var calculate = function(s) {
  s = "(" + s + ")";
  let stack = [];
  let temp = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") continue;
    if (s[i] === ")") {
      while (stack[stack.length - 1] !== "(") temp.push(stack.pop());
      stack.pop();
      stack.push(count(temp));
      continue;
    }
    if (isNum(stack[stack.length - 1]) && isNum(s[i])) {
      stack[stack.length - 1] += s[i];
      continue;
    }
    if (s[i] === "-" || s[i] === "+") {
      if (stack.length === 0 || stack[stack.length - 1] === "(")
        stack.push("0");
    }
    stack.push(s[i]);
  }
  return stack[0];
};

function count(temp) {
  temp = temp.reverse();
  while (temp.length !== 1) {
    if (temp[1] === "+") temp[0] = +temp[0] + +temp[2];
    if (temp[1] === "-") temp[0] = +temp[0] - +temp[2];
    temp.splice(1, 2);
  }
  return temp.pop();
}

function isNum(str) {
  return /[0-9]+/.test(str);
}

function calculateExpression() {
  const input = document.getElementById("intervalsInput").value;
  const result = calculate(input);
  document.getElementById("output").innerText = "Output: " + result;
}

document.getElementById("submit").addEventListener("click", calculateExpression);

document.getElementById("intervalsInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    calculateExpression();
  }
});

// Add this script to clear the input field on page load
document.addEventListener('DOMContentLoaded', function() {
  var intervalsInput = document.getElementById('intervalsInput');
  intervalsInput.value = ''; // Set the input value to an empty string
});
