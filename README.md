# Stylesora

Stylesora is a CSS package built on [tailwind](https://tailwindcss.com/docs) and [tailwind-ui](https://tailwindui.com/components). Along with these core packages, Stylesora also includes helpful patterns built with [tailwinds directives](https://tailwindcss.com/docs/functions-and-directives), which allows for faster prototyping and less class declarations. 

## Official Docs
[https://musora-ui-docs.netlify.app/stylesora/](https://musora-ui-docs.netlify.app/stylesora/)

## Getting Started

#### Instalation
<br>

`npm i stylesora --save`

<br><hr>

#### Configuration
##### In webpack.mix.js add the following:

```js
mix.postCss('node_modules/stylesora/dist/stylesora.css', 'public/stylesora').purgeCss({
    folders: ['resources', 'vendor/railroad', 'node_modules/vuesora'],
    whitelistPatterns: [/guitareo/, /semester-pack/, /mce-/, /noty_/, /no-scroll/, /hide-/, /intercom-/, /flatpickr-/,
        /cropper/, /stripe-element-container/, /StripeElement/, /icon-/, /numInput/, /flatpickr/, /cur-year/,
        /numInput-/, /arrowUp/, /arrowDown/]
});
```
##### Include Stylesora in Template

```html
<!-- Include in head -->
<link href="{{ asset('/stylesora/stylesora.css') }}" rel="stylesheet">
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
