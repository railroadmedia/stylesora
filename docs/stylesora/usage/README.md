# Getting Started
#### Instalation
<br>

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
<br>

`npm run dev`

#### Include Stylesora in Template
```html
<link href="{{ asset('assets/css/stylesora/stylesora.css') }}" rel="stylesheet">
```
<br>
<hr>

#### Library Commands
#### Compile and watch for Development
<br>

`yarn lib:watch`
#### Build for Production
<br>

`yarn lib:build`

<br>
<hr>

#### Documentation
#### Compile and watch Docs
<br>

`yarn docs:watch`
#### Build Docs
<br>

`yarn docs:build`

<br>
<hr>

#### Developing in other Environments
#### Run Symlink Command
<br>

`./link-stylesora.sh`


