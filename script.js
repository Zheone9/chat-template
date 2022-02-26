document.getElementById("bar-toggle").onclick = function () //attach to onclick
{
  var checkbox = document.getElementById("check-toggle"); //find checkbox

  checkbox.checked = !checkbox.checked; //toggle the checked status
};
