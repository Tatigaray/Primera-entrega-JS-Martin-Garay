
let promedio;

do {
let nombre= prompt("Ingrese nombre de alumno")
let nota1= parseInt(prompt("Ingrese nota 1 del alumno/a"))
let nota2= parseInt(prompt("Ingrese nota 2 del alumno/a"))
let nota3= parseInt(prompt("Ingrese nota 3 del alumno/a"))
promedio= (nota1 + nota2 + nota3)/3

    if (promedio<=6) {
    console.log("Alumna/o debera rendir recuperatorio")
    } else if (promedio>=7) {
    console.log("Alumna/o se encuenta aprobada/o")
    }
}while (promedio<=6)