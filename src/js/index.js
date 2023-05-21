
const submit = document.querySelector(".submit");


submit.addEventListener("click", (e) => {
    e.preventDefault();
    const nome = document.querySelector("#name");
    const nomePessoa = nome.value;

    const peso = document.querySelector(".peso");
    const valorPeso = peso.value;

    const altura = document.querySelector(".altura");
    const valorAltura = altura.value;

    const calcularImc = (valorPeso / (valorAltura * valorAltura));

    const textArea = document.querySelector("#calcular-imc")


    if (calcularImc.toFixed(1) <= 16.9) {
        textArea.textContent = nomePessoa + " seu IMC é de " + calcularImc.toFixed(1) + " \nprecisa comer mais, pois está muito abaixo do peso ";
    } else if (calcularImc.toFixed(1) >= 17 && calcularImc.toFixed(1) <= 18.4) {
        textArea.textContent = nomePessoa + " seu IMC é de " + calcularImc.toFixed(1) + " \nsó um pouco abaixo do peso, mas está quase lá...";
    } else if (calcularImc.toFixed(1) >= 18.5 && calcularImc.toFixed(1) <= 24.9) {
        textArea.textContent = nomePessoa + " seu IMC é de " + calcularImc.toFixed(1) + " \nUau muitos bens você está no peso ideal continue assim!!";

    } else if (calcularImc.toFixed(1) >= 25 && calcularImc.toFixed(1) <= 29.9) {
        textArea.textContent = nomePessoa + "s eu IMC é de " + calcularImc.toFixed(1) + " \nComece a se preocupar, pois está acima do peso mas nada que uma boa alimentação não resolva :)";

    } else if (calcularImc.toFixed(1) >= 30 && calcularImc.toFixed(1) <= 34.9) {
        textArea.textContent = nomePessoa + " seu IMC é de " + calcularImc.toFixed(1) + " \nCuidado já está com obesidade grau 1 está associada a um aumento no risco de doenças cardiovasculares, diabetes e outras condições de saúde. Estar obeso reduz sua qualidade de vida por isso é importante prevenir a obesidade para evitar complicações futuras.";

    } else if (calcularImc.toFixed(1) >= 35 && calcularImc.toFixed(1) <= 40) {
        textArea.textContent = nomePessoa + " seu IMC é de " + calcularImc.toFixed(1) + " \nCuidado já está com obesidade grau 2, apresentando risco grave para outras doenças crônicas e cardiovasculares.";

    } else {
        textArea.textContent = nomePessoa + " seu IMC é de " + calcularImc.toFixed(1) + " \nCuidado já está com obesidade grau 3, ela pode trazer consigo uma série de complicações, como o diabetes, a hipertensão, as doenças cardíacas, a depressão, a infertilidade.";
    }

});

