// Toast code
$(document).ready(function(){
    $('.toast').toast('show');
});

// Tooltip code
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// Copyright code
var today = new Date();
var day = String(today.getDate()).padStart(2, '0'); // add .padStart(2, '0') to add a 0 if the day num is 1 number - first value is a 0 thhen if there is a second value, make that a 0
var month = String(today.getMonth() + 1).padStart(2, '0'); // +1 because January is 0!
var year = today.getFullYear();

today = day + '/' + month + '/' + year;

document.getElementById("currentYear").innerText = year;
