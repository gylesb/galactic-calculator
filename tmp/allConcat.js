var seconds = function(number) {
  return number * 31556952;
};

var mercury = function(number) {
  return number * 0.24;
};

var venus = function(number) {
  return number * 0.62;
};

var mars = function(number) {
  return number * 1.88;
};

var jupiter = function(number) {
  return number * 11.86;
};

var deathDay = function(number) {
  return 79 - number;
};


$(document).ready(function() {
  $("#btnSeconds").click(function() {
    var number = parseInt($("#userInput").val());
    var result = seconds(number);
    $("#ageSeconds").text(result);
    event.preventDefault();
  });

  $("#btnMercury").click(function() {
    var number = parseInt($("#userInput").val());
    var result = mercury(number);
    $("#mercuryYears").text(result);
          event.preventDefault();
  });


  $("#btnVenus").click(function() {
    var number = parseInt($("#userInput").val());
    var result = venus(number);
    $("#venusYears").text(result);
          event.preventDefault();
  });


  $("#btnMars").click(function() {
    var number = parseInt($("#userInput").val());
    var result = mars(number);
    $("#marsYears").text(result);
          event.preventDefault();
  });

  $("#btnJupiter").click(function() {
    var number = parseInt($("#userInput").val());
    var result = jupiter(number);
    $("#jupiterYears").text(result);
          event.preventDefault();
  });


  $("#btnDeath").click(function() {
    var number = parseInt($("#userInput").val());
    var result = deathDay(number);
    $("#deathDay").text(result);
          event.preventDefault();
  });

});
