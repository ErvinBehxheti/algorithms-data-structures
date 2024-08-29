for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}

// This code prints out 6 five times if we initialize with var but if we do it with let it works correctly, var is function scoped but let is block scoped;

function foo() {
  console.log(a); // 2
}

function bar() {
  var a = 3;
  foo();
}

var a = 2;
bar();
