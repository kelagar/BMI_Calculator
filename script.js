function doFunction() {
    var height, hunit, weight, wunit, check, email, name, details, bmi;
    var valid = 0;

    // Get the value of the input field with id="height"
    height = document.getElementById("height").value;
    hunit = document.getElementById("h-unit").value;
    
    
    // Check if height is valid value
    if (/centimeter/.test(hunit)) {
        if (!height.match(/^(300|200|100|[0-2][0-9][0-9]|[1-9]?)$/g)) {
            document.getElementById("Alert").innerHTML = "Input not valid"
            valid = 1;
            doReset();

        } else {}
                   

    } else {
        if (!height.match(/^(100|[0-1][0-1][0-8]|[0-9][0-9]|[1-9]?)$/g)) {
            document.getElementById("Alert").innerHTML = "Input not valid"
            valid = 1;
            doReset();
        } else { }
    }

    // Get the value of the input field with id="weight"
    weight = document.getElementById("weight").value;
    wunit = document.getElementById("w-unit").value;

    
    // Check if height is valid value
    if (wunit == "Kilograms") {
        if (!weight.match(/^(500|400|300|200|100|[0-4][0-9][0-9]|[1-9]?)$/g)) {
            document.getElementById("Alert").innerHTML = "Input not valid"
            valid = 1;
            doReset();
        } else {
           

        }
    } else {
        if (!weight.match(/^(1100|1000|900|800|700|600|500|400|300|200|100|[0-1][0-1][0][0-2]|[0-1][0][0-9][0-9]|[0-9][0-9][0-9]|[1-9]?)$/g)) {
            document.getElementById("Alert").innerHTML = "Input not valid"
            valid = 1;
            doReset();
        } else {
            

        }
    }
    //If email needs to be sent, validate the email
    check = document.getElementById("check").checked;
    email = document.getElementById("email").value;
    name = document.getElementById("name").value;
    if (check == true) {
        document.getElementById("Alert").innerHTML = "E-mail feature is currently not supported"
        valid = 1;

        var at = email.indexOf("@");
        if (at < 1 || email == "") {
            document.getElementById("Alert").innerHTML = "email is invalid"
            valid = 1;
            doReset();
        }
        //Validate name for email
        if (/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(n) == false) {

            document.getElementById("Alert").innerHTML = "name not valid"
            valid = 1;
            doReset();
        }
        else {
            if (/\ /.test(name) == true) {
                //alert("input okay");
            } else {

                document.getElementById("Alert").innerHTML = "Enter full name"
                valid = 1;
                doReset();
            }


        }

    }

    // BMI Calculation
    if (wunit == "pounds") {
        weight = weight / 2.2;
    }
    if (hunit == "inches") {
        height = height * 0.0254;
    } else {
        height = height / 100;
    }
    bmi = (weight / Math.pow(height, 2));


    //Detailed information for BMI
    details = document.getElementById("details").checked
    if (details == true) {
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
        if (!valid == 1) {
            document.getElementById("Alert").innerHTML = ("Your BMI is: " + bmi);

        }
    }
}

//Reset the values on the forms
function doReset() {
    document.getElementById("form1").reset();
    document.getElementById("form2").reset();
    document.getElementById("form3").reset();
    document.getElementById("form4").reset();

}
