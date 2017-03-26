# Objetos, propiedades y métodos en javascript

# Objetos

Los objetos son colecciones de variables inicializadas con unos valores determinados. Las variables de los objetos se denominan propiedades, basciamente son pares nombre-valor. 

Las propiedades se acceden mediante el operador `.` . 
`obj.propiedad`.

```javascript
var pelicula = {titulo:'Mad Max: Fury road',director:'George Miller'}
pelicula.titulo;
pelicula.director;
```

# Notación array

Los objetos se pueden manipular mediante otra notación equivalente a la notación `.`, denominada array. 

```javascript
pelicula["titulo"]; // equivalente a pelicula.titulo
``` 

La notación array permite strings arbitrarios como nombres
```javascript
var pelicula = {"Titulo":'The bad, the good and the ugly', "El director":'Sergio Leone' }; 
pelicula["El director"];
pelicula["Titulo"];
```
Aunque esto está permitido es mejor utilizar siempre nombres compatibles con la notación `.` .

# Clases y herencia

Los objetos se estructuran en clases que llevan asociadas el mecanismo de herencia. Todos los objetos de JavaScript pertenecen a la clase Object. Todos las clases derivan de la clase Object.  

Un objeto hereda los métodos y propiedades de su clase, además la clase hereda a su vez los métodos y propiedades de su clase padre. 

Un método es una operación que se puede invocar sobre un objeto. La llamada a los métodos se realiza a través del operador punto (`.`).

Todas la clases tienen un constructor con el nombre de la clase, que permite crear objetos con el operador `new`. Es equivalente a construir el objeto con `{}`.

# Métodos de la clase

Un objeto hereda métodos de su clase. 

```javascript
var fecha = new Date();

fecha.toString();
fecha.getHours();
```

# Definición de un nuevo método de un objeto

Los métodos se pueden definir también directamente en un objeto, **el nuevo método solo se define para ese objeto(no es de la clase).**

Invocar a un método cambia el entorno de ejecución de JavaScript, pasando a ser el objeto invocado, que se referencia con this.

```javascript
var pelicula{
    titulo:'Avatar',
    director:'James Cameron',
    resumen:function(){ // Método definido como una propiedad más.
        return "El director de"+this.titulo+"es"+this.director;
    }
}
```

# Algunas clases predefinidas(core)

* Object
    * Clase raíz. Suele usarse el literal: `{a:3,b:"que tal"}`
* Array
    * Colección indexable. Suele usarse el literal: `[1,2,3]`
* Date
    * Hora y fecha extraida del reloj del sistema: `new Date()`
* Function
    * Encapsula código. Suele usarse literal o def.: `function(x){...}`
* RegExp
    * Expresiones regulares. Suele usarse el literal: `/(hola)+$/`
* Math
    * Módulo con constantes y funciones matemáticas.
* Number, String y Boolean
    * Clases que encapsulan valores de los tipos number, string y boolean como objetos. Sus métodos se aplican a los tipos directamente, la conversión a objetos es automática. 

# Objetos. Propiedades dinámicas y anidadas

## Objetos anidados: árboles

Los objetos pueden anidarse entre si creando árboles.

```javascript
var pelicula = {
    titulo:'Avatar',
    director:{
        nombre:'James',
        apellido:'Cameron'
    }
};

pelicula.director.nombre;
```

## Propiedades dinámicas

Las propiedades de los objetos pueden crearse y destruirse. 

```javascript
var x= { peras:3, fresas:20 };

x.peras = 7;
x.kiwis = 5; // Crea la propiedad dinamicamente

delete x.fresas; // Borra la propiedad del objeto. 
```

Operaciones sobre propiedades:

* `x.c = 4`
    * Si existe la propiedad se le asigna un nuevo valor.
    * Si no existe se crea la propiedad y se le asigna el valor. 
* `delete x.c`
    * Si existe x.c, la elimina, si no existe, no hace nada.
* "c" in x
    * Si x.c existe, devuelve true, sino existe devuelve false.

**Uso de propiedades dinámicas**

* Un objeto solo debe definir las propiedades que contengan información conocida, añadir más solo si son necesarias.

* Consultar la información con la siguiente expresión para evitar errores de ejecución si las propiedades no existen.
`prop1 && prop1.prop2`

```javascript
var pel = {
    titulo:'Avatar',
    director:'James Cameron'
};

pel.estreno={
    año:'2009'
}

pel.estreno && pel.estreno.año;
```

# Referencias a objetos

Los tipos JavaScript se gestionan por valor o referencia. number, boolean o undefined se gestionan por valor, en cambio object y string se gestionan por referencia. 

La asignación copia el contenido de la variable, copia el valor o el puntero según sea el contenido. 

## Parámetros por referencia

```javascript
var req = {};

function set(req1){
    req1.method = "GET";
}

function answer(req2){
    if (req2.method === "GET"){
        return "Ha llegado: " + req2.method;
    }else{
        return "Error 37";
    }
}

anser(req); // error 37
set(req);
answer(req); // Ha llegado: GET
```

Con esto conseguimos que funciones distintas trabajen sobre el mismo objeto. 

## Identidad e igualdad de objetos

No se comparan los objetos, solo sus referencias.

```javascript
var x = {}; 
var y = x;
var z = {};

x === y; // true
x === {}; // false
x === z; // false
```

# Prototipos y clases en JavaScript

La herencia en JavaScript se basa en los prototipos, todo objeto en JavaScript posee un prototipo, del cual hereda sus propiedades y métodos. 

JavaScript es un lenguaje orientado a prototipos. El prototipo es un objeto como otro cualquiera al que se pueden añadir o quitar propiedades y métodos. 

Una modificación del prototipo trascenderá a todos los objetos asociados. 
* Si borramos un método, éste ya no se podrá invocar sobre los objetos enlazados.
* Si añadimos un método, éste se podrá invocar sobre todos los objetos asociados al prototipo.

## Prototipos, clases y herencia

Una clase en JavaScript es el conjunto de objetos que tienen el mismo prototipo(el de la clase). Los objetos de la clase heredan métodos y propiedades del prototipo de la clase. 

Si una clase deriva de otra sus prototipos están enlazados, se hereda de toda la cadena de prototipos hasta llegar a la raíz del árbol. 

La clase Objetct es la clase raíz del árbol de herencia, su prototipo es el único que no tiene prototipo. Las clases predefinidas Array, RegExp, Date, ... derivan directamente de Object. 

Las clases predefinidas tienen además literales({..},[..],/../,...). Permiten construir objetos de forma mucho más legible y eficaz. Los literales deben utilizarse siempre que sea posible(en vez de los constructores). 

## Añadir método integer a clase Number

```javascript
Number.prototype.integer:function(){
    return Math[this < 0 ? "ceil":"floor"](this);
}

7.3.integer();
-7.3.integer();
```

