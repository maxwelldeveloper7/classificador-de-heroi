# Hero Classification System

A simple command-line application that classifies heroes based on their experience points (XP).

## Description

This JavaScript application allows users to input a hero's name and experience points, and then determines their rank based on a predefined classification system. The program runs in a loop, allowing multiple hero classifications until the user chooses to exit.

## Features

- Interactive command-line interface
- Real-time hero classification
- Multiple ranking tiers
- Continuous classification option

## Classification Tiers

| Rank | Experience Points (XP) |
|------|----------------------|
| Ferro (Iron) | 0 - 1,000 |
| Bronze | 1,001 - 2,000 |
| Prata (Silver) | 2,001 - 5,000 |
| Ouro (Gold) | 6,001 - 7,000 |
| Platina (Platinum) | 7,001 - 8,000 |
| Ascendente (Ascendant) | 8,001 - 9,000 |
| Imortal (Immortal) | 9,001 - 10,000 |
| Radiante (Radiant) | 10,001+ |

## Prerequisites

- Node.js installed on your system
- npm (Node Package Manager)

## Installation

1. Clone this repository
2. Install the required dependencies:
```bash
npm install prompt-sync
```
## Usage
1. Run the program:
```bash
node index.js
```
2. Follow the prompts:

- Enter the hero's name
- Enter the hero's experience points
- Choose whether to classify another hero (S/N)

## Example
```text
Digite o nome do herói: Superman
Digite a quantidade de experiência do herói: 9500
O Herói de nome Superman está no nível Imortal
Deseja classificar outro herói? (S/N): N
```
## Contributing
Feel free to submit issues and enhancement requests.

## Licence
This project is open source and available under the MIT License.
```text
This README provides a clear overview of your project, explains how to install and use it, and includes helpful information like the classification tiers. It follows standard README conventions and includes all the essential sections that users would need to understand and use your hero classification system.
```
<br><br>


# Sistema de Classificação de Heróis

Um aplicativo simples de linha de comando que classifica heróis com base em seus pontos de experiência (XP).

## Descrição

Este aplicativo em JavaScript permite que os usuários insiram o nome de um herói e seus pontos de experiência, determinando seu nível com base em um sistema de classificação predefinido. O programa funciona em um loop, permitindo a classificação de vários heróis até que o usuário decida sair.

## Funcionalidades

- Interface interativa de linha de comando
- Classificação de heróis em tempo real
- Vários níveis de classificação
- Opção de classificação contínua

## Níveis de Classificação

| Nível         | Pontos de Experiência (XP) |
|---------------|-----------------------------|
| Ferro (Iron)  | 0 - 1.000                   |
| Bronze        | 1.001 - 2.000               |
| Prata (Silver)| 2.001 - 5.000               |
| Ouro (Gold)   | 6.001 - 7.000               |
| Platina       | 7.001 - 8.000               |
| Ascendente    | 8.001 - 9.000               |
| Imortal       | 9.001 - 10.000              |
| Radiante      | 10.001+                     |

## Pré-requisitos

- Node.js instalado no seu sistema
- npm (Node Package Manager)

## Instalação

1. Clone este repositório.
2. Instale as dependências necessárias:
   ```bash
   npm install prompt-sync
   ```

## Uso

1. Execute o programa:
   ```bash
   node index.js
   ```
2. Siga as instruções:

   - Insira o nome do herói.
   - Insira os pontos de experiência do herói.
   - Escolha se deseja classificar outro herói (S/N).

## Exemplo
```text
Digite o nome do herói: Superman
Digite a quantidade de experiência do herói: 9500
O Herói de nome Superman está no nível Imortal
Deseja classificar outro herói? (S/N): N
```

## Contribuições
Sinta-se à vontade para enviar problemas (issues) e solicitações de melhorias.

## Licença
Este projeto é open source e está disponível sob a licença MIT.

```text
Este README fornece uma visão geral clara do seu projeto, explica como instalá-lo e usá-lo, além de incluir informações úteis como os níveis de classificação. Ele segue as convenções padrão de README e inclui todas as seções essenciais que os usuários precisam para entender e utilizar seu sistema de classificação de heróis.
```