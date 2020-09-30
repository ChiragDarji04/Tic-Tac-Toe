function reset() {
  var num;
  for (num = 1; num <= 9; num++) {
    document.getElementById(num).value = "";
    char = "X";
    won = 1;
  }
}

var won = 1;

var char = "X";

function block1() {
  if (document.getElementById("1").value == "") {
    document.getElementById("1").value = char;
    check();
  }
  checkwin();
}

function block2() {
  if (document.getElementById("2").value == "") {
    document.getElementById("2").value = char;
    check();
  }
  checkwin();
}

function block3() {
  if (document.getElementById("3").value == "") {
    document.getElementById("3").value = char;
    check();
  }
}

function block4() {
  if (document.getElementById("4").value == "") {
    document.getElementById("4").value = char;
    check();
  }
  checkwin();
}

function block5() {
  if (document.getElementById("5").value == "") {
    document.getElementById("5").value = char;
    check();
  }
  checkwin();
}

function block6() {
  if (document.getElementById("6").value == "") {
    document.getElementById("6").value = char;
    check();
  }
  checkwin();
}

function block7() {
  if (document.getElementById("7").value == "") {
    document.getElementById("7").value = char;
    check();
  }
  checkwin();
}

function block8() {
  if (document.getElementById("8").value == "") {
    document.getElementById("8").value = char;
    check();
  }
  checkwin();
}

function block9() {
  if (document.getElementById("9").value == "") {
    document.getElementById("9").value = char;
    check();
  }
  checkwin();
}

function check() {
  checkwin();
  if (char == "X") {
    char = "O";
  } else {
    if (char == "O") {
      char = "X";
    }
  }
}

function checkwin() {
  if (won == 1) {
    if (
      document.getElementById("1").value == char &&
      document.getElementById("2").value == char &&
      document.getElementById("3").value == char
    ) {
      alert(char + " wins!");
      won = 2;
    }

    if (
      document.getElementById("4").value == char &&
      document.getElementById("5").value == char &&
      document.getElementById("6").value == char
    ) {
      alert(char + " wins!");
      won = 2;
    }

    if (
      document.getElementById("7").value == char &&
      document.getElementById("8").value == char &&
      document.getElementById("9").value == char
    ) {
      alert(char + " wins!");
      won = 2;
    }

    if (
      document.getElementById("1").value == char &&
      document.getElementById("4").value == char &&
      document.getElementById("7").value == char
    ) {
      alert(char + " wins!");
      won = 2;
    }

    if (
      document.getElementById("2").value == char &&
      document.getElementById("5").value == char &&
      document.getElementById("8").value == char
    ) {
      alert(char + " wins!");
      won = 2;
    }

    if (
      document.getElementById("3").value == char &&
      document.getElementById("6").value == char &&
      document.getElementById("9").value == char
    ) {
      alert(char + " wins!");
      won = 2;
    }

    if (
      document.getElementById("1").value == char &&
      document.getElementById("5").value == char &&
      document.getElementById("9").value == char
    ) {
      alert(char + " wins!");
      won = 2;
    }

    if (
      document.getElementById("3").value == char &&
      document.getElementById("5").value == char &&
      document.getElementById("7").value == char
    ) {
      alert(char + " wins!");
      won = 2;
    }

    if (won == 2) {
      reset();
    }
  }
}
