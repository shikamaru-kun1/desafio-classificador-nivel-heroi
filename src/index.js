//Programa: Classificador de Nível de Herói

let lerTeclado = require("prompt-sync")(), idioma, nomeHeroi, experiencePoints, resposta;

function isInteger(valor){
    return typeof valor === "number" && isFinite(valor) && Math.floor(valor) === valor;
}

do {
    console.log("EM QUE IDIOMA PRETENDE EXECUTAR O PROGRAMA? | WHAT IS THE LANGUAGE YOU WANT TO RUN THE PROGRAM?");
    console.log("\n===============================================================================================\n");
    console.log("PARA PORTUGUÊS PRESSIONE A TECLA '1' | FOR ENGLISH TYPE '2'");
    console.log("\n===========================================================\n");
    idioma = lerTeclado();

    if(idioma == 1){
        console.log("VOCÊ ESCOLHEU 'PORTUGUÊS'!");
        console.log("\n==========================\n");
        console.log("PROGRAMA: ---- CLASSIFICADOR DE NÍVEL DE HERÓI ----");
        console.log("\n===================================================\n");
        console.log("QUAL É O NOME DO HERÓI?");
        nomeHeroi = lerTeclado();
        console.log("\n=======================\n");
        console.log("QUAL É O NÚMERO DE PONTOS DE EXPERIÊNCIA?");
        experiencePoints = Number(lerTeclado());
        console.log("\n=========================================\n");

        if(isInteger(experiencePoints)){
            if(experiencePoints >= 1000000){
                console.log("OS PONTOS DE EXPERIÊNCIA NÃO PODEM SER IGUAIS OU SUPERIORES À 1000000!");
                console.log("\n======================================================================\n");
            }
        }else{
            console.log("O NÚMERO DIGITADO É INVÁLIDO!");
            console.log("\n=============================\n");
        }

        classificarHeroi(experiencePoints, idioma, nomeHeroi);
        console.log("\n==============================================================================\n");
        console.log("DESEJA REPETIR? S/N");
        resposta = converterChar(lerTeclado(), idioma);
    }else
        if(idioma == 2){
            console.log("YOU CHOSE 'ENGLISH'!");
            console.log("\n====================\n");
            console.log("PROGRAM: ---- HERO LEVEL CLASSIFIER ----");
            console.log("\n========================================\n");
            console.log("WHAT IS THE HERO NAME?");
            nomeHeroi = lerTeclado();
            console.log("\n======================\n");
            console.log("WHAT IS THE EXPERIENCE POINTS AMOUNT?");
            experiencePoints = Number(lerTeclado());
            console.log("\n=====================================\n");

            if(isInteger(experiencePoints)){
                if(experiencePoints >= 1000000){
                    console.log("EXPERIENCE POINTS CANNOT BE EQUAL TO OR GREATER THAN 1000000!");
                    console.log("\n=============================================================\n");
                }
            }else{
                console.log("THE NUMBER YOU TYPED IS NOT VALID!");
                console.log("\n==================================\n");
            }

            classificarHeroi(experiencePoints, idioma, nomeHeroi);
            console.log("\n==============================================================================\n");
            console.log("DO YOU WISH TO REPEAT IT? Y/N");
            resposta = converterChar(lerTeclado(), idioma);
        }else{
            console.log("IDIOMA NÃO ATRIBUÍDO! | NON-ASSIGNED LANGUAGE!");
        }

} while(resposta == 's');

function classificarHeroi(pontos, lingua, nome){
    if(pontos >= 1001 && pontos <= 2000){
        if(lingua == 1){
            console.log("O HERÓI DE NOME **" + nome + "** ESTÁ NO NÍVEL DE **BRONZE**");
        }else{
            console.log("HERO NAMED **" + nome + "** IS AT **BRONZE** LEVEL");
        }
    }else
        if(pontos >= 2001 && pontos <= 5000){
            if(lingua == 1){
                return console.log("O HERÓI DE NOME **" + nome + "** ESTÁ NO NÍVEL DE **PRATA**");
            }else{
                return console.log("HERO NAMED **" + nome + "** IS AT **SILVER** LEVEL");
            }
        }else
            if(pontos >= 5001 && pontos <= 7000){
                if(lingua == 1){
                    return console.log("O HERÓI DE NOME **" + nome + "** ESTÁ NO NÍVEL DE **OURO**");
                }else{
                    return console.log("HERO NAMED **" + nome + "** IS AT **GOLD** LEVEL");
                }
            }else
                if(pontos >= 7001 && pontos <= 8000){
                    if(lingua == 1){
                        return console.log("O HERÓI DE NOME **" + nome + "** ESTÁ NO NÍVEL DE **PLATINA**");
                    }else{
                        return console.log("HERO NAMED **" + nome + "** IS AT **PLATINUM** LEVEL");
                    }
                }else
                    if(pontos >= 8001 && pontos <= 9000){
                        if(lingua == 1){
                            return console.log("O HERÓI DE NOME **" + nome + "** ESTÁ NO NÍVEL DE **ASCENDENTE**");
                        }else{
                            return console.log("HERO NAMED **" + nome + "** IS AT **ASCENDING** LEVEL");
                        }
                    }else
                        if(pontos >= 9001 && pontos <= 10000){
                            if(lingua == 1){
                                return console.log("O HERÓI DE NOME **" + nome + "** ESTÁ NO NÍVEL DE **IMORTAL**");
                            }else{
                                return console.log("HERO NAMED **" + nome + "** IS AT **IMMORTAL** LEVEL");
                            }
                        }else
                            if(pontos >= 10001){
                                if(lingua == 1){
                                    return console.log("O HERÓI DE NOME **" + nome + "** ESTÁ NO NÍVEL DE **RADIANTE**");
                                }else{
                                    return console.log("HERO NAMED **" + nome + "** IS AT **RADIANT** LEVEL");
                                }
                            }else{
                                if(lingua == 1){
                                    return console.log("O HERÓI DE NOME **" + nome + "** ESTÁ NO NÍVEL DE **FERRO**");
                                }else{
                                    return console.log("HERO NAMED **" + nome + "** IS AT **IRON** LEVEL");
                                }
                            }
}

function converterChar(letra, lingua){
    if(letra == 'Y' || letra == 'y' || letra == 'S' || letra == 's'){
        return 's';
    }else
        if(letra == 'N' || letra == 'n'){
            return 'n';
        }else{
            if(lingua == 1){
                console.log("OPÇÃO INVÁLIDA!");
            }else{
                console.log("NON-VALID OPTION");
            }

            return 'n';
        }
}