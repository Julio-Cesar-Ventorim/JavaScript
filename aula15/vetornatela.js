let numeros = [1, 5, 9, 2, 4, 3, 7, 5, 9, 0, 8, 4, 5]

/*
for (let c = 0; c < numeros.length; c++) {
    console.log(`O ${c}° número é ${numeros[c]}`)
}
*/

for (var c in numeros) {
    console.log(numeros[c])
}