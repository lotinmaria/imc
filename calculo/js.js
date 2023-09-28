/*function calcular(soma) {

    let soma = 0 

    for (v of vetor) {
        soma = soma + v
    }
    return soma;
}

let vet = [1,2,3,4]
soma()

console.log(calcular(vet1));
*/

function click_calcular() {
    let ValorA = document.getElementById("txtValorA").value;
    let ValorB = document.getElementById("txtValorB").value;
    if (ValorA == "") {
        alert(`informe o valor A`);
    }
    else if(ValorB == ""){
        alert(`informe o valor B`)
    }
    else{
        let resultado = Number(ValorA) + Number(ValorB)
        document.getElementById("total").value = resultado;
    }

}

function click_limpar(){
    document.getElementById("txtValorA").value = "";
    document.getElementById("txtValorB").value = "";
    document.getElementById("total").value = "";
}