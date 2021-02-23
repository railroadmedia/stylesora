# Logos

Musora's brand and product logos are clear, impactful and recognizable. All logos have their own primary color while sharing secondary colors. Each
logo features a customized spin on Myriad Pro, with an alteration to the last letter of each word. All logos have been addded to the asset panel. 

<br/>
<div x-data="{ selected: 'option-1' }">
    <div class="tw-hidden sm:tw-block tw-sticky tw-bg-white" style="top: 58px;">
        <div class="tw-border-b tw-border-gray-200">
            <nav class="tw--mb-px tw-flex tw-pace-x-8" aria-label="Tabs">
                <a  href="#option-1" 
                    class="tw-uppercase tw-font-roboto-condensed tw-border-transparent tw-text-gray-400 hover:tw-no-underline tw-whitespace-nowrap tw-py-4 tw-px-1 tw-text-sm tw-font-bold hover:tw-text-drumeo tw-mr-2"
                    x-on:click.prevent="selected = 'option-1'"
                    x-bind:class="{ 'tw-text-drumeo tw-border-drumeo': selected === 'option-1' }"
                    aria-current="page">
                Drumeo
                </a>
                <a  href="#option-2" 
                    class="tw-uppercase tw-font-roboto-condensed tw-border-transparent tw-text-gray-400 hover:tw-no-underline tw-whitespace-nowrap tw-py-4 tw-px-1 tw-text-sm tw-font-bold hover:tw-text-pianote tw-mr-2" 
                    x-on:click.prevent="selected = 'option-2'"
                    x-bind:class="{ 'tw-text-pianote tw-border-pianote': selected === 'option-2' }">
                Pianote
                </a>
                <a  href="#option-3" 
                    class="tw-uppercase tw-font-roboto-condensed tw-border-transparent tw-text-gray-400 hover:tw-no-underline tw-whitespace-nowrap tw-py-4 tw-px-1 tw-text-sm tw-font-bold hover:tw-text-guitareo tw-mr-2"
                    x-on:click.prevent="selected = 'option-3'"
                    x-bind:class="{ 'tw-text-guitareo tw-border-guitareo': selected === 'option-3' }">
                Guitareo
                </a>
            </nav>
        </div>
    </div>
    <!-- Drumeo -->
    <div x-show="selected === 'option-1'" class="tw-py-8">
        <h4>Brand Signature</h4>
        <br/>
        <p>Featuring a customized spin on Myriad Pro with a small drum icon inside the "O", our wordmark is unique and recognize at a quick glance.</p>
        <!-- Logo -->
        <div class="tw-bg-drumeo tw-p-20 tw-m-12">
            <div class="tw-text-white tw-w-52 tw-mx-auto">
                <img src="https://musora-ui.s3.amazonaws.com/logos/drumeo-white.svg" title="Drumeo Logo">
            </div>
        </div>
        <!-- Variants -->
        <h4>Logo on Color</h4>
        <br>
        <p>Drumeo Blue, White, and Black are acceptable colors for the Drumeo logo. Drumeo Blue should be used whenever possible wheter in the
        background or as the logo color. In certain situations the Drumeo logo can also be used on a different colored background or over a photo. 
        </p>
        <br/><br/>
        <!-- Color -->
        <div class="tw-flex tw-mb-8 tw-w-full">
            <div class="tw-bg-black tw-p-12 tw-w-1/2">
                <img class="tw-w-52 tw-mx-auto" src="https://musora-ui.s3.amazonaws.com/logos/drumeo.svg" title="Drumeo Logo">
            </div>
            <div class="tw-bg-blue-50 tw-py-8 tw-px-12 tw-w-1/2">
                <h4>Drumeo Blue</h4>
                <p>
                    RGB: 11, 118, 219<br>
                    HEX: #0B76DB<br>
                    CSS: tw-text-drumeo
                </p>
            </div>
        </div>
        <!-- White -->
        <div class="tw-flex tw-mb-8">
            <div class="tw-bg-drumeo tw-p-12 tw-w-1/2">
                <img class="tw-w-52 tw-mx-auto" src="https://musora-ui.s3.amazonaws.com/logos/drumeo-white.svg" title="Drumeo Logo">
            </div>
            <div class="tw-bg-blue-50 tw-py-8 tw-px-12 tw-w-1/2">
                <h4>White</h4>
                <p>
                    RGB: 255, 255, 255<br>
                    HEX: #FFFFFF<br>
                    CSS: tw-text-white
                </p>
            </div>
        </div>
        <!-- Black -->
        <div class="tw-flex">
            <div class="tw-bg-gray-200 tw-p-12 tw-w-1/2">
                <img class="tw-w-52 tw-mx-auto" src="https://musora-ui.s3.amazonaws.com/logos/drumeo-black.svg" title="Drumeo Logo">
            </div>
            <div class="tw-bg-blue-50 tw-py-8 tw-px-12 tw-w-1/2">
                <h4>Black</h4>
                <p>
                    RGB: 0, 0, 0<br>
                    HEX: #000000<br>
                    CSS: tw-text-black
                </p>
            </div>
        </div>
    </div>
    <!-- Pianote -->
    <div x-show="selected === 'option-2'" class="tw-py-8">
        <h4>Brand Signature</h4>
        <br/>
        <p>Featuring a customized spin on Myriad Pro with a small drum icon inside the "O", our wordmark is unique and recognize at a quick glance.</p>
        <!-- Logo -->
        <div class="tw-bg-pianote tw-p-20 tw-m-12">
            <div class="tw-text-white tw-w-52 tw-mx-auto">
                <img src="https://musora-ui.s3.amazonaws.com/logos/pianote-white.svg" title="Pianote Logo">
            </div>
        </div>
        <!-- Variants -->
        <h4>Logo on Color</h4>
        <br>
        <p>Drumeo Blue, White, and Black are acceptable colors for the Drumeo logo. Drumeo Blue should be used whenever possible wheter in the
        background or as the logo color. In certain situations the Drumeo logo can also be used on a different colored background or over a photo. 
        </p>
        <br/>
        <!-- Color -->
        <div class="tw-flex tw-mb-8 tw-w-full">
            <div class="tw-bg-black tw-p-12 tw-w-1/2">
                <img class="tw-w-52 tw-mx-auto" src="https://musora-ui.s3.amazonaws.com/logos/pianote.svg" title="pianote Logo">
            </div>
            <div class="tw-bg-blue-50 tw-py-8 tw-px-12 tw-w-1/2">
                <h4>Pianote Red</h4>
                <p>
                    RGB: 11, 118, 219<br>
                    HEX: #F61A30<br>
                    CSS: tw-text-pianote
                </p>
            </div>
        </div>
        <!-- White -->
        <div class="tw-flex tw-mb-8">
            <div class="tw-bg-pianote tw-p-12 tw-w-1/2">
                <img class="tw-w-52 tw-mx-auto" src="https://musora-ui.s3.amazonaws.com/logos/pianote-white.svg" title="pianote Logo">
            </div>
            <div class="tw-bg-blue-50 tw-py-8 tw-px-12 tw-w-1/2">
                <h4>White</h4>
                <p>
                    RGB: 255, 255, 255<br>
                    HEX: #FFFFFF<br>
                    CSS: tw-text-white
                </p>
            </div>
        </div>
        <!-- Black -->
        <div class="tw-flex">
            <div class="tw-bg-gray-200 tw-p-12 tw-w-1/2">
                <img class="tw-w-52 tw-mx-auto" src="https://musora-ui.s3.amazonaws.com/logos/pianote-black.svg" title="pianote Logo">
            </div>
            <div class="tw-bg-blue-50 tw-py-8 tw-px-12 tw-w-1/2">
                <h4>Black</h4>
                <p>
                    RGB: 0, 0, 0<br>
                    HEX: #000000<br>
                    CSS: tw-text-black
                </p>
            </div>
        </div>
    </div>
    <!-- Guitareo -->
    <div x-show="selected === 'option-3'" class="tw-py-8">
        <h4>Brand Signature</h4>
        <br/>
        <p>Featuring a customized spin on Myriad Pro with a small drum icon inside the "O", our wordmark is unique and recognize at a quick glance.</p>
        <!-- Logo -->
        <div class="tw-bg-guitareo tw-p-20 tw-m-12">
            <div class="tw-text-white tw-w-52 tw-mx-auto">
                <img src="https://musora-ui.s3.amazonaws.com/logos/guitareo-white.svg" title="Guitareo Logo">
            </div>
        </div>
        <!-- Variants -->
        <h4>Logo on Color</h4>
        <br>
        <p>Drumeo Blue, White, and Black are acceptable colors for the Drumeo logo. Drumeo Blue should be used whenever possible wheter in the
        background or as the logo color. In certain situations the Drumeo logo can also be used on a different colored background or over a photo. 
        </p>
        <br/>
        <!-- Color -->
        <div class="tw-flex tw-mb-8 tw-w-full">
            <div class="tw-bg-black tw-p-12 tw-w-1/2">
                <img class="tw-w-52 tw-mx-auto" src="https://musora-ui.s3.amazonaws.com/logos/guitareo.svg" title="guitareo Logo">
            </div>
            <div class="tw-bg-blue-50 tw-py-8 tw-px-12 tw-w-1/2">
                <h4>Guitareo Green</h4>
                <p>
                    RGB: 0, 201, 172<br>
                    HEX: #00C9AC<br>
                    CSS: tw-text-guitareo
                </p>
            </div>
        </div>
        <!-- White -->
        <div class="tw-flex tw-mb-8">
            <div class="tw-bg-guitareo tw-p-12 tw-w-1/2">
                <img class="tw-w-52 tw-mx-auto" src="https://musora-ui.s3.amazonaws.com/logos/guitareo-white.svg" title="guitareo Logo">
            </div>
            <div class="tw-bg-blue-50 tw-py-8 tw-px-12 tw-w-1/2">
                <h4>White</h4>
                <p>
                    RGB: 255, 255, 255<br>
                    HEX: #FFFFFF<br>
                    CSS: tw-text-white
                </p>
            </div>
        </div>
        <!-- Black -->
        <div class="tw-flex">
            <div class="tw-bg-gray-200 tw-p-12 tw-w-1/2">
                <img class="tw-w-52 tw-mx-auto" src="https://musora-ui.s3.amazonaws.com/logos/guitareo-black.svg" title="guitareo Logo">
            </div>
            <div class="tw-bg-blue-50 tw-py-8 tw-px-12 tw-w-1/2">
                <h4>Black</h4>
                <p>
                    RGB: 0, 0, 0<br>
                    HEX: #000000<br>
                    CSS: tw-text-black
                </p>
            </div>
        </div>
    </div>
</div>

<br><br>

::: tip Usage
Logos are available in SVG format in our 'musora-ui/logos' S3 Bucket. Each logo is available in its primary color, black and white. 
However, If you decide to use the 'raw' SVG element, the fill value can be changed to any other color. All SVG's have been minified 
to ensure the smallest possible file size. 
:::

#### Code Examples:

```html
<!-- Drumeo Logo in Primary Color / Black Background -->
<div class="tw-bg-black tw-p-12">
    <img class="tw-w-52 tw-mx-auto" src="https://musora-ui.s3.amazonaws.com/logos/drumeo.svg" title="Drumeo Logo">
</div>
<!-- Pianote Logo in White / Pianote Primary Background -->
<div class="tw-bg-pianote tw-p-12">
    <img class="tw-w-52 tw-mx-auto" src="https://musora-ui.s3.amazonaws.com/logos/pianote-white.svg" title="Pianote Logo">
</div>
<!-- Guitareo Logo in Black / Gray Background -->
<div class="tw-bg-gray-200 tw-p-12 tw-w-1/2">
    <img class="tw-w-52 tw-mx-auto" src="https://musora-ui.s3.amazonaws.com/logos/guitareo-black.svg" title="Guitareo Logo">
</div>
```
<br>

::: warning
When importing new logos, each logo should be in the SVG format. Whether you are including the 'raw' SVG or referencing it in an image tag,
SVG's can offer bandwidth savings, higher image quality, and a simplified workflow. 
:::
