/*
Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. 
En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.triángulo = b * h/2
rectángulo = b * h
círculo = π * r2 (pi * radio al cuadrado)
*/

//1)Preguntamos la figura que deseamos
let figura = prompt("Escribe que figura deseas utilizar: 1) Triángulo, 2) Paralelogramo, 3) Rectángulo, 4) Cuadrado, 5)Rombo, 6) Cometa, 7) Trapecio; 8) Círculo ")

//2) Creamos las variable
let base;
let altura;
let radio;
let lado;
let DM;
let Dm;
let BM;
let Bm;
let h; 

//3) Las condiciones en base a la pregunta --> Switch

switch(figura){
    case "1":
        //Le preguntaremos en base a la fórmula
        base = prompt("¿Cuánto tienes de base en tu Triángulo? ")
        altura = prompt("¿Cuánto tienes de altura en tu Triángulo?")
        //Prueba en la consola
        console.log(`El área de tu Triángulo es ${base*altura/2}`)
        document.getElementById("nombrefigura").innerHTML=" Triángulo"

        document.write("<p id='bastri'> La base es: "  + base + "</p>")
        document.write("<p id='alttri' > La altura es: " + altura + "</p>")
        document.write("<p id='aretri'> El área es: "+ base*altura/2 + "</p>")

        break

    
    case "2":
        base = prompt("¿Cuánto tienes de base en tu Paralelogramo? ")
        altura = prompt("¿Cuánto tienes de altura en tu Paralelogramo?")
        console.log(`El área de tu Paralelogramo es ${base*altura}`)
        document.write("<p id='bapara'> La base es:     " + base + "</p>")

        document.write("<p id='alpara'> La altura es:     " + altura + "</p>")

        document.write("<p id='arpara'> El área es:     "+ base*altura + "</p>")
        break
    
    case "3":
        base = prompt("¿Cuánto tienes de base en tu Rectángulo?")
        altura = prompt("¿Cuánto tienes de altura en tu Rectángulo? ")
        console.log(`El área de tu rectángulo es ${base*altura}`)
        document.getElementById("nombrefigura").innerHTML=" Rectángulo"
        document.write("<p id='barec'> La base es:     " + base + "</p>")

        document.write("<p id='alrec'> La altura es:     " + altura + "</p>")

        document.write("<p id='arrec'> El área es:     "+ base*altura + "</p>")
        break

    case "4":
        lado = prompt("¿Cuánto es el lado de tu cuadrado?")
        console.log(`El área de tu cuadrado es ${Math.pow(lado,2)}`)
        document.write("<p id='lacua'> El lado es:     " + lado + "</p>")

        document.write("<p id='arcua'> El área es:     "+ Math.pow(lado,2) + "</p>")

        break

    case "5":
        DM = prompt("¿Cuánto es el diametro mayor de tu Rombo?")
        Dm = prompt("¿Cuánto es el diametro menor de tu rombo?")
        console.log(`El área de tu rombo es ${DM*Dm/2}`)
        document.write("<p id='dmarom'> El Diametro Mayor es:     " + DM + "</p>")

        document.write("<p id='dmerom'> El Diametro Menor es:     " + Dm + "</p>")

        document.write("<p id='arrom'> El área es:     "+ DM*Dm/2 + "</p>")
        break

    case "6":
        DM = prompt("¿Cuánto es el diametro mayor de tu Cometa?")
        Dm = prompt("¿Cuánto es el diametro menor de tu Cometa?")
        console.log(`El área de tu Cometa es ${DM*Dm/2}`)
        document.write("<p id='dmaco'> El Diametro Mayor es:     " + DM + "</p>")
        document.write("<p id='dmeco'> El Diametro Menor es:     " + Dm + "</p>")
        document.write("<p id='areco'> El área es:     "+ DM*Dm/2 + "</p>")
        break

    case "7":

        BM = prompt("¿Cuánto es la base mayor de tu trapecio?")
        Bm = prompt("¿Cuánto es la base menor de tu trapecio?")
        h = prompt("¿Cuánto es la altura de tu trapecio?")
        console.log(`El área de tu Trapecio es ${(parseFloat(BM)+ parseFloat(Bm))*h/2}`)

        document.write("<p id='bmatra'> El Diametro Mayor es:     " + BM + "</p>")
        document.write("<p id='bmetra'> El Diametro Menor es:     " + Bm + "</p>")
        document.write("<p id='artra'> El área es:     "+(parseFloat(BM)+ parseFloat(Bm))*h/2  + "</p>")

        break   

    case "8":
        radio = prompt("¿Cuánto de radio tienes en tu Círculo?")
        //math.pow() --> Crear la potencia y el Pi
        console.log(`El área de tu Círculo es ${Math.PI * Math.pow(radio,2)}`)

        document.write("<p id='radcir'> El Radio es:     " + radio + "</p>")
        document.write("<p id='arcir'> El área es:     " + Math.PI * Math.pow(radio,2) + "</p>")
        break

    default:
        console.log("Esta figura no está disponible")
}