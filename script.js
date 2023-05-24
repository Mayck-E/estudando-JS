/*
$valor = confirm("Vamos juntos aprender a programar em JS?");

if ($valor == true){
    alert("parabens, vamos lá")
} else {
    alert("Opção errada, aperte F5 para recarregar a página")
    StyleSheet.confirm = #fffff
}

*/

/*
email = prompt("Digite seu email: " );

if (email == undefined || email == "") {
    alert("email não coletado")
}else if(email != undefined){
    alert("email " + email + " foi coletado com sucesso");
}
*/

prova = parseFloat(prompt("Digite a nota da prova:"));
trabalho = parseFloat(prompt("Digite a nota da prova:"));

notaFinal = prova + trabalho;

if (prova != parseFloat) {
    alert("apenas números");
} else {
    alert("Nota final: " + notaFinal)
}