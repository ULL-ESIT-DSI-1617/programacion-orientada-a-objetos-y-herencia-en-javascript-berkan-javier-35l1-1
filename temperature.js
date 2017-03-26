"use strict"; 

let Measurement = (function(){

    let _value = Symbol();
    let _magnitude = Symbol();

    class Measurement{
        constructor(value, magnitude){
            this[_value] = value;
            this[_magnitude] = magnitude;
        }
        get value(){
            return this[_value];
        }
        get magnitude(){
            return this[_magnitude];
        }
    }
    return Measurement;
}());

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
        var result = this.value + 273.15;
        return result = result.toFixed(1)+" Kelvin";
    }

    toFarenheit(num){
        var result = (num * 9/5)+32;
        return result = result.toFixed(1)+" Farenheit"
    }
}

class Farenheit extends Temperature{
    constructor(value, magnitude){
        super(value, magnitude);
    }

    toKelvin(num){
        var result = (num + 459.67) * 5/9;
        return result = result.toFixed(2)+" Kelvin";
    }

    toCelsius(num){
        var result = (num - 32) / (9/5);
        return result = result.toFixed(2)+" Celcius"
    }
}

class Kelvin extends Temperature{
    constructor(value, magnitude){
        super(value, magnitude);
    }

    toCelsius(num){
        var result = num - 273.15;
        return result = result.toFixed(2)+" Celcius";
    }

    toFarenheit(num){
        var result = (num * 9/5)-459.67;
        return result = result.toFixed(2)+" Farenheit"
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
        else if (fromType == 'f' || fromType == 'F') {
            var temp = new Farenheit(num, fromType);
            switch(toType){
                case "k":
                case "K":
                    converted.innerHTML = temp.toKelvin(num);
                break;
                case "c":
                case "C":
                    converted.innerHTML = temp.toCelsius(num);
                break;
                default: break;
            }
        }
        else{
            var temp = new Kelvin(num, fromType);
            switch(toType){
                case "f":
                case "F":
                    converted.innerHTML = temp.toFarenheit(num);
                break;
                case "c":
                case "C":
                    converted.innerHTML = temp.toCelsius(num);
                break;
                default: break;
            }  
        }
    }
    else{
        converted.innerHTML = "ERROR! Try something like '-4.2C to f' or '-4.2C f' instead";
    }
}