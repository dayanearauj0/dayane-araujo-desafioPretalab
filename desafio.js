/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. 
Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/


function calcularRankingMedalhas() {
    let medalhasPorPais = {}; // Objeto para armazenar medalhas por país

        while (true) {
            let pais = prompt("Digite o nome do país (ou 'sair' para terminar):");

            if (pais.toLowerCase() === "sair") {
               break; // Encerra o loop se o usuário digitar "sair"
            }

        function coletarMedalhas(tipo) {
             let quantidade;
             while (true) {
               quantidade = parseInt(prompt(`Digite a quantidade de medalhas de ${tipo} do(a) ${pais}:`), 10);
                if (!isNaN(quantidade) && quantidade >= 0) {
                   return quantidade; // Retorna a quantidade válida
                } else {
                   alert("Por favor, insira um valor numérico válido.");
                   }
                }
            }

            let medalhasOuro = coletarMedalhas("ouro");
            let medalhasPrata = coletarMedalhas("prata");
            let medalhasBronze = coletarMedalhas("bronze");
            let totalMedalhas = medalhasOuro + medalhasPrata + medalhasBronze;

                medalhasPorPais[pais] = totalMedalhas;
            }

            let ranking = "# Ranking de medalhas:\n";
            for (let pais in medalhasPorPais) {
                ranking += `${pais}: ${medalhasPorPais[pais]} medalhas\n`;
            }
            
            alert(ranking);
}

     window.onload = function() {
            calcularRankingMedalhas();
     };