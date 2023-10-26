// Desafio - Nivel do Herói

let heroName = "Barbarian" // Nome do Heroi. Altere o nome entre ""
let heroXp = 500 // Quantidade de XP do heroi. Altere essa XP
let level = ""

// Estrutura de decisão para classificar o nível do heroi
if (heroXp > 1000 && heroXp <= 2000) {
    level = "Bronze"
} else if (heroXp > 2000 && heroXp <= 5000) {
    level = "Prata"
} else if (heroXp > 5000 && heroXp <= 7000) {
    level = "Ouro"
} else if (heroXp > 7000 && heroXp <= 8000) {
    level = "Platina"
} else if (heroXp > 8000 && heroXp <= 9000) {
    level = "Ascendente"
} else if (heroXp > 9000 && heroXp <= 10000) {
    level = "Imortal"
} else if (heroXp >= 10001) {
    level = "Radiante"
} else {
    level = "Ferro"
}

// Exibe no console qual o nivel do heroi com seu nome
console.log(`O Herói de nome ${heroName} está no nível de ${level}`)