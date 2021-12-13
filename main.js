let allValues = document.querySelectorAll("input");
let btn = document.querySelector("button");
let show = document.querySelector(".dispaly_value");

btn.addEventListener("click", test);

function test() {
  let [cost, items, sell] = getInputValues();
  findProfOrLoss(Number(cost), Number(items), Number(sell));
}

function getInputValues() {
  let my = [];
  for (const [index, element] of allValues.entries()) {
    my.push(element.value);
  }
  return my;
}

function findProfOrLoss(cs, num, sel) {
  if (cs > sel) {
    let diff = cs * num - sel * num;

    show.innerHTML = `loss is ${diff} and loss percentage is ${cal(
      diff,
      cs * num
    )} %`;
    show.style.color = "red";
  } else if (cs < sel) {
    let diff = sel * num - cs * num;
    show.innerHTML = `profit is ${diff} and profit percentage is ${cal(
      diff,
      cs * num
    )} %`;
    show.style.color = "green";
  } else {
    show.innerHTML = `there is no prof or no loss`;
    show.style.color = "orange";
  }
}

function cal(x, y) {
  return ((x / y) * 100).toFixed(2);
}
