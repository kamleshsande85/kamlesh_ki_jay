var backgroundMusic = new Audio('animalbgm.mp3');

function spinBottle() {
    var bottle = document.getElementById("bottle");
    var resultElement = document.getElementById("result");

    // Play background music
    backgroundMusic.play();

    // Generate a random angle between 720 and 1440 degrees for multiple spins
    var randomAngle = Math.floor(Math.random() * 921) + 3120;

    // Apply the rotation to the bottle
    bottle.style.transform = "rotate(" + randomAngle + "deg)";

    // Delay displaying the result to allow time for the rotation animation
    setTimeout(function() {
        // Pause background music
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;

        var names = ["Kamlesh", "Shubham", "Divya Soor", "T sai", "Yaman"];
        var randomIndex = Math.floor(Math.random() * names.length);
        var selectedPerson = names[randomIndex];
        resultElement.innerHTML = "The bottle points to: " + selectedPerson;
    }, 6000); // 3000 milliseconds (3 seconds) delay
}
