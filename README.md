### Requisitos para desenvolvimento:
- Java 17
- Android SDK 33 (Tiramisu)
- Node v20.5.1 / npm 9.8.0

Não esqueça de informar o caminho para o Android SDK dentro de ```android/local.properties``` caso ele esteja instalado em outro lugar além do padrão.

### Para rodar o projeto localmente:
Verificar se cumpre com os requisitos para o desenvolvimento, se sim basta rodar o comando abaixo e iniciar o emulador do android.

```bash
npm start
```

### Importante lembrar
O repositório está configurado com husky para executar os testes e fazer o lint do código antes de um evento de push, então se seu push estiver acusando erro, confira se seus testes não possuem erros ou se seu código está corretamente escrito.
