# CodeStudy Pro Mobile

App mobile de estudo de programação em HTML, CSS e JavaScript, preparado para gerar APK pelo GitHub Actions.

## Como gerar APK

1. Extraia o ZIP.
2. Envie os arquivos extraídos para um repositório do GitHub.
3. Não envie o ZIP fechado.
4. Abra a aba **Actions**.
5. Clique em **Build Android APK**.
6. Clique em **Run workflow**.
7. Quando terminar, baixe o APK em **Artifacts**.

## Correção desta versão

Esta versão remove o uso de `latest` e usa versões fixas do Capacitor:

- `@capacitor/core`: 7.4.3
- `@capacitor/android`: 7.4.3
- `@capacitor/cli`: 7.4.3
- Node.js no GitHub Actions: 24
- Java: 17

Isso evita erro por mudança automática de versão no GitHub.

## Arquivos importantes

- `index.html`: entrada web.
- `styles.css`: estilo.
- `app.js`: lógica do app.
- `data.js`: aulas/conteúdo.
- `www/`: pasta copiada para dentro do Android.
- `.github/workflows/build-apk.yml`: workflow que gera APK.
- `index-mobile-unico.html`: versão única para testar no navegador.


Correção: workflow sem --verbose no Capacitor, porque essa opção quebra em algumas versões do CLI.
