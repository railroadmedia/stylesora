# Stylesora

Stylesora is a CSS package built on [tailwind](https://tailwindcss.com/docs) and [tailwind-ui](https://tailwindui.com/components). Along with these core packages, Stylesora also includes helpful patterns built with [tailwinds directives](https://tailwindcss.com/docs/functions-and-directives), which allows for faster prototyping and less class declarations. 

## Getting Started
### Instalation
`npm i stylesora --save`
#### In webpack.mix.js add the following:

```js
mix.postCss('node_modules/stylesora/dist/stylesora.css', 'public/assets/css/stylesora')
   .purgeCss({
        folders: ['resources', 'vendor/railroad', 'node_modules/vuesora'],
        whitelistPatterns: [/guitareo/, /semester-pack/, /mce-/, /noty_/, /no-scroll/, /hide-/, /intercom-/, /flatpickr-/,
            /cropper/, /stripe-element-container/, /StripeElement/, /icon-/, /numInput/, /flatpickr/, /cur-year/,
            /numInput-/, /arrowUp/, /arrowDown/]
    });
```

#### Compile Assets
`npm run dev`

#### Include Stylesora in Template
```html
<link href="{{ asset('assets/css/stylesora/stylesora.css') }}" rel="stylesheet">
```

## Library Commands
#### Compile and watch for Development

`yarn lib:watch`
#### Build for Production

`yarn lib:build`

## Documentation
#### Compile and watch Docs
`yarn docs:watch`
#### Build Docs
`yarn docs:build`

## Developing in other Environments
#### Run Symlink Command
`./link-stylesora.sh`