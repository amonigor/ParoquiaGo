### Requisitos para desenvolvimento:
- Java 17
- Android SDK 33 (Tiramisu)
- Node v20.5.1 / npm 9.8.0

Não esqueça de informar o caminho para o Android SDK dentro de ```android/local.properties``` caso ele esteja instalado em outro lugar além do padrão.

### Configuração do ambiente
Para conseguir contribuir com o projeto, é necessário algumas configurações iniciais.
- Adicione a [chave de API do Google Maps](https://console.cloud.google.com/apis/library) no .env do projeto. Dentro da raiz do repositório você consegue achar um arquivo chamado ```.env.example```, copie o conteúdo desse arquivo e substitua os valores coringas pelo valores reais.
- Dentro de ```android/local.properties```, adicione o caminho para o Android SDK no seu sistema, seguindo o seguinte formado: ```sdk.dir = /caminho/do/sdk```
- Agora para poder contribuir com o projeto, execute o seguinte comando para poder rodar as verificações "pre-push", mantendo assim a qualidade do software escrito.

    ```bash
    npx husky install
    ```

### Para rodar o projeto localmente:
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
