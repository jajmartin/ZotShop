document.addEventListener('DOMContentLoaded', function () {
    // Execute code after the DOM is fully loaded
    console.log('DOM Loaded');

    var slider = document.getElementById("range");
    var output = document.getElementById("value");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    };

<<<<<<< HEAD

})

=======
})
>>>>>>> e5f3ad86689d8731a6aafcb0f85a56e43e3e4300
