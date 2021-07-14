# Stylesora

Stylesora is a set of [tailwind](https://tailwindcss.com/docs) plugins for Musora's web applications. Stylesoras plugins provide helpful patterns for faster prototyping and less class declarations. 

## Official Docs
[https://musora-ui-docs.netlify.app/stylesora/](https://musora-ui-docs.netlify.app/stylesora/)

## Getting Started

#### Instalation

`yarn add Stylesora`

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
        //Stylesora's Base Styles
        require('stylesora/base')(),
        //Stylesora's Utility Classes
        require('stylesora/utilities/')(),
        //Stylesora's Component Styles
        require('stylesora/components/')(),
    ],
}
```

#### Library Commands
##### Compile and watch for Development

`yarn lib:watch`
##### Build for Production

`yarn lib:build`

#### Developing in other Environments
##### Run Symlink Command

`./link-stylesora.sh`

