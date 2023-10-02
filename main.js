let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");

let result = document.getElementById("result");
let resetBtn = document.getElementById("resetBtn");

const form = document.getElementById('form')
const today = new Date();





function calcDiff(event) {
  event.preventDefault();
  console.log(event)
  const dayOfBirth = new Date(parseInt(year.value), parseInt((month.value - 1)), parseInt(day.value));
  let diffMsec = Math.abs(today - dayOfBirth);
  console.log(diffMsec)
  let diffYears = Math.floor(diffMsec / (1000 * 60 * 60 * 24 * 365.25));
  console.log("diffYears: " + diffYears)

  let rest = diffMsec % (1000 * 60 * 60 * 24 * 365.25);
  console.log("rest from years:", rest)
  let diffMonths = Math.floor(rest / (1000 * 60 * 60 * 24 * 30.44));
  console.log("diffMonths: " + diffMonths)
  rest = rest % (1000 * 60 * 60 * 24 * 30.44);

  let diffDays = Math.floor(rest / (1000 * 60 * 60 * 24));

  result.innerHTML = ` Your age is approximately ${diffYears} years,  ${diffMonths} months and  ${diffDays} days.`

}



function resetFunction() {
  year.value = null;
  month.value = null;
  day.value = null;
  result.innerHTML = "";
}

resetBtn.addEventListener("click", resetFunction);
form.addEventListener("submit", calcDiff);