# Testes Automatizados - Swag Labs com Cypress

## 📌 Sobre o Projeto
Este projeto contém testes automatizados para o site [Swag Labs](https://www.saucedemo.com/) ```https://www.saucedemo.com/``` utilizando **Cypress**. Os testes incluem cenários de login, adição e remoção de produtos ao carrinho e checkout de carrinho.

## 🚀 Tecnologias Utilizadas
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de programação
- [Node.js](https://nodejs.org/) - Ambiente de execução para JavaScript no servidor
- [Cypress](https://www.cypress.io/) - Framework de testes automatizados
- [Mochawesome Reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter) - Gerador de relatórios para Cypress

## 📂 Estrutura do Projeto
```
📦 cypress/
 ┣ 📂 e2e/test/
 ┃  ┗ 📜 [tests].spec.cy.js
 ┣ 📂 fixtures/
 ┃  ┗ 📜 [data-tests].json
 ┣ 📂 support/
 ┃  ┣ 📂 pages/
 ┃  ┃  ┣ 📜 base.page.js
 ┃  ┃  ┗ 📜 [tests].page.js
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
### 2. Adicionar arquivo loginData.json e checkoutData.json como no modelo abaixo em cypress/fixtures, substituindo pelos dados utilizados para teste:
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
#### checkoutData.json

```sh
{
    "firstName": "NOME_VALIDO",
    "lastName": "SOBRENOME_VALIDO",
    "zipCode": "00000-000"
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

### 5. Gerar Relatório de Testes
#### Para gerar relatórios usando o cypress-mochawesome-reporter, execute o seguinte comando:
```sh
npx cypress run --reporter cypress-mochawesome-reporter
```
O relatório dos testes será gerado em ```cypress/reports/html```

## 📌 Casos de Teste Implementados
### Login:
- ✅ TC001 - Login com credenciais válidas
- ✅ TC002 - Tentar realizar Login com username inválido
- ✅ TC003 - Tentar realizar Login com senha inválida
- ✅ TC004 - Tentar realizar login com username vazio
- ✅ TC005 - Tentar realizar login com senha vazia
- ✅ TC006 - Tentar realizar login com conta bloqueada

### Carrinho:
- ✅ TC001 - Validar adição de produto ao carrinho
- ✅ TC002 - Validar remoção de produto do carrinho

### Checkout:
- ✅ TC001 - Validar Checkout de carrinho com dados válidos

---
## Autor

<a href="https://github.com/rafael-isidro">
    <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/118776145?v=4" width="100px;" alt="Foto de perfil - Rafael Isidro"/>
    <br />
    <sub><b>Rafael Santos Isidro</b></sub>
</a> 
<br />

