var idade = 22
console.log(`Sua idade é de ${idade} anos...`)
if (idade < 18) {
    console.log('Vc não vota.')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional.')
} else {
    console.log('Vc tem q votar.')
}