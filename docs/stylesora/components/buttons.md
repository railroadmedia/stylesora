# Buttons

These are the default buttons for all Musora brands. All primary and secondary buttons should use their corresponding primary brand colors. Tertiary
buttons are typically white (#FFFFFF) but in some cases can be grey (#8C9698) or black (#000000). The default height of each button is 50px but can be
adjusted depending on the scenario. The default length is dermined by the text and icons included within each button.
<br><br>
Buttons are used to initialize an action. Button labels should express the action that will occur when clicked. 
<br><br>

::: tip Usage
Stylesora includes helpful button 'patterns' that can be extended or updated with Tailwind classes. If a design calls for something completely new, you can build your own button using Tailwind. Additionally, if you find yourself repeating this pattern consider adding it to Stylesora!  
:::
#### Types
<br>
<hr>

#### Primary Buttons
<br>

Primary buttons are customized by adding background color classes prefixed with `tw-bg-`. You can use the brand themes which add a hover state for you, or use one of Tailwinds colors and define your own hover state color.  

##### Example 
<br>

<a href="#" class="tw-btn-primary tw-bg-drumeo">
    <span>Drumeo</span>
</a>
<a href="#" class="tw-btn-primary tw-bg-guitareo">
    <span>Guirateo</span>
</a>
<a href="#" class="tw-btn-primary tw-bg-pianote">
    <span>Pianote</span>
</a>
<a href="#" class="tw-btn-primary tw-bg-purple-500 hover:tw-bg-purple-400">
    <i class="fa fa-play tw-pr-1" aria-hidden="true"></i>
    <span>With Icon</span>
</a>
<a href="#" class="tw-btn-primary" disabled>
    <span>Disabled</span>
</a>

```html
<a href="#" class="tw-btn-primary tw-bg-drumeo">
    <span>Drumeo</span>
</a>
<a href="#" class="tw-btn-primary tw-bg-guitareo">
    <span>Guirateo</span>
</a>
<a href="#" class="tw-btn-primary tw-bg-pianote">
    <span>Pianote</span>
</a>
<a href="#" class="tw-btn-primary tw-bg-purple-500 hover:tw-bg-purple-400">
    <i class="fa fa-play tw-pr-1" aria-hidden="true"></i>
    <span>With Icon</span>
</a>
<a href="#" class="tw-btn-primary" disabled>
    <span>Disabled</span>
</a>
```
<hr>

#### Secondary Buttons
<br>

Secondary buttons are customized by adding text color classes prefixed with `tw-text-`. All secondary buttons add a subtle gray background on hover. Like primary buttons, you can further customize them with Tailwind's classes.  
##### Example 
<br>

<a href="#" class="tw-btn-secondary tw-text-drumeo">
    <span>Drumeo</span>
</a>
<a href="#" class="tw-btn-secondary tw-text-guitareo">
    <span>Guirateo</span>
</a>
<a href="#" class="tw-btn-secondary tw-text-pianote">
    <span>Pianote</span>
</a>
<a href="#" class="tw-btn-secondary tw-text-purple-500">
    <i class="fa fa-random tw-pr-1" aria-hidden="true"></i>
    <span>With Icon</span>
</a>
<a href="#" class="tw-btn-secondary" disabled>
    <span>Disabled</span>
</a>

```html
<a href="#" class="tw-btn-secondary tw-text-drumeo">
    <span>Drumeo</span>
</a>
<a href="#" class="tw-btn-secondary tw-text-guitareo">
    <span>Guirateo</span>
</a>
<a href="#" class="tw-btn-secondary tw-text-pianote">
    <span>Pianote</span>
</a>
<a href="#" class="tw-btn-secondary tw-text-purple-500">
    <i class="fa fa-random tw-pr-1" aria-hidden="true"></i>
    <span>With Icon</span>
</a>
<a href="#" class="tw-btn-secondary" disabled>
    <span>Disabled</span>
</a>
```
<hr>

#### Tertiary Buttons
<br>

Tertiary buttons are customized by adding text color classes prefixed with `hover:tw-text-`. Tertiary buttons all appear the same until you hover over them. 
##### Example 
<br>

<div class="tw-bg-gray-800 tw-p-3 tw-rounded-md">
    <a href="#" class="tw-btn-tertiary hover:tw-text-drumeo">
        <span>Drumeo</span>
    </a>
    <a href="#" class="tw-btn-tertiary hover:tw-text-guitareo">
        <span>Guirateo</span>
    </a>
    <a href="#" class="tw-btn-tertiary hover:tw-text-pianote">
        <span>Pianote</span>
    </a>
    <a href="#" class="tw-btn-tertiary hover:tw-text-purple-500">
        <i class="fa fa-check tw-pr-1" aria-hidden="true"></i>
        <span>With Icon</span>
    </a>
    <a href="#" class="tw-btn-tertiary" disabled>
        <span>Disabled</span>
    </a>
</div>

```html
<a href="#" class="tw-btn-tertiary hover:tw-text-drumeo">
    <span>Drumeo</span>
</a>
<a href="#" class="tw-btn-tertiary hover:tw-text-guitareo">
    <span>Guirateo</span>
</a>
<a href="#" class="tw-btn-tertiary hover:tw-text-pianote">
    <span>Pianote</span>
</a>
<a href="#" class="tw-btn-tertiary hover:tw-text-purple-500">
    <i class="fa fa-check tw-pr-1" aria-hidden="true"></i>
    <span>With Icon</span>
</a>
<a href="#" class="tw-btn-tertiary" disabled>
    <span>Disabled</span>
</a>
```
<hr>

#### Icon Buttons
<br>

Icon buttons are customized by adding text color classes prefixed with `tw-text-`. Unlike the previous buttons, icon buttons have a specific height and width to create a circle. These buttons have don't include padding, therefore they should not include text. If you need to add an icon and text to a button you can use the primary, secondary or tertiary button patterns shown above.
##### Example 
<br>

<a href="#" class="tw-btn-icon tw-text-drumeo">
    <i class="fa fa-play" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-icon tw-text-pianote">
    <i class="fa fa-pause" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-icon tw-text-success">
    <i class="fa fa-check" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-icon tw-text-purple-500">
    <i class="fa fa-random" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-icon" disabled>
    <i class="fa fa-times" aria-hidden="true"></i>
</a>

```html
<a href="#" class="tw-btn-icon tw-text-drumeo">
    <i class="fa fa-play" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-icon tw-text-pianote">
    <i class="fa fa-pause" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-icon tw-text-success">
    <i class="fa fa-check" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-icon tw-text-purple-500">
    <i class="fa fa-random" aria-hidden="true"></i>
</a>
<a href="#" class="tw-btn-icon" disabled>
    <i class="fa fa-times" aria-hidden="true"></i>
</a>
```