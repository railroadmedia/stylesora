# Themes

Themes apply a set of color styles to an area. By default, Stylesora includes Musora's three main themes, Drumeo, Pianote, and Guitareo.

<br>

Themes are applied to frontend elements and components with the use of our Tailwind extended CSS Class names. 

#### Themes and Components
<br>
A good pattern for applying a theme to a component is with the use of the 'tw-currentColor' class name. You can add the theme class to the parent
element and have each child inherit those styles. 
<br>
<br>
<br>

<button class="tw-text-drumeo tw-btn-secondary">
    <i class="fa fa-play tw-pr-1" aria-hidden="true"></i>
    <span>Drumeo Button</span>
</button>
<button class="tw-text-pianote tw-btn-secondary">
    <i class="fa fa-play tw-pr-1" aria-hidden="true"></i>   
    <span>Pianote Button</span>
</button>
<button class="tw-text-guitareo tw-btn-secondary">
    <i class="fa fa-play tw-pr-1" aria-hidden="true"></i>
    <span>Guitareo Button</span>
</button>

```html
<!-- Setting button themes with a single class -->
<button class="tw-text-drumeo tw-btn-secondary">
    <i class="fa fa-play tw-pr-1" aria-hidden="true"></i>
    <span>Drumeo Button</span>
</button>
<button class="tw-text-pianote tw-btn-secondary">
    <i class="fa fa-play tw-pr-1" aria-hidden="true"></i>   
    <span>Pianote Button</span>
</button>
<button class="tw-text-guitareo tw-btn-secondary">
    <i class="fa fa-play tw-pr-1" aria-hidden="true"></i>
    <span>Guitareo Button</span>
</button>
```

#### Themes and SVG
<br>
While it does add markup to your html document, using inline or 'raw' SVG images have many benefits. For example, when using currentColor as a fill
value, your SVG can also inherit the color it's parent. This also creates an oportunity when working with Sprite Sheets or using an SVG component in
Vue.js. Here's a simple example of theming with SVG's. 
<br>
<br>

```html

```

#### Using Colors as Themes
<br>
You can use Tailwind's color classes the same way we would use Styelsora's theme classes. The currentColor setting will inherit the text color of it's
parent, here's an example. 
<br>
<br>

```html

```

#### Adding Themes
<br>

Tailwind makes adding colors very simple. In the ``tailwind.config`` file of Stylesora you can extend Tailwind's base color values by adding 
property names and values within the color object. Here's an example.

<br>

```js
//tailwind.config.js
module.exports = {
    theme: {
        extend: {
            colors: {
                drumeo: '#0B76DB',
                pianote: '#F61A30',
                guitareo: '#00C9AC',
                'guitar-quest': '#FFB500',
                'dark-blue': '#010611'
            }
        }
    }
}
```

<br>

::: tip
In order to use these new colors you will need to re-build your CSS with the ``docs:build`` command. Alternatively, if you'd like 
to 'watch' these files and have them compile automatically with ``docs:watch`` command. 
:::