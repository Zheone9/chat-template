const bar = document.querySelector("#bar-toggle");

bar.onclick = function () //attach to onclick
{
  var checkbox = document.getElementById("check-toggle"); //find checkbox

  checkbox.checked = !checkbox.checked; //toggle the checked status
  bar.classList.toggle("fa-bars");
  bar.classList.toggle("fa-xmark");
};
