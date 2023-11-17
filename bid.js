document.addEventListener('DOMContentLoaded', function () {
    // Execute code after the DOM is fully loaded
    console.log('DOM Loaded');

    var slider = document.getElementById("range");
    var output = document.getElementById("value");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    };



})
function enterBid(inputID, outputID, errorID) {
    if (parseFloat(document.getElementById(inputID).value) <= parseFloat(document.getElementById(outputID).innerHTML)) {
        document.getElementById(errorID).innerHTML = "Invalid bid amount"
    }
    else {
        document.getElementById(outputID).innerHTML = document.getElementById(inputID).value
        document.getElementById(errorID).innerHTML = ""
    }

}


function countDown(id, date) {
    // Update the count down every 1 second
    var countDownDate = new Date(date).getTime();
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById(id).innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById(id).innerHTML = "EXPIRED";
        }
    }
        , 1000);
}

