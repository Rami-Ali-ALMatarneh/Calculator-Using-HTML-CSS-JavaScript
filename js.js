function calculator() {
  let btns = document.querySelectorAll(".btn");
  let equal = document.getElementById("equal");
  let bord = document.getElementById("bord");
  let clear = document.getElementById("Clear");

  /////////////////////////////////////////////
  btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      let arr = [];
      let text = e.target.dataset.num;
      if (text == "=") {
        equals(bord.value);
      } else if (text == "C") {
        Clear();
      } else {
        if (text == "D") {
          Delete(bord.value);
          console.log(bord.value);
        } else {
          bord.value += text;
        }
      }
    });
  });
  /////////////////////////////////////////////
}
function equals(text) {
  if (text == "") {
    bord.value = "error";
  } else {
    let result = eval(text);
    if (result.length > 15) {
      bord.value = "error";
    } else {
      bord.value = result;
    }
  }
}
/////////////////////////////////////////////

function Clear() {
  bord.value = "";
}
/////////////////////////////////////////////

function Delete(text) {
  bord.value = text.slice(0, text.length - 1);
}
calculator();
