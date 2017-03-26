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

    toKelvin(){
        return (this.value + 273.15).toFixed(2)+" Kelvin";
    }

    toFarenheit(){
        return ((this.value * 9/5)+32).toFixed(2)+" Farenheit";
    }
}

class Farenheit extends Temperature{
    constructor(value, magnitude){
        super(value, magnitude);
    }

    toKelvin(){
        return ((this.value + 459.67) * 5/9).toFixed(2)+" Kelvin";
    }

    toCelsius(){
        return ((this.value - 32) / (9/5)).toFixed(2)+" Celcius";
    }
}

class Kelvin extends Temperature{
    constructor(value, magnitude){
        super(value, magnitude);
    }

    toCelsius(){
        return (this.value - 273.15).toFixed(2)+" Celcius";
    }

    toFarenheit(){
        return ((this.value * 9/5)-459.67).toFixed(2)+" Farenheit";
    }
}

function converter(){
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
                    converted.innerHTML = temp.toKelvin();
                break;
                case "f":
                case "F":
                    converted.innerHTML = temp.toFarenheit();
                break;
                default: break;
            }
        }
        else if (fromType == 'f' || fromType == 'F') {
            var temp = new Farenheit(num, fromType);
            switch(toType){
                case "k":
                case "K":
                    converted.innerHTML = temp.toKelvin();
                break;
                case "c":
                case "C":
                    converted.innerHTML = temp.toCelsius();
                break;
                default: break;
            }
        }
        else{
            var temp = new Kelvin(num, fromType);
            switch(toType){
                case "f":
                case "F":
                    converted.innerHTML = temp.toFarenheit();
                break;
                case "c":
                case "C":
                    converted.innerHTML = temp.toCelsius();
                break;
                default: break;
            }  
        }
    }
    else{
        converted.innerHTML = "ERROR! Try something like '-4.2C to f' or '-4.2C f' instead";
    }
}