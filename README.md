## Exercícios
---

### 1. Pesquisar sobre o que é JWT (Json Web Token) e Cookies para transporte de dados, descrever.

- JWT (Json Web Token):
É  um padão de trocas de informações de objetos JSON entre diferentes aplicações, de uma forma compactada e criptografada, realiza autentificação através de token. Ele é um dos elementos de uma estrutura maior o JOSE (Json Object Signing and Encryption). No JOSE, estão contidas várias outras especificações. São elas: o JWE (Json Web Encryption), responsável pela criptografia para a assinatura do token; o JWA (Json Web Algorithms), a respeito do algoritmo; JWK (Json Web Keys), correspondente as chaves para assinatura; JWS (Json Web Signature), a assinatura do token. Por fim, o JWT que é o token em si.
Exemplo: Um cliente que enviará uma requisição HTTP ao endpoint de autenticação de uma API. Nela o cliente envia, no corpo da requisição dados como endereço de e-mail e senha. Uma vez que os dados enviados pelo cliente tenham sido autenticados no servidor, este criará um token JWT assinado com um segredo interno da API e enviará este token de volta ao cliente, Provido com o token autenticado, o cliente possui acesso aos endpoints da aplicação que antes lhes eram restritos. Para realizar esse acesso, é preciso informar esse token.<br>
Pelo que entendi o JWT é tipo de um convite para uma festa, sem ele você não consegui entrar e ter acesso ao outro lado da porta e participar da festa.

- Cookies para transporte de dados:
São arquivos em texto amarzenados do lado do cliente, informações sobre a navegação pelas páginas de um site.<br>
Pelo que entendi quando você acitar um cookie, ele salvará dados que durante o uso site foi disponibilizados. Esses cookies são bem utilizados na parte de propagandas e marketing, como por exemplo você coloca um certo produto no carrinho e acaba não comprando, esses dados ficarão salvos nos cookies, após o fechamento do site aparecerá comerciais sobre esse tal produto. Ou seja eles são utilizados para indentificar usuarios e facilitar o transporte de dados.

OBS: ajuntando os dois o "JWT" e convite da festa que te da a autentificação e o "cookies" são seus dados.

### 2. Atualizar o sistema de autenticação básico da ultima aula para utilizar JWT.

### 3. Finalizado a implementação do JWT, enviar para mim o link do repositório (que vocês vem trabalhando no exercicio das 14 branches) no privado no discord com o novo sistema de autenticação.

### 4. Pesquisar sobre POO (Programação Orientada a Objetos). O que é POO ?

### 6. Quais as diferenças entre programação estruturada e programação orientada a objetos ?

### 7. Quais linguagens estruturadas e quais linguagens orientadas a objetos ?

### 8. O que são classes e o que são objetos ?

### 9. Quais o quatro pilares da POO ? Descreva cada um deles com suas palavras. 
