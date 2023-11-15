# ParoquiaGo
### Integrantes do grupo
- Bruno Luis ([LinkedIn](https://www.linkedin.com/in/brunolass/))
- Gabriel Lima ([LinkedIn](https://www.linkedin.com/in/gabriel-lima-0101/))
- Igor Amon ([LinkedIn](https://www.linkedin.com/in/igor-amon/))
- Jorge Fernando ([LinkedIn](https://www.linkedin.com/in/jorge-fernando-pereira-2348811a0/))
- Lucas Paraiso ([LinkedIn](https://www.linkedin.com/in/lucasparaiso/))
- Samara Jaques ([LinkedIn](https://www.linkedin.com/in/samarajaques/))
- Victor Filippi ([LinkedIn](https://www.linkedin.com/in/victorfilippi/))

### Sobre o projeto
O aplicativo se chama “Paróquia GO” fazendo referência à sua principal função de geolocalização das paróquias administradas pela diocese de Santos. Quando o usuário acessar o aplicativo já estará tendo a visão do mapa do local de onde ele estiver, podendo fazer a busca da paróquia mais próxima ou digitando também o nome/endereço da paróquia desejada, o aplicativo irá retornar as informações sobre a respectiva instituição além de oferecer um botão para gerar uma rota até o local desejado, abrindo assim um aplicativo de localização preferido do usuário para tal função. Além dessa funcionalidade principal, o aplicativo fornecerá áreas dedicadas para notícias e história da diocese de Santos, buscando essas informações da API utilizada atualmente no site da instituição.

<br><br>

## Contribua com o projeto!
A seguir segue uma lista de tópicos para você conseguir rodar o projeto localmente e contribuir com o projeto.

### Requisitos para desenvolvimento
- Java 17
- Android SDK 33 (Tiramisu)
- Node v20.5.1 / npm 9.8.0

Não esqueça de informar o caminho para o Android SDK dentro de ```android/local.properties``` caso ele esteja instalado em outro lugar além do padrão.

### Configuração do ambiente
Para conseguir contribuir com o projeto, é necessário algumas configurações iniciais.
- Adicione a [chave de API do Google Maps](https://console.cloud.google.com/apis/library) no .env do projeto. Dentro da raiz do repositório você consegue achar um arquivo chamado ```.env.example```, copie o conteúdo desse arquivo e substitua os valores coringas pelo valores reais.
- Dentro de ```android/local.properties```, adicione o caminho para o Android SDK no seu sistema, seguindo o seguinte formado: ```sdk.dir = /caminho/do/sdk```
- Rode o seguinte comando para instalar as dependências do projeto.

    ```bash
    npm i
    ```

### Para rodar o projeto localmente
Verificar se cumpre com os requisitos para o desenvolvimento, se sim basta rodar o comando abaixo e iniciar o emulador do android.

```bash
npm start
```

Ou rode o seguinte comando para iniciar o emulador junto ao projeto.

```bash
npm run android
```

### Importante lembrar
O repositório está configurado com husky para executar os testes e fazer o lint do código antes de um evento de push, então se seu push estiver acusando erro, confira se seus testes não possuem erros ou se seu código está corretamente escrito.
