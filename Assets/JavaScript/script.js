function funcao2() {
    document.write("Marcelos");
}

//console.log ("mensagem");
//console.log (1);
//let: valor = "Francisco";
//console.log(valor);

//console.warn(2);
//console.error(3);

//let: valor = "Francisco";
//alert (1);
//alert("mensagem");
//alert (valor);

//let: valor = prompt ("Qual o Seu nome?")
//alert (valor);

//Alert ("Olá Tudo bem?", valor);

//let: idade = confirm ("Você tem mais de 18 anos?");
//console.log (idade);

//let numero = prompt ("Escolha um número:");

//while. (numero*numero != prompt ("Qual a multiplicação desse número por ele mesmo?")) {
//
//};
    document.write ('Olá');
    var n1 = Number(window.prompt('Digite um número: '));
    var n2 = Number(window.prompt('Digite Outro número: '));
    var n3 = Number(window.prompt('Agora mais um número'));
    var s = n1 + n2 + n3
    var sub = n1 - n2 - n3
    var mult = n1 * n2 * n3
    var divi = n1 / n2 / n3
    window.alert(`A soma dos valores é ${n1}, ${n2} e ${n3} é: ` + String(s))
    window.alert(`A subtração dos valores é ${n1}, ${n2} e ${n3} é: ` + String(sub))
    window.alert(`A multiplicação dos valores é ${n1}, ${n2} e ${n3} é: ` + String(mult))
    window.alert(`A divisão dos valores é ${n1}, ${n2} e ${n3} é: ` + String(divi))
    if (s > 10) {
        window.alert('A soma dos Numeros é maior que 10')
            & console.log('A soma dos numeros é maior que 10')
    }
    else {
        window.alert('A soma dos numéros é menor que 10')
            & console.log('a soma dos numeros é menor que 10')
    }
    if (sub > 10) {
        window.alert('A subtração dos Numeros é maior que 10')
            & console.log('A subtração dos numeros é maior que 10')
    }
    else {
        window.alert('A subtração dos numéros é menor que 10')
            & console.log('a subtração dos numeros é menor que 10')
    }
    if (mult > 10) {
        window.alert('A multiplicação dos Numeros é maior que 10')
            & console.log('A multiplicação dos numeros é maior que 10')
    }
    else {
        window.alert('A multiplicação dos numéros é menor que 10')
            & console.log('a multiplicação dos numeros é menor que 10')
    }
    if (divi > 10) {
        window.alert('A divisão dos Numeros é maior que 10')
            & console.log('A divisão dos numeros é maior que 10')
    }
    else {
        window.alert('A divisão dos numéros é menor que 10')
            & console.log('a divisão  dos numeros é menor que 10')
    }