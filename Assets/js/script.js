var today = moment().format("dddd") + " " + moment().format("Do MMM YYYY");
var liveTime = moment().format("HH");
var time = moment().format("h:mm:ss a");
var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17", "18"];

$("#currentDay").html(today);
var hour = moment().hours();
var userInput;
var hourSpan;


var interval = setInterval(function () {
  var momentNow = moment();
  $("#currentDay").html(
    momentNow.format("YYYY MMMM DD") +
      " " +
      momentNow.format("dddd").substring(0, 3).toUpperCase()
  );
  $("#currentDay").html(today + " " + momentNow.format("hh:mm:ss A"));
}, 100);
console.log("time " + hour);

//setItem and getItem from local storage
$(".09").on("click", function () {
  var description = $(".09").val();
  localStorage.setItem("09:00", description);
});
$(".09").val(localStorage.getItem("09:00"));

$(".10").on("click", function () {
  var description = $(".10").val();
  localStorage.setItem("10:00", description);
});
$(".10").val(localStorage.getItem("10:00"));

$(".11").on("click", function () {
  var description = $(".11").val();
  localStorage.setItem("11:00", description);
});
$(".11").val(localStorage.getItem("11:00"));

$(".12").on("click", function () {
  var description = $(".12").val();
  localStorage.setItem("12:00", description);
});
$(".12").val(localStorage.getItem("12:00"));

$(".13").on("click", function () {
  var description = $(".13").val();
  localStorage.setItem("13:00", description);
});
$(".13").val(localStorage.getItem("13:00"));

$(".14").on("click", function () {
  var description = $(".14").val();
  localStorage.setItem("14:00", description);
});
$(".14").val(localStorage.getItem("14:00"));

$(".15").on("click", function () {
  var description = $(".15").val();
  localStorage.setItem("15:00", description);
});
$(".15").val(localStorage.getItem("15:00"));

$(".16").on("click", function () {
  var description = $(".16").val();
  localStorage.setItem("16:00", description);
});
$(".16").val(localStorage.getItem("16:00"));

$(".17").on("click", function () {
  var description = $(".17").val();
  localStorage.setItem("17:00", description);
});
$(".17").val(localStorage.getItem("17:00"));

$(".18").on("click", function () {
  var description = $(".18").val();
  localStorage.setItem("18:00", description);
});
$(".18").val(localStorage.getItem("18:00"));

function timeTracker() {
  for (var i = 0; i < hours.length; i++) {
    if (hours[i] < liveTime) {
      $("." + hours[i]).addClass("past");
    }
    if (hours[i] === liveTime) {
      $("." + hours[i]).addClass("present");
    }
    if (hours[i] > liveTime) {
      $("." + hours[i]).addClass("future");
    }
  }
}
timeTracker();
