function Color_Function() {                                       //COLOR FUNCTION will give a message if a color is correctly inputtted from the given list
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        case "Turquoise":
            Color_Output = "Turquoise" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Black":
            Color_Output = "Black" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly written on the above list.";//This message will show if the inputed color is typed incorrectly
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function Hello_World_Function() {                      //Function will change message of the set index value
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed";           //Since it's 0, it will change the first element with the class "click"
}

var c = document.getElementById("myCanvas");           //Circle inside of canvas
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var c = document.getElementById("myCanvas");            //Gradient inside of canvas
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);