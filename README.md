# Desafio técnico - Kinebot

Antes de tudo, obrigado pelo interesse em querer trabalhar conosco. O projeto visa avaliar habilidades técnicas e desafios enfrentados no dia-a-dia.
Logo abaixo você encontrará mais informações necessárias para o seu teste.

## Avisos importantes

- Leia com calma em tudo o que está escrito aqui e tente seguir as instruções o mais fielmente possível;
- Crie um repositório no seu GitHub **sem mencionar o Kinebot em nenhum momento**;
- Vá fazendo seus commits no repositório enquanto for avançando;
- Envie o link do seu repositório como resposta do email ao recrutador;
- Fique à vontade para dar uma pesquisada no Google, Stack Overflow ou até no que você já tem de projeto na sua máquina;
- Se surgir alguma dúvida, é só perguntar;
- Boa sorte!

_Corpo do email com o link do repositório do desafio_

> Seu nome
>
> Link do repositório

### Sobre o ambiente da aplicação:

- A aplicação é ser composta de uma API, Front-end e banco de dados.

#### Front-end

- ReactJS

#### Back-end

- ExpressJS

#### Banco de dados

- MySQL

### Observação:

O projeto já está pré configurado com o banco de dados e CORS para a integração entre o front e o back.

### O que é a projeto

O "**Reimagined Spork**" é uma aplicação que gerencia um catálogo de heróis cadastrados. Seu objetivo principal é apresentar ao usuário, de forma interativa, cada herói individualmente, permitindo uma experiência personalizada de navegação pelo conteúdo.

#### Requisitos funcionais

A seguir estão algumas regras de negócio importantes para o funcionamento:

- A aplicação deverá mostrar um héroi a cada interação com o botão click.
- Mostrar todos os heróis cadastrados o botão Fetch deverá ser desabilitado.
- O avatar do herói deverá ser arredondado.

#### Requisitos não funcionais

- Não requer autenticação.
- Integração com o banco de dados é essencial.
- O banco de dados deverá ser executado com docker.

## Exemplo do fluxo

![Interface da aplicação mostrando a página Heroes com um botão Fetch](./GIF.gif)

### Apresentação do seu projeto

Após o envio do email com o link do seu repositório, será marcado uma reunião para fazer a apresentação do seu projeto. Nesse dia é importante ter o projeto rodando.
Iremos perguntar o porque de algumas escolhas técnicas, como foi o processo de desenvolvimento e possíveis adaptações do projeto.

## Avaliação

Atente-se a cumprir a maioria dos requisitos propostos, caso não consiga iremos conversar no dia da apresentação. Caso queira, complementar o projeto com alguma melhoria ou feature fique à vontade.

## O que será avaliado

**Habilidades básicas de criação de projetos backend**

- Conhecimentos sobre REST;
- Uso do Git;
- Integração entre frontend e backend;
- Apresentação de código limpo e organizado.

## O que será um diferencial

- Tratamento de erros.
- Uso do git para controle de versão.
- Organização do código.
- Escolha de bons nomes de variáveis e funções.
- Boa manipulação de estados.

### Como executar o projeto

Versão do NodeJS v14.15.0

1. Clone o repositório.
2. Instale as dependências com o comando `yarn install` nas pastas `api` e `web`.
3. Inicie o projeto com o comando `yarn start` nas pastas `api` e `web`.
4. Inicie o projeto com o comando `docker-compose up --build` na pasta raiz
5. Execute o comando `bash scripts/startup.sh` na pasta raiz para persistir os dados do banco de dados.
