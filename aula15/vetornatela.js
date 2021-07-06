let valores = [8, 1, 17, 4, 2, 9]
//valores.sort()
console.log(valores)

// for (let i = 0; i < valores.length; i++) {
//     console.log(`A posição ${i} tem o valor ${valores[i]}`)
// }

for (let i in valores) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}

console.log(valores.indexOf(2))//localiza a posição do vetor que tem o elemento 4

let pos = valores.indexOf(17)
if (pos == -1) {
    console.log("Valor não encontrado")
}
else {
    console.log(`O valor 17 foi encontrado na posição ${pos}`)
}