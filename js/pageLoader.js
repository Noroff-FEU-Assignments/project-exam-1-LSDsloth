document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loading").style.visibility = "visible";
  } else {
    document.querySelector("#loading").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};
