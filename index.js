/**
 * Classifica um herói de acordo com seu nível de experiência.
 * @param {string} nome - O nome do herói.
 * @param {number} xp - A quantidade de experiência do herói.
 * @returns {string} Uma mensagem classificando o herói de acordo com seu nível.
 */ 
function classificarHeroi(nome, xp) {
    // Verifica o nível do herói de acordo com sua experiência
    if (xp < 1000) {
        return mensagemPadrao(nome) + 'Ferro';
    } else if (xp >= 1001 && xp <= 2000) {
        return mensagemPadrao(nome) + 'Bronze';
    } else if (xp >= 2001 && xp <= 5000) {
        return mensagemPadrao(nome) + 'Prata';
    } else if (xp >= 6001 && xp <= 7000) {
        return mensagemPadrao(nome) + 'Ouro';
    } else if (xp >= 7001 && xp <= 8000) {
        return mensagemPadrao(nome) + 'Platina';
    } else if (xp >= 8001 && xp <= 9000) {
        return mensagemPadrao(nome) + 'Ascendente';
    } else if (xp >= 9001 && xp <= 10000) {
        return mensagemPadrao(nome) + 'Imortal';
    } else {
        return mensagemPadrao(nome) +  'Radiante';
    }
}

/**
 * Recebe o nome do herói e retorna uma string padrão
 * Ex: "O Herói de nome {nome} está no nível "
 */
function mensagemPadrao(nome) {
    return `O Herói de nome ${nome} está no nível `;
}

const prompt = require('prompt-sync')();

while (true) {
    
    let nome = prompt("Digite o nome do herói: ");
    let xp = parseInt(prompt("Digite a quantidade de experiência do herói: "));

    let mensagem = classificarHeroi(nome, xp);
    console.log(mensagem);
    let opcao = prompt("Deseja classificar outro herói? (S/N): ");
    if (opcao.toUpperCase() !== "S") {
        break;
    }
}

// Exemplo de uso da função
//console.log(classificarHeroi("Superman", 10000));

/**
 * Nível Ferro até 1000
 * Nível Bronze entre 1001 e 2000
 * Nível Prata entre 2001 e 5000
 * Nível Ouro entre 6001 e 7000
 * Nível Platina entre 7001 e 8000
 * Nível Ascendente entre 8001 e 9000
 * Nível Imortal entre 9001 e 10000
 * Nível Radiante acima de 10001
 */