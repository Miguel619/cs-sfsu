function myFunction() {
    var x, text, ans;

    ans = "fat";
  
    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value.toLowerCase();
  
    // If x is Not a Number or less than one or greater than 10
    if (x.localeCompare(ans)) {
      text = "That is not the file system format";
    } else {
      text = "Correct!";
    }
    document.getElementById("demo").innerHTML = text;
  }