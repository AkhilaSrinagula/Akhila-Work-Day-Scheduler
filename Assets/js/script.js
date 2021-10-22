var today = moment().format("dddd MMMM Do, YYYY");
var liveTime = moment().format("HH");
var hours = ["09", "10", "11", "12", "01", "02", "03", "04", "05", "06"];

//Setting current Date in Jumbotron
$("#currentDay").html(today);

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

$(".01").on("click", function () {
  var description = $(".01").val();
  localStorage.setItem("01:00", description);
});
$(".01").val(localStorage.getItem("01:00"));

$(".02").on("click", function () {
  var description = $(".02").val();
  localStorage.setItem("02:00", description);
});
$(".02").val(localStorage.getItem("02:00"));

$(".03").on("click", function () {
  var description = $(".03").val();
  localStorage.setItem("03:00", description);
});
$(".03").val(localStorage.getItem("03:00"));

$(".04").on("click", function () {
  var description = $(".04").val();
  localStorage.setItem("04:00", description);
});
$(".04").val(localStorage.getItem("04:00"));

$(".05").on("click", function () {
  var description = $(".05").val();
  localStorage.setItem("05:00", description);
});
$(".05").val(localStorage.getItem("05:00"));

$(".06").on("click", function () {
  var description = $(".06").val();
  localStorage.setItem("06:00", description);
});
$(".06").val(localStorage.getItem("06:00"));

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
