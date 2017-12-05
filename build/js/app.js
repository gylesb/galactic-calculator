(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var seconds = function seconds(number) {
  return number * 31556952;
};

var mercury = function mercury(number) {
  return number * 0.24;
};

var venus = function venus(number) {
  return number * 0.62;
};

var mars = function mars(number) {
  return number * 1.88;
};

var jupiter = function jupiter(number) {
  return number * 11.86;
};

var deathDay = function deathDay(number) {
  return 79 - number;
};

$(document).ready(function () {
  $("#btnSeconds").click(function () {
    var number = parseInt($("#userInput").val());
    var result = seconds(number);
    $("#ageSeconds").text(result);
    event.preventDefault();
  });

  $("#btnMercury").click(function () {
    var number = parseInt($("#userInput").val());
    var result = mercury(number);
    $("#mercuryYears").text(result);
    event.preventDefault();
  });

  $("#btnVenus").click(function () {
    var number = parseInt($("#userInput").val());
    var result = venus(number);
    $("#venusYears").text(result);
    event.preventDefault();
  });

  $("#btnMars").click(function () {
    var number = parseInt($("#userInput").val());
    var result = mars(number);
    $("#marsYears").text(result);
    event.preventDefault();
  });

  $("#btnJupiter").click(function () {
    var number = parseInt($("#userInput").val());
    var result = jupiter(number);
    $("#jupiterYears").text(result);
    event.preventDefault();
  });

  $("#btnDeath").click(function () {
    var number = parseInt($("#userInput").val());
    var result = deathDay(number);
    $("#deathDay").text(result);
    event.preventDefault();
  });
});

},{}]},{},[1]);
