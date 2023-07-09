document.getElementById("submitButton").onclick =function(){
    let temp;

    if(document.getElementById("cButton").checked){
        temp = document.getElementById("textBox").value
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + " in celsius";

    }
    else if(document.getElementById("fButton").checked){
        temp = document.getElementById("textBox").value
        temp = Number(temp);
        temp = toFaherenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + " in faherenheit";

    }
    else{
        document.getElementById("tempLabel").innerHTML = "select a unit";
    }

}
 
let temp = 32;
temp = toFaherenheit(temp);
console.log(temp);

function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFaherenheit(temp){
    return temp * 9 / 5 +32;
}