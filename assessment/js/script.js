document.addEventListener("DOMContentLoaded", function () {
  var darkBgColor = getComputedStyle(document.body).backgroundColor;
  var lightBgColor = false;

  var image = document.getElementById("mode-img");

  image.addEventListener("click", function () {
    lightBgColor = !lightBgColor;

    if (lightBgColor) {
      lightBgColor != lightBgColor;

      if (lightBgColor) {
        document.body.style.backgroundColor = "white";
        image.src = "images/navbar/dark-mode.png";
        // document.getElementById("main-heading").style.color = "black";
        // document.getElementById("main-heading").style.color = "white";
      } else {
        document.body.style.backgroundColor = darkBgColor;
        image.src = "images/navbar/light-mode.png";
      }
    }
  });
});

// $(document).ready(function () {
//   $(".mode").click(function () {
//     var darkBgColor = $("body").css("background-color");
//     var lightBgColor = false;

//     $("#mode-img").click(function () {
//       lightBgColor = !lightBgColor;

//       if (lightBgColor) {
//         $("body").css("background-color", "white");
//         $("mode-img").attr("src", "images/navbar/dark-mode.png");
//       } else {
//         $("body").css("background-color", darkBgColor);
//         $("mode-img").attr("src", "images/navbar/light-mode.png");
//       }
//     });
//   });
// });
