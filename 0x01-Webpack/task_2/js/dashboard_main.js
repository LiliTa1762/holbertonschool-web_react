import '../css/main.css';

let $ = require("jquery");
const _ = require("lodash");

$("body").append("<img id='logo'></img>");
$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");
$("body").append("<button>Click here to get started</button>");
$("body").append("<p id='count'></p>");
$("body").append("<p>Copyright - Holberton School</p>");

const updateCounter = () => {
    let cont = $('#count').html()
    $('button').on('click', function() {
        cont++;
        $('#count').html(`${cont} clicks on the button`)
    })
} 

_.debounce(updateCounter, 500);
updateCounter();

