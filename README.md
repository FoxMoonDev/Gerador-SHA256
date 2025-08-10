# Ferramenta de Segurança para Senhas
## [![](https://img.shields.io/badge/Open-App-blue?style=for-the-badge)](https://foxmoondev.github.io/Gerador-SHA256/)  👈 Run site online

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)
* Uma aplicação web front-end completa, construída para oferecer três funcionalidades essenciais de segurança de senhas, rodando 100% no navegador do cliente para garantir a máxima privacidade.

---

### Screenshot da Aplicação


| Gerador de Hash Seguro | Transformador de Senha (Leet Speak) | Gerador de Senha Aleatória |
| :---: | :---: | :---: |
| <img width="350" alt="Funcionalidade de Gerar Hash Seguro" src="https://github.com/user-attachments/assets/6e254797-22e8-4246-a9ec-e02278737948"> | <img width="350" alt="Funcionalidade de Transformar Senha" src="https://github.com/user-attachments/assets/a8d1d001-d957-46ff-9871-7b6718477171"> | <img width="350" alt="Funcionalidade de Gerar Senha Aleatória" src="https://github.com/user-attachments/assets/8ba22f96-2520-4669-951f-bd1c85409440"> |
---

## ✨ Funcionalidades

Este projeto é dividido em três ferramentas independentes e poderosas:

### 1. Gerador de Hash Seguro (PBKDF2)
- **Propósito:** Ideal para desenvolvedores que precisam armazenar senhas de usuários de forma segura em um banco de dados.
- **Segurança:** Utiliza o algoritmo **PBKDF2-HMAC-SHA-256**, o padrão da indústria para hashing de senhas.
- **Salt Aleatório:** Para cada senha, um "salt" criptograficamente seguro e aleatório de 16 bytes é gerado.
- **Iterações:** O processo de hashing é repetido 100.000 vezes (`Key Stretching`) para torná-lo propositalmente lento contra ataques de força bruta.
- **Saída Completa:** O resultado é o `salt:hash`, formato correto para armazenamento e verificação futura.

### 2. Transformador de Senha (Leet Speak)
- **Propósito:** Transforma uma palavra ou frase memorável (ex: "meu abacate") em uma senha mais forte e complexa (ex: "M3u_@b@c@+E!").
- **Regras de Transformação:**
    - Substitui vogais e consoantes comuns por números e símbolos (ex: `a` por `@` ou `4`, `e` por `3`, `s` por `$`).
    - Capitaliza a primeira letra e adiciona um símbolo especial no final para aumentar a complexidade.
    - O resultado é parcialmente aleatório para que a mesma palavra não gere sempre a mesma transformação.

### 3. Gerador de Senha 100% Aleatória
- **Propósito:** Cria senhas fortes e imprevisíveis para uso geral.
- **Customização Total:** Permite ao usuário definir:
    - O **comprimento** da senha (de 8 a 64 caracteres).
    - A inclusão de **letras maiúsculas**.
    - A inclusão de **números**.
    - A inclusão de **símbolos**.
- **Segurança:** Utiliza a API `window.crypto.getRandomValues` para garantir aleatoriedade de nível criptográfico, muito superior ao `Math.random()`.

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6+):** Lógica principal da aplicação.
- **Web Crypto API (`SubtleCrypto`):** Utilizada para a geração de hashes PBKDF2 e para a criação de senhas aleatórias seguras.
- **HTML5:** Estrutura semântica da página.
- **CSS3:** Estilização moderna, incluindo Flexbox e Grid para um layout responsivo.
- **GitHub Pages:** Para a hospedagem e deploy do site.

---

## 🚀 Como Rodar Localmente

Para rodar este projeto na sua máquina, não é necessário nenhuma instalação complexa.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/FoxMoonDev/SEU-REPOSITORIO.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd SEU-REPOSITORIO
    ```

3.  **Abra o arquivo `index.html` em um navegador.**
   
---

## ✍️ Autor e Créditos

Este projeto foi idealizado, projetado e desenvolvido por **FoxMoonDev**.

- **GitHub:** [@FoxMoonDev](https://github.com/FoxMoonDev)
- ⭐ Click Star For More  ☝🤓

O código foi criado como uma ferramenta prática e educacional para demonstrar conceitos importantes de segurança de senhas no front-end. Sinta-se à vontade para usar, modificar e aprender com este projeto.

---

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes (ou simplesmente afirme que está sob a licença MIT se você não tiver um arquivo de licença).
