# Testes Automatizados - Swag Labs com Cypress

## 📌 Sobre o Projeto
Este projeto contém testes automatizados para o site [Swag Labs](https://www.saucedemo.com/) ```https://www.saucedemo.com/``` utilizando **Cypress**. Os testes incluem cenários de login, adição de produtos ao carrinho, finalização de compra e logout.

## 🚀 Tecnologias Utilizadas
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de programação
- [Node.js](https://nodejs.org/) - Ambiente de execução para JavaScript no servidor
- [Cypress](https://www.cypress.io/) - Framework de testes automatizados

## 📂 Estrutura do Projeto
```
📦 cypress/
 ┣ 📂 e2e/test/
 ┃  ┗ 📜 [tests].spec.cy.js
 ┣ 📂 fixtures/
 ┃  ┗ 📜 [data-tests].json
 ┣ 📂 support/
 ┃  ┣ 📂 pages/
 ┃  ┣  ┣ 📜 base.page.js
 ┃  ┣  ┗ 📜 [tests].page.js
 ┃  ┣ 📜 commands.js
 ┃  ┗ 📜 e2e.js
 ┣ 📜 cypress.config.js
 ┗ 📜 package.json
```

## ⚙️ Configuração e Instalação
### 1. Clonar o repositório
```sh
git clone https://github.com/rafael-isidro/cypress-swaglabs.git
```
### 2. Adicionar arquivo loginData.json como no modelo abaixo em cypress/fixtures, substituindo username e password pelos dados utilizados para teste:
#### loginData.json:
```sh
{
    "validCredentials": {
      "username": "USERNAME_VALIDO",
      "password": "SENHA_VALIDA"
    },
    "invalidCredentials": {
      "username": "USERNAME_INVALIDO",
      "password": "SENHA_INVALIDA"
    },
    "blockedAccount": {
      "username": "USERNAME_BLOQUEADO",
      "password": "SENHA_VALIDA"
    }
}
```
### 3. Instalar dependências
```sh
cd swaglabs-cypress
npm install
```

### 4. Executar os testes
#### Modo interativo (UI do Cypress):
```sh
npx cypress open
```
#### Modo headless (linha de comando):
```sh
npx cypress run
```

## 📌 Casos de Teste Implementados
- ✅ TC001 - Login com credenciais válidas
- ✅ TC002 - Tentar realizar Login com username inválido
- ✅ TC003 - Tentar realizar Login com senha inválida
- ✅ TC004 - Tentar realizar login com username vazio
- ✅ TC005 - Tentar realizar login com senha vazia
- ✅ TC006 - Tentar realizar login com conta bloqueada

---
## Autor

<a href="https://github.com/rafael-isidro">
    <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/118776145?v=4" width="100px;" alt="Foto de perfil - Rafael Isidro"/>
    <br />
    <sub><b>Rafael Santos Isidro</b></sub>
</a> 
<br />

