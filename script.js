const bar = document.querySelector("#bar-toggle");

bar.onclick = function () //attach to onclick
{
  var checkbox = document.getElementById("check-toggle"); //find checkbox

  checkbox.checked = !checkbox.checked; //toggle the checked status
  if (checkbox.checked) {
    bar.classList.remove("fa-bars");
    bar.classList.add("fa-xmark");
  } else {
    bar.classList.add("fa-bars");
    bar.classList.remove("fa-xmark");
  }
};
