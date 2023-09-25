# Decskill Microfrontends SPA

Este repositório contém uma Single Page Application (SPA) que utiliza a arquitetura de Microfrontends. A aplicação principal é chamada "decskill-spa-root" e consiste em vários módulos Microfrontends e uma biblioteca compartilhada.

## Ferramemantas e SO Utilizadas
-Angular CLI: 12.2.7
-Node: 14.20.0
-Package Manager: npm 6.14.17
-OS: win32 x64

## Configuração do Ambiente

Para iniciar o projeto, siga os seguintes passos:

1. Execute o comando abaixo para instalar as dependências em todos os módulos e biblioteca na raiz do projeto "decskill-spa-root":
    ```bash
    npm run install:all


2. Inicie as aplicações usando o comando:
    ```bash
    npm run start:all


Isso iniciará as seguintes aplicações em portas específicas a aplicação ficará servida em http://localhost:4200/:

- decskill-spa-root (Porta 4200)
- decskill-mfe-home (Porta 5000)
- decskill-mfe-explorer (Porta 5001)

## Introdução

A arquitetura de Microfrontends oferece diversas vantagens para o desenvolvimento de aplicações web. Neste projeto, destacamos as seguintes vantagens:

- **Desenvolvimento Independente**: Cada módulo é desenvolvido e mantido de forma independente, permitindo que equipes diferentes trabalhem em partes diferentes do aplicativo sem afetar o funcionamento geral.

- **Escalabilidade**: É fácil adicionar ou remover módulos conforme necessário, tornando o aplicativo escalável e flexível.

- **Reutilização de Código**: A biblioteca compartilhada "decskill-lib-fed" contém componentes, serviços e lógica de negócios comuns que podem ser compartilhados entre os módulos, economizando tempo e esforço de desenvolvimento.

## Estrutura do Projeto

A aplicação principal "decskill-spa-root" atua como um host para os módulos Microfrontends. Ela tem dois remotes, "decskill-mfe-home" e "decskill-mfe-explorer", que são carregados dinamicamente conforme necessário.

Todas as dependências comuns entre os módulos são mantidas na biblioteca "decskill-lib-fed", que é importada pelos módulos conforme necessário.


