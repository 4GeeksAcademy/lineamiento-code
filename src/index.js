function contarLetras(abecedario) {
    const cuenta = {}

    for (let i = 0; i < abecedario.length; i++) {
        let letra = abecedario[i];
        if (cuenta[letra] !== undefined) {
            cuenta[letra] += 1;
        } else {
            cuenta[letra] = 1
        }
    }
    return cuenta;
}

console.log(contarLetras('abecedario'));