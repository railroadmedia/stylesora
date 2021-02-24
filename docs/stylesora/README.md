# Introduction

Stylesora is frontend pattern library created to help you build Musora's websites and web applications with ease.
Stylesora is built on [tailwind.css](https://tailwindcss.com/docs) for styling and [alpine.js](https://github.com/alpinejs/alpine/) for simple DOM manipulation.  

#### Extending Tailwind
<br>

Stylesora extends the Tailwind library with [functions and directives](https://tailwindcss.com/docs/functions-and-directives) and the `tailwind.config` file. 
<br><br>

The `@apply` directive allow us to add tailwind styles to a new class or component. In addition we can add use the `@layer` directive to define where you want your class to be sorted. Here's an example of adding the `tw-btn-primary` class. 
<br><br>

```scss
@layer components {
    /* Primary Button*/
    .tw-btn-primary {
        @apply tw-inline-block tw-whitespace-nowrap tw-select-none tw-py-2 tw-px-4 tw-rounded-full tw-border-2 tw-border-transparent tw-font-roboto-condensed tw-font-bold tw-uppercase tw-cursor-pointer tw-transition tw-text-white hover:tw-bg-gray-100 active:tw-bg-current active:tw-text-white visited:tw-text-white hover:tw-no-underline;
    }
}
```

#### In The Wild
<br>

Musora sites use css from many different sources. To avoid overriding any other class declarations, we add the `tw` prefix to all of stylesora's tailwind classes in the `tailwind.config`. Here's a simple example below.
<br><br>

<p class="tw-text-red-500 tw-bg-blue-100 tw-p-2">This is an example paragraph with red text and a blue background</p>

```html
<!-- Tailwind base class names (this will not work) -->
<p class="text-red-500 bg-blue-100 p-2">This is an example paragraph with red text and a blue background</p>
<!-- Stylesora prefixed class names (this works!) -->
<p class="tw-text-red-500 tw-bg-blue-100 tw-p-2">This is an example paragraph with red text and a blue background</p>
```
#### Contributing
<br>

If you find yourself repeating the same tailwind class patterns in your html, you might want to consider adding to the 
Stylesora pattern library. The CSS directory structure uses the [SMACCS](http://smacss.com/) naming convention, so you can easily add your new
styles in the correct place.
<br><br>

::: tip
When adding new classes, remember to prefix them with `tw-`, use `@apply` to add you tailwind styles, and specify the `@layer` where
you want your class to live.
:::