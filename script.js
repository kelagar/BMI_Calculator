function doFunction() {
        var h,hu,w;
        
        // Get the value of the input field with id="height"
        h = document.getElementById("height").value;
        hu = document.getElementById("hu").value;

        // Check if height is valid value
        if (hu == "centimeters") {
            if (isNaN(h) || h < 0 || h > 300) {
                alert("Input not valid");

            } else {
                alert("Input OK");

            }
        } else {
            if (isNaN(h) || h < 0 || h > 118) {
                alert("Input not valid");

            } else {
                alert("Input OK");

            }
        }
      
       
    // Get the value of the input field with id="weight"
        w = document.getElementById("weight").value;

    // If w is Not a Number or less than zero or greater than 500
        if (isNaN(w) || w < 0 || w > 500) {
            alert("Input not valid");

        } else {
            alert("Input OK");

        }
        
     
}
