function f(x) {
    return 2 * x
}

console.log(f(5.1))

function par(x) {
    if (x % 2 == 0)
        return true
    else
        return false
}

console.log(par(17))

let k = par(36)
console.log(k)

function soma(x = 0, y=0) {
    return x + y
}
console.log(soma(2, 3))
console.log(soma(7))