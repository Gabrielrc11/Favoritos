function Calcular(){
	var nome = (document.getElementById('n').value);
	var peso = (document.getElementById('p').value);
	var altura = (document.getElementById('a').value);
	var imc = peso / (altura * altura);
	imc = Math.round(imc);
	var dataHora, xHora, saudacao;
	dataHora = new Date();
	xHora = dataHora.getHours();
	var resultado1;
	var resultado2;

	if (xHora >= 0 && xHora <12) {saudacao = "Bom Dia, "}
	if (xHora >= 12 && xHora < 18) {saudacao = "Boa Tarde, "}
	if (xHora >= 18 && xHora <= 23) {saudacao = "Boa Noite, "}

	if (imc < 16) {
    	resultado1 = saudacao + nome;
    	resultado2 = "Seu IMC é: " + imc + " e você está com magreza grave";
  	} else if (imc >= 16 && imc < 17) {
    	resultado1 = saudacao + nome;
    	resultado2 = "Seu IMC é: " + imc + " e você está com magreza moderada";
  	} else if (imc >= 17 && imc < 18.5) {
    	resultado1 = saudacao + nome;
    	resultado2 = "Seu IMC é: " + imc + " e você está com magreza leve";
  	} else if (imc >= 18.5 && imc < 25) {
    	resultado1 = saudacao + nome;
    	resultado2 = "Seu IMC é: " + imc + " e você está saudável";
  	} else if (imc >= 25 && imc < 30) {
    	resultado1 = saudacao + nome;
    	resultado2 = "Seu IMC é: " + imc + " e você está com sobrepeso";
  	} else if (imc >= 30 && imc < 35) {
    	resultado1 = saudacao + nome;
    	resultado2 = "Seu IMC é: " + imc + " e você está com obesidade grau I";
  	} else if (imc >= 35 && imc < 40) {
    	resultado1 = saudacao + nome;
    	resultado2 = "Seu IMC é: " + imc + " e você está com obesidade grau II";
  	} else if (imc >= 40) {
    	resultado1 = saudacao + nome;
    	resultado2 = "Seu IMC é: " + imc + " e você está com obesidade grau III";
  	}

	var r1=resultado1;
	var r2=resultado2;

	if(resultado1 === undefined || resultado1 === undefined){
		alert("Preencha todos os campos");
		container.style.display = 'none';
	}

	document.getElementById('resultado1').innerHTML=r1;
	document.getElementById('resultado2').innerHTML=r2;
}