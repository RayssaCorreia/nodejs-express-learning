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
Como o nome já diz ela é orientada a objetos, tentando seguir com o funcionamento das coisas na realidade. Os programas orientados a objetos são escritos em linguagens de "alto nível", ou sejá, voltado para melhor entendimento humano e mais produtividade. Em seus processos são criados coleção de objetos, com estruturas e comportamentos próprios. Ele é um paradigma de programação, uma forma de resolver problemas, com aproveitação de códigos.

### 6. Quais as diferenças entre programação estruturada e programação orientada a objetos ?
-Programação estruturada<br>
Segue uma sequência, rotina, fluxo e manupulação de dados, ultilizando-se de:<br>
    Variáveis<br>
    Procedimentos e funções<br>
    Chamadas a procedimentos e funções<br>
    Tipos de dados definidos pelo usuário<br>

-Programação orientada a objetos<br>
Imitando o mundo real, ela manipula objetos, através dos conceitos:<br>
  Classes<br>
  Métodos	<br>
  Instâncias de variáveis<br>
  Mensagens	<br>
  Herança	<br>
  Polimorfismo<br>

  Ou seja, elas seguem lógicas diferentes, para resolver os problemas.

### 7. Quais linguagens estruturadas e quais linguagens orientadas a objetos ?
Programação estruturada:
- PL/1
- Fortran
- Algol 68
- Cobol
- C
- Pascal
Programação orientada a objetos:
- C++  
- Java
- C#
- Object Pascal
- Python
- SuperCollider
- Ruby
- VB.NET

### 8. O que são classes e o que são objetos ?
Classes: são ajuntamentos de objetos com caracteristicas semelhantes.
Objetos: são referências, variáveis espaços na memoria, onde você trabalha em cima.

### 9. Quais o quatro pilares da POO ? Descreva cada um deles com suas palavras. 
-Encapsulamento: É uma forma de esconder coisas que não são necessárias saber, também como uma forma de segurança não mostrando todos os dados/acontecimentos em si. De uma forma mais visível é tipo de uma caixa preta ou qualquer objeto e coisa que faz algo, mas você nem tem ideia do que está acontecendo por traz.

-Herança: Como o próprio nome já diz, é uma classe que herda(contei) características de outra classe, também como uma forma de reutilização de código, pois coisas que já foram definidas podem ser usadas novamente. Um exemplo seria como uma construtora de casas germinadas a classe "mãe", conteria as medidas, cores (coisas em comum), e a "filha", conteria o proprietário, dia de venda (coisas especificas). Dessa forma não seria necessário reescrever as mediadas da casa para cada proprietário.

-Polimorfismo: Seria trazer algo mais genérico, que tem formas diferentes de ser usadas/escritas. Tipo uma chave e um cartão os dois servirão para abrir a porta, mas com formas/funções diferentes, ou seja, e derivado de uma herança mas diferenciado, também usados para remoção de códigos desnecessários.

-Abstração: É uma forma de simplificar as coisas da vida real para um código, ou seja deixar o mais entendível (sintetizar), tirando a complexidade e deixando pontos específicos, ou seja, deixando o código o menor possível. A forma mais fácil de entender, seria com a representação de uma pessoa, e tantas coisas que poderiam ser descritas como altura, cor, modelo de cabelo, pintas, cicatrizes, personalidade, mas será que todas essas coisas são necessárias para sua aplicação? Eu acho que não, só o nome e CPF já são suficientes.