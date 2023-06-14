const rocketLaunch = document.getElementById("rocket-launch");
const launchButton = document.getElementById("launch");
const resetButton = document.getElementById("reset");

launchButton.addEventListener("click", function () {
    launchButton.setAttribute("disabled", true);
    rocketLaunch.setAttribute("class", "launched");
    resetButton.removeAttribute("disabled");
});

resetButton.addEventListener("click", function () {
    resetButton.setAttribute("disabled", true);
    rocketLaunch.setAttribute("class", "");
    launchButton.removeAttribute("disabled");
});
