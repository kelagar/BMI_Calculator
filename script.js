function doFunction() {
    var h, hu, w, wu, c, e, n, d;
     bmi = 0;
        
        // Get the value of the input field with id="height"
        h = document.getElementById("height").value;
        hu = document.getElementById("h-unit").value;

        // Check if height is valid value
        if (hu == "centimeters") {
            if (isNaN(h) || h < 0 || h > 300 || h == "") {
                
                document.getElementById("Alert").innerHTML = "Input not valid"
               doReset();

            } else {
                //alert("Input OK");
                
            }

        } else {
            if (isNaN(h) || h < 0 || h > 118 || h == "") {
                document.getElementById("Alert").innerHTML = "Input not valid"
                doReset();
            } else {
                //alert("Input OK");

            }
        }
             
    // Get the value of the input field with id="weight"
        w = document.getElementById("weight").value;
        wu = document.getElementById("w-unit").value;
    // Check if height is valid value
        if (wu == "Kilograms") {
            if (isNaN(w) || w < 0 || w > 500 || w =="") {
                document.getElementById("Alert").innerHTML = "Input not valid"
                doReset();
            } else {
               // alert("Input OK");

            }
        } else {
            if (isNaN(w) || w < 0 || w > 1102 || w == "") {
                document.getElementById("Alert").innerHTML = "Input not valid"
                doReset();
            } else {
                //alert("Input OK");

            }
        }
    //If email needs to be sent, validate the email
        c = document.getElementById("check").checked;
        e = document.getElementById("email").value;
        n = document.getElementById("name").value;
        if (c == true) {
            document.getElementById("Alert").innerHTML = "E-mail feature is currently not supported"
            
            var at = e.indexOf("@");
            if (at < 1 || e == "") {
                document.getElementById("Alert").innerHTML = "email is invalid" 
                doReset();
            }
            //Validate name for email
            if (/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(n) == false) {

                document.getElementById("Alert").innerHTML = "name not valid"
                doReset();
            }
            else {
                if (/\ /.test(n) == true) {
                    //alert("input okay");
                } else {

                    document.getElementById("Alert").innerHTML = "Enter full name"
                    doReset();
                }
                

            }

        }

    // BMI Calculation
        if (wu == "pounds") {
            w = w / 2.2;
        }
        if (hu == "inches") {
            h = h*0.0254;
        } else {
            h = h / 100;
        }
        bmi = (w / Math.pow(h, 2));
        
     
    //Detailed information for BMI
    d = document.getElementById("details").checked
    if (d == true) {
        if (bmi < 18.5) {
            document.getElementById("Alert").innerHTML = ("Your BMI is: " + bmi + ". Your BMI suggests that you are underweight");
        }
        if (bmi >= 18.5 && bmi < 25) {
            document.getElementById("Alert").innerHTML = ("Your BMI is: " + bmi + ". Your BMI suggests that you have a reasonable weight");
        }
        if (bmi >= 25 && bmi < 29) {
            document.getElementById("Alert").innerHTML = ("Your BMI is: " + bmi + ". Your BMI suggests that you are overweight");
        }
        if (bmi >= 29) {
            document.getElementById("Alert").innerHTML = ("Your BMI is: " + bmi + ". Your BMI suggests that you are obese");
        }

    } else {
        document.getElementById("Alert").innerHTML = ("Your BMI is: " + bmi);
    }
}

//Reset the values on the forms
function doReset() {
    document.getElementById("form1").reset();
    document.getElementById("form2").reset();
    document.getElementById("form3").reset();
    document.getElementById("form4").reset();
    
}
