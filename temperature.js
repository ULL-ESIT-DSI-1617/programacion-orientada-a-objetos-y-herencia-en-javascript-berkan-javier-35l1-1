"use strict"; 

class Measurement{
    constructor(value, magnitude){
        let _value = value;
        let _magnitude = magnitude;
    }
    
}

class Temperature extends Measurement{
    constructor(value, magnitude){
        super(value, magnitude);
    }
}

class Celcius extends Temperature{
    constructor(value, magnitude){
        super(value, magnitude);
    }

    toKelvin(num){
        var result = num + 273.15;
        return result = result.toFixed(1)+" Kelvin";
    }

    toFarenheit(num){
        var result = (num * 9/5)+32;
        return result = result.toFixed(1)+" Farenheit"
    }
}

function main(){
    var temp = original.value;
    var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkK])\s*(to)?\s*([fFcCkK])\s*$/;

    var m = temp.match(regexp);

    if(m){
        var num = m[1];
        var fromType = m[2];
        var toType = m[4];
        num = parseFloat(num);
        if (fromType == 'c' || fromType == 'C') {
            var temp = new Celcius(num, fromType);
            alert(temp._value);
            switch(toType){
                case "k":
                case "K":
                    converted.innerHTML = temp.toKelvin(num);
                break;
                case "f":
                case "F":
                    converted.innerHTML = temp.toFarenheit(num);
                break;
                default: break;
            }
        }
    }
    else{
        converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
    }
}