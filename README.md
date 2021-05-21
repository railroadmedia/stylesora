# Stylesora

Stylesora is a set of [tailwind](https://tailwindcss.com/docs) plugins for Musora's web applications. Stylesoras plugins provide helpful patterns for faster prototyping and less class declarations. 

## Official Docs
[https://musora-ui-docs.netlify.app/stylesora/](https://musora-ui-docs.netlify.app/stylesora/)

## Getting Started

#### Instalation
<br>

`yarn add Stylesora`

<br><hr>

#### Adding Stylesora's theme settings

```js
//tailwind.config.js
const stylesoraTheme = require('stylesora/theme');

module.exports = {
  theme: {
      extend: {
        colors: {
            drumeo: stylesoraTheme.colors.drumeo,
            guitareo: stylesoraTheme.colors.guitareo,
            pianote: stylesoraTheme.colors.pianote,
            singeo: stylesoraTheme.colors.singeo,
        },
        spacing: stylesoraTheme.spacing,
        zIndex: stylesoraTheme.zIndex,
      },
   }
}
```

##### Adding Stylesora's components

```js
//tailwind.config.js
module.exports = {
     theme: {
        //theme settings
     }
     plugins: [
        require('./base')(),
        require('./utilities/')(),
        require('./components/')(),
    ],
}
```

<br><hr>
#### Library Commands
##### Compile and watch for Development
<br>

`yarn lib:watch`
##### Build for Production
<br>

`yarn lib:build`

<br>
<hr>

#### Developing in other Environments
##### Run Symlink Command
<br>

`./link-stylesora.sh`

<br>
