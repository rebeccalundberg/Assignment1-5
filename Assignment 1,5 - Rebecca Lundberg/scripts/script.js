let vip = true;
let age = 17;

document.getElementById("enterBtn").addEventListener("click", function () {
  age = document.getElementById("agebox").valueAsNumber;
  console.log(age);
  vip = document.getElementById("vipbox").checked;
  console.log(vip);
});

let button = document.getElementById("enterBtn");
button.addEventListener("click", function () {
  if (vip) {
    alert("Welcome in my best VIP customer:)");
  } else {
    if (age >= 18) {
      alert("access granted");
    } else {
      alert("access denide");
    }
  }

  document.getElementById("agebox").valueAsNumber;
});
