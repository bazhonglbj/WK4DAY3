document.addEventListener('DOMContentLoaded', function () {
  var clickButton = document.getElementById('clickme');
  var resetButton = document.getElementById('resetme');
  var count = 0;

  // Function to update the button text
  function updateText() {
    clickButton.textContent = "Click me: " + count;
  }

  // Event listener for the click button
  clickButton.addEventListener('click', function () {
    count++;
    updateText();
  });

  // Event listener for the reset button
  resetButton.addEventListener('click', function () {
    count = 0;
    updateText();
  });
});