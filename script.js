const toggleButton = document.getElementById('toggle_button');
const toggleButton2 = document.getElementById('toggle_button2');
const toggleButton3 = document.getElementById('toggle_button3');
const body = document.body;
const toggle = document.getElementById('toggle');
const display = document.getElementById('display');
const numbers = document.querySelectorAll('.number');
const header = document.getElementsByTagName('h1')[0];
const numberButtons = document.querySelectorAll('.numbers');
const themeText = document.querySelectorAll('.theme_text');
const buttons = document.getElementById("buttons");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var dot = document.getElementById("dot");
var add = document.getElementById("plus");
var subtract = document.getElementById("minus");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
const del = document.getElementById("delete");
const reset = document.getElementById("reset");
const equals = document.getElementById("equals");

//theme
toggleButton.classList.add('click');

toggleButton.addEventListener('click' ,function (){
    if (!toggleButton.classList.contains('click')) {
        toggleButton.classList.add('click');
        toggleButton2.classList.remove('click');
        toggleButton3.classList.remove('click');
        body.classList.remove('theme2');
        body.classList.remove('theme3');
         toggle.classList.remove('theme2');
        display.classList.remove('theme2');
        header.classList.remove('theme2');
        buttons.classList.remove('theme2');
        del.classList.remove('color');
        reset.classList.remove('color');
        equals.classList.remove('color');
        toggle.classList.remove('theme3');
        display.classList.remove('theme3');
        header.classList.remove('theme3');
        buttons.classList.remove('theme3');
        del.classList.remove('theme3');
        reset.classList.remove('theme3');
        equals.classList.remove('theme3');

        numbers.forEach(number => {
          number.classList.remove('theme2');
        });

        numberButtons.forEach(button => {
          button.classList.remove('theme2');
        });

        themeText.forEach(text => {
          text.classList.remove('theme2');
        });

        numbers.forEach(number => {
          number.classList.remove('theme3');
        });

        numberButtons.forEach(button => {
          button.classList.remove('theme3');
        });

        themeText.forEach(text => {
          text.classList.remove('theme3');
        });
    }
});

toggleButton2.addEventListener('click' ,function (){
    if (!toggleButton2.classList.contains('click')) {
        toggleButton.classList.remove('click');
        toggleButton2.classList.add('click');
        toggleButton3.classList.remove('click');
        body.classList.remove('theme3');
        body.classList.add('theme2');
        toggle.classList.toggle('theme2');
        display.classList.toggle('theme2');
        header.classList.toggle('theme2');
        buttons.classList.toggle('theme2');
        del.classList.toggle('color');
        reset.classList.toggle('color');
        equals.classList.toggle('color');
        toggle.classList.remove('theme3');
        display.classList.remove('theme3');
        header.classList.remove('theme3');
        buttons.classList.remove('theme3');
        del.classList.remove('color2');
        reset.classList.remove('color2');
        equals.classList.remove('color2');

        numbers.forEach(number => {
          number.classList.toggle('theme2');
        });

        numberButtons.forEach(button => {
          button.classList.toggle('theme2');
        });

        themeText.forEach(text => {
          text.classList.toggle('theme2');
        });

        numbers.forEach(number => {
          number.classList.remove('theme3');
        });

        numberButtons.forEach(button => {
          button.classList.remove('theme3');
        });

        themeText.forEach(text => {
          text.classList.remove('theme3');
        });
    }
});

toggleButton3.addEventListener('click' ,function (){
    if (!toggleButton3.classList.contains('click')) {
        toggleButton.classList.remove('click');
        toggleButton2.classList.remove('click');
        toggleButton3.classList.add('click');
        body.classList.remove('theme2');
        body.classList.add('theme3');
        toggle.classList.toggle('theme3');
        display.classList.toggle('theme3');
        header.classList.toggle('theme3');
        buttons.classList.toggle('theme3');
        del.classList.toggle('co');
        reset.classList.toggle('co');
        equals.classList.toggle('co');
        toggle.classList.remove('theme2');
        display.classList.remove('theme2');
        header.classList.remove('theme2');
        del.classList.remove('color');
        buttons.classList.remove('theme2');
        reset.classList.remove('color');
        equals.classList.remove('color');

        numbers.forEach(number => {
          number.classList.toggle('theme3');
        });

        numberButtons.forEach(button => {
          button.classList.toggle('theme3');
        });

        themeText.forEach(text => {
          text.classList.toggle('theme3');
        });

        numbers.forEach(number => {
          number.classList.remove('theme2');
        });

        numberButtons.forEach(button => {
          button.classList.remove('theme2');
        });

        themeText.forEach(text => {
          text.classList.remove('theme2');
        });
    }
});

//main

one.onclick = function() {
  display.value += "1";
};

two.onclick = function() {
  display.value += "2";
};

three.onclick = function() {
  display.value += "3";
};

four.onclick = function() {
  display.value += "4";
};

five.onclick = function() {
  display.value += "5";
};

six.onclick = function() {
  display.value += "6";
};

seven.onclick = function() {
  display.value += "7";
};

eight.onclick = function() {
  display.value += "8";
};

nine.onclick = function() {
  display.value += "9";
};

zero.onclick = function() {
  display.value += "0";
};

dot.onclick = function() {
  display.value += ".";
};

add.onclick = function() {
  display.value += '+';
};

subtract.onclick = function() {
  display.value += '-';
};

multiply.onclick = function() {
  display.value += '*';
};

divide.onclick = function() {
  display.value += '/';
};

del.onclick = function() {
  display.value = display.value.slice(0, -1);
};

reset.onclick = function() {
  display.value = "";
};

equals.onclick = function() {
var result = eval(display.value);
display.value = result;
};

