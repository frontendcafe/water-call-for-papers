# Proyecto Water

## App Call for papers

[Notion del proyecto](https://www.notion.so/hifrontendcafe/App-Call-for-papers-e750b95638db430a9cd9c4c890ae63e6)
[Diseño del proyecto](https://www.figma.com/file/yqFuCDsK4VAVoV7RAYkn0M/Proceso-dise%C3%B1o-CMYK)

### Documentos importantes

- [Cronograma CMYK 5](https://www.notion.so/hifrontendcafe/Cronograma-CMYK-5-a07d7a873d884b5daa0299f948612e1c)
- [Handbook CMYK](https://servicedsgnclub.notion.site/servicedsgnclub/Handbook-CMYK-5-05e7d829e637488e92bda596d2ae365d)
- [Documentos y herramientas propuestas](https://hifrontendcafe.notion.site/Documentos-tiles-0f06b1283c2443e3a8edec08eaf2c8fc)
- [CMYK - Starter propuesto](https://github.com/rolivencia/cmyk-5-starter)

### Inicializar el proyecto

- Clonar repositorio
- Ejecutar `npm install` para instalar las dependencias
- Agregar configuración básica para prettier y eslint
  - Instalar extensiones recomendadas
  - Ingresar a la configuración de vscode `ctrl + shift + p` o `cmd + shift + p`
  - Buscar `Preferences: Open User Settings (JSON)`
  - Pegar las siguientes reglas: 
```json
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
```
  - Si hay alguna duplicada, aparecera con un subrayado azul, eliminar la regla vieja.
  - Cualquier duda consultar en los canales de discord correspondientes al equipo

### Comandos útiles
Para correr la app en http://localhost:3000
```bash
npm run dev
```
Para correr Storybook en http://localhost:6006
```bash
npm run storybook
```

### Librerías utilizadas

### Extensiones utilizadas en Visual Studio Code
- Prettier 
<img width="515" alt="image" src="https://user-images.githubusercontent.com/38388588/183514332-dc8fa5b3-bdce-4cbf-a1a2-ad1ca9c7d612.png">
- Eslint
<img width="515" alt="image" src="https://user-images.githubusercontent.com/38388588/183516938-19699e4c-934c-487b-b166-e1e48d62639f.png">
- ErrorLens
<img width="638" alt="image" src="https://user-images.githubusercontent.com/38388588/183519331-53546449-82d0-4d64-9a5c-ecc24074165a.png">
- Tailwind CSS IntelliSense
<img width="638" alt="image" src="https://user-images.githubusercontent.com/38388588/183519369-c5d2d390-e3e9-4fb4-9f37-eadc9887519a.png">


<a href="https://vercel.com/?utm_source=hifrontendcafe&utm_campaign=oss">
  <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" alt="Powered by Vercel" />
</a>
