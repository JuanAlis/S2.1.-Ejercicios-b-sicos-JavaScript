    //Exercici 1.1: Arrow functions

        //Nivel 1

        //  Exercici 1
        let a = 4;
        let b = 5;

        const add = (a, b) => {
            return a + b;
        }

        console.log(add(a, b));

        //Exercici 2
        /* const randomNumber = () => {
            return Math.floor(Math.random() * (100 - 0 + 1)) + 0;
        }
        let random = randomNumber();

        console.log(random);
       */
        //Exercici 3
        class person {
            constructor(name) {
                this.name = name
            }

            greet = () => {
                console.log(`Hola, ${this.name}`);
            }

        }

        const persona = new person("Juan");
        persona.greet();

        //Nivel2

        //Exercici4
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        const printNumbers = (array) => {
            let arrayInterno = array;
            let imprimir = "";
            for (let i = 0; i < arrayInterno.length; i++) {
                imprimir += (i === arrayInterno.length - 1) ? arrayInterno[i] + "." : arrayInterno[i] + ",";
            }
            return console.log(imprimir);
        }

        printNumbers(array);

        //Nivel3

        //Exercici5
        setTimeout(anonima = () => {
            console.log("Mensaje depues de 3 segundos");
        }, 3000);



        //Exercici 1.2: Operador ternari

        //Nivel 1

        //Exercici 1
        potConduir = (edad) => {
            let mensaje = edad <= 18 ? "No puede conducir" : "Puede conducir";
            return mensaje;
        }
        console.log(potConduir(22));

        //Exercici 2
        comparador = (num1, num2) => {
            let compara = num1 < num2 ? "num2 és més gran" : "num1 és més gran";
            return compara;
        }
        console.log(comparador(2, 5));

        //Nivel2

        //Exercici3
        let numero = 7;
        let pNZ = numero === 0 ? "Cero" : (numero < 0 ? "Negativo" : "Positivo");
        console.log(pNZ);

        const trobarMaxim = (a, b, c) => {
            let valorMaxim = (a < b && c < b) ? "b" : (a > b && a > c) ? "a" : (c > a && c > b) ? "c" : "Iguales";
            return valorMaxim;
        }

        console.log(trobarMaxim(1, 1, 1))

        //Nivel3

        //Exercici4
        const parOImpar = (array) => {
            let lista = array
            let imprimir = "";
            for (let i = 0; i < lista.length; i++) {
                imprimir += (lista[i] % 2 === 0) ? lista[i] + " es par" + "\n" : lista[i] + " es impar" + "\n";
            }
            return imprimir;
        }

        console.log(parOImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


        //Exercici 1.3: Callbacks

        //Nivel1 

        //Excercici1

        const processar = (nombre, callback) => {
            callback(nombre);
        }


        const saludar = (nombre) => {
            console.log("Hola " + nombre);
        };

        processar("Juan", saludar);


        //Exercici 2

        const calculadora = (num1, num2, callback) => {
            callback(num1, num2)

        };

        const sumar = (num1, num2) => {
            console.log(num1 + num2);
        };

        calculadora(12, 12, sumar);

        //Nivel2

        //Excercici 3

        const esperarISaludar = (nombre, callback) => {
            setTimeout(() => {
                callback(nombre);
            }, 2000);
        };

        const saludo = (nombre) => {
            console.log("Hola " + nombre);
        };

        esperarISaludar("Mama", saludo);

        //Exercici4

        const processarelements = (array, callback) => {
            for (let i = 0; i < array.length; i++) {
                console.log(callback());
            }
        };

        const laLlamada = () => {
            return Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000;
        }

        processarelements([1, 2, 3, 4, 5, 6, 7, 8, 9], laLlamada);


        //Nivel53

        //Exercici 5

        const processarCadena = (cadena, callback) => {
            cadena = cadena.toUpperCase();
            callback(cadena)
        }

        const mostrar = (cadena) => {

            console.log(cadena);
        }

        processarCadena("Te quiero mama", mostrar)


        //Exercici 1.4: Rest & Spread operators

        //Nivell 1

        //Exercici 1

        const array1 = [1, 2, 3, 4, 5]
        const array2 = [...array1, 6, 7, 8, 9]

        console.log(array2);

        //Exercici 2

        const suma = (...numeros) => {
            return numeros.reduce((total, num) => total + num, 0);
        }

        console.log(suma(1, 2, 3, 4, 5, 6, 7, 8, 9));

        //Nivel2

        //Exercici 3

        const objeto1 = {
            nombre: "Laura",
            edad: 30,
            ciudad: "Cali"
        }

        const objeto2 = {
            ...objeto1,
            nombre: "Raquel"
        }

        console.log(objeto2);

        //Exercici 4

        const residence = [1, 2, 3, 4, 5, 6, 7, 8]

        const renovado = [primerelemento, segundoelemento, ...resto] = residence;

        let un = primerelemento;
        let deux = segundoelemento;
        let rest = resto;
        console.log(un + "\n", deux + "\n", rest);

        //Nivel3

        //Exercici 5

        const argumentos = (a, b, c) => {
            console.log(a, b, c);
        }

        const tresElementos = ["Hey", "tu", "mira"]

        argumentos(...tresElementos);

        //Exercici 6

        const fusionar = {

            nombre: "Juan",
            edad: 24,
            apasionado: "si"
        }

        const fusionar1 = {
            ...fusionar,
            deporte: "boxeo",
            color: "marron",
            altura: 185

        }

        console.log(fusionar1);


        //Exercici 1.5: Array transformations

        //Nivel1

        //Exercici1

        const arrayNum = [1, 2, 3, 4];

        const nuevoArray = arrayNum.map(num => num ** 2)

        console.log(nuevoArray);


        //Excercici2 

        const arrayNum2 = [1, 2, 3, 4];
        const nuevoArray2 = arrayNum2.filter((num) => {
            return num % 2 === 0;
        });

        console.log(nuevoArray2);

        //Excercici3

        const arrayNum3 = [1, 10, 8, 11];
        const nuevoArray3 = arrayNum3.find((num) => {
            return num === 10;
        });

        console.log(nuevoArray3);

        //Excercici4

        const arrayNum4 = [13, 7, 8, 21];
        const nuevoArray4 = arrayNum4.reduce((anterio, actual) => {
            return anterio + actual;
        }, 0);

        console.log(nuevoArray4);


        //Nivel2

        //Excercici5

        const arrayNum5 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
        const nuevoArray5 = arrayNum5.filter(num => num >= 10).map(num => num * 2).reduce((anterior, actual) => anterior + actual, 0);
        console.log(nuevoArray5);

        //Nivel3

        //Excercici6

        const arrayNum6 = [11, 12, 13, 14];
        const verifArray6 = arrayNum6.every(num => num > 10);
        const verifArray62 = arrayNum6.some(num => num > 10);

        console.log(verifArray6);
        console.log(verifArray62);


        //Exercici 1.6: Array loops

        //Nivel1

        //Exercici 1

        const arrayNombres = ['Anna', 'Bernat', 'Clara'];
        const imprimirArray = arrayNombres.forEach(nombre => { console.log(nombre) });

        //Excercici2
        const arrayNombres2 = ['Anna', 'Bernat', 'Clara'];
        const imprimirArray2 = () => {
            for (const nombre of arrayNombres2) {
                console.log(nombre);
            }
        };

        imprimirArray2();

        //Excercici3
        const arrayLoop3 = [1, 2, 3, 4, 5, 6];
        const nuevoArrayLoop3 = arrayLoop3.filter(num => num % 2 === 0);

        console.log(nuevoArrayLoop3);

        //Nivel2

        //Excercici4
        let obj = {
            nombre: "Ona",
            edad: 25,
            ciudad: "Barcelona"
        };

        const imprimirObj = () => {
            for (clave in obj)
                console.log(clave, obj[clave])
        }

        imprimirObj();

        //Excercici5

        const arrayNumeros5 = [1, 2, 3, 4, 5, 6];
        const verif5 = () => {
            for (num of arrayNumeros5) {
                if (num === 5) {
                    break;
                }
                console.log(num);
            }
        }

        verif5();

        //Nivel3

        //Exercici6 
        const arrayNombres6 = ["Anna", "Julia", "Pedro"];
        const imprimir6 = () => {
            for (nombre of arrayNombres6) {
                let cadena = nombre + arrayNombres6.indexOf(nombre)
                console.log(cadena)
            }
        }

        imprimir6();

        //Exercici 1.7: Promises & Async/Await

        //Nivel1

        //Excercici1 


        const esperarPromesa = (tiempo) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (tiempo >= 2000) {
                        resolve("Tiempo alcanzado")
                    } else {
                        reject("Error tiempo incumplido")
                    }
                }, tiempo);
            });
        };

        //Excercici2
        esperarPromesa(2000)
            .then((mensaje) => {
                console.log(mensaje);
            })
            .catch((error) => {
                console.log(error);
            });

            //Excercici3
            const esperarPromesa2 = (input) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (input === "Hola") {
                        resolve("Palabra correcta")
                    } else {
                        reject("Error tiempo incumplido")
                    }
                }, 2000);
            });
        };

        
        esperarPromesa2("Hola")
            .then((mensaje) => {
                console.log(mensaje);
            })
            .catch((error) => {
                console.log(error);
            });

            //Excercici4 Nivel2 Excercici5
            const esperarPromesa3 = (tiempo) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (tiempo >= 4000) {
                        resolve("Oais")
                    } else {
                        reject("Error NoN")
                    }
                }, tiempo);
            });
        };

        const ejemploAsync = async () =>{
            console.log("Start");   

        try{
            const mensaje = await esperarPromesa3(2000);

            console.log(mensaje);
        } catch (error){
            console.log(error);
        }
            console.log("End");
        }


        ejemploAsync();


        //Nivel3

        //Excercici6

        const promesa1 = new Promise((resolve)=>{setTimeout(()=> resolve("Promesa 1 resulta"),3000)});
        const promesa2 = new Promise((resolve)=>{setTimeout(()=> resolve("Promesa 2 resulta"),6000)});

        Promise.all([promesa1,promesa2])
        .then((resultado)=>{
            console.log(resultado);
        })
        .catch((error)=>{
            console.log("Error");
        });


