let input = document.getElementById("upperValue");

function addToInput(param) {

  if (input.innerHTML == '-') {
    input.innerHTML = '';
  }
  
  input.innerHTML = input.innerHTML + param;
}

function clea() {
  input.innerHTML = '-';
  document.getElementById("result").innerHTML = '';
}

function equally() {
  document.getElementById("result").innerHTML = eval(input.innerHTML);
}