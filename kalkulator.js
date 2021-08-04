const kalkulator = { angkapertama: null, angkakedua: false, operator: null, layar: "0" };
let tombol = document.querySelectorAll(".angka");
function updatedisplay() {
  let layar = document.querySelector(".layar");
  layar.innerText = kalkulator.layar;
}
let bersih = document.querySelector(".bersih");
bersih.addEventListener("click", function () {
  kalkulator.layar = "0";
  kalkulator.angkapertama = null;
  kalkulator.angkakedua = false;
  kalkulator.operator = null;
  updatedisplay();
});
function inputdigit(digit) {
  if (kalkulator.layar === "0") {
    kalkulator.layar = digit;
  } else {
    kalkulator.layar += digit;
  }
}
function negatif() {
  kalkulator.layar *= -1;
}
function operator(operator) {
  if (kalkulator.angkakedua == false) {
    kalkulator.angkapertama = kalkulator.layar;
    kalkulator.angkakedua = true;
    kalkulator.operator = operator;
    kalkulator.layar = "0";
  } else {
    alert("operator sudah ditetapkan");
  }
}
function samadengan() {
  if (kalkulator.operator == "+") {
    kalkulator.layar = parseInt(kalkulator.angkapertama) + parseInt(kalkulator.layar);
  } else if (kalkulator.operator == "-") {
    kalkulator.layar = kalkulator.angkapertama - kalkulator.layar;
  }
}
for (arrayItem of tombol) {
  arrayItem.addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains("negative")) {
      negatif();
    } else if (target.classList.contains("operator")) {
      operator(target.innerText);
    } else if (target.classList.contains("hasil")) {
      samadengan();
    } else {
      inputdigit(target.innerText);
    }
    updatedisplay();
  });
}
