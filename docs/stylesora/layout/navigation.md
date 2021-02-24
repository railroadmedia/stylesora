# Navigation <Badge text="Requires JS" type="error"/>

Navigation is possibly the most important aspect of any page layout. Musora's pages in particular share three common navigation patterns. These navigation patterns have been added to Stylesora in order to utilize Tailwind.css as well as our custom tailwind classes and components. Navigations
also require small bit of Javascript for responsive state management. Because Alpine.js is included with Stylesora, you'll only need a minimal amount of template markup to add responsive functionality to your navigation.  
#### Sales Global Navigation
<br>

The Sales navigation spans the full width of the page and includes a hamburger menu on all breakpoints. Because the sales navigation is for users who are not logged in, it does not link to any memebers are content. Instead it includes large call-to-action buttons on the right. 
<br><br>

#### Examples
<br>

<div class="tw-border tw-border-gray-100 tw-relative tw-h-48 tw-overflow-y-auto tw-overflow-x-hidden">
    <!-- Guitar Quest Sales Nav -->
    <nav x-data="{ sidebarOpen: false }" class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-max-w-screen tw-bg-black tw-min-h-12 tw-flex items-center tw-pl-4 tw-py-1">
        <img src="https://musora-ui.s3.amazonaws.com/logos/guitareo-white.svg" class="tw-w-24 tw-mr-auto">
        <div class="tw-inline-flex tw-items-center">
            <a href="/" class="tw-btn-tertiary hover:tw-text-black tw-px-6 tw-mr-2">Login</a>
            <a href="/" class="tw-btn-tertiary hover:tw-text-black tw-px-6 tw-mr-2">Shop</a>
            <a href="/" class="tw-btn-tertiary hover:tw-text-black tw-px-6 tw-mr-2">
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
            </a>
        </div>
        <div class="tw-inline-flex tw-items-center ">
            <button type="button" class="tw-px-4 tw-py-2" x-on:click.prevent="sidebarOpen = !sidebarOpen" >
                <i class="fa fa-bars tw-text-white tw-text-lg" aria-hidden="true"></i>
            </button>
        </div>
        <!-- Aside -->
        <aside x-bind:class="{ 'tw-right-0' : sidebarOpen === true, 'tw--right-60': sidebarOpen === false }" class="tw-bg-white tw-text-gray-700 tw-absolute tw-top-full tw-shadow-xl tw-border-l tw-border-gray-100 tw-w-60">
            <ul class="tw-p-0">
                <li class="tw-border-gray-200"><a href="/" class="tw-block tw-text-current tw-px-4 tw-py-2 tw-border-b"><i class="fa fa-sign-in tw-text-guitareo tw-pr-2" aria-hidden="true"></i>Member Login</a></li>
                <li class="tw-border-gray-200"><a href="/" class="tw-block tw-text-current tw-px-4 tw-py-2 tw-border-b"><i class="fa fa-phone tw-text-guitareo tw-pr-2" aria-hidden="true"></i>Contact</a></li>
                <li class="tw-border-gray-200"><a href="/" class="tw-block tw-text-current tw-px-4 tw-py-2 tw-border-b"><i class="fa fa-home tw-text-guitareo tw-pr-2" aria-hidden="true"></i>Home</a></li>
                <li class="tw-border-gray-200"><a href="/" class="tw-block tw-text-current tw-px-4 tw-py-2 tw-border-b"><i class="fa fa-graduation-cap tw-text-guitareo tw-pr-2" aria-hidden="true"></i>Membership</a></li>
                <li class="tw-border-gray-200">
                    <a href="/" class="tw-block tw-text-current tw-px-4 tw-py-2 tw-border-b">
                    <i class="fa fa-tag tw-pr-2 tw-text-guitareo" aria-hidden="true"></i>Shop</a>
                    <ul>
                        <li><a href="/" class="tw-text-current">All Deals</a></li>
                        <li><a href="/" class="tw-text-current">500 Songs</a></li>
                        <li><a href="/" class="tw-text-current">Acoustic Guitar Made Easy</a></li>
                        <li><a href="/" class="tw-text-current">Guitar Technique Made Easy</a></li>
                        <li><a href="/" class="tw-text-current">Guitar System</a></li>
                    </ul>
                </li>
                <li class="tw-border-gray-200">
                    <a href="/" class="tw-block tw-text-current tw-px-4 tw-py-2 tw-border-b">
                        <i class="fa fa-play-circle tw-text-guitareo tw-pr-2" aria-hidden="true"></i>Free Resources
                    </a>
                    <ul>
                        <li><a href="/" class="tw-text-current">Guitareo Blog</a></li>
                        <li><a href="/" class="tw-text-current">2 Simple Guitar Tricks</a></li>
                        <li><a href="/" class="tw-text-current"></a>Beginner Guitar Starter Kit</li>
                        <li><a href="/" class="tw-text-current">Acoustic Guitar Jump-Start</a></li>
                        <li><a href="/" class="tw-text-current">The Guitarist's Toolbox</a></li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li><a href="/" class="tw-text-current">YouTube</a></li>
                <li><a href="/" class="tw-text-current">Facebook</a></li>
                <li><a href="/" class="tw-text-current">Instagram</a></li>
            </ul>
        </aside>
    </nav>
</div>

#### Members Global Navigation
<br>

The Members global navigation includes links that are specific to authenticated users. By default, all links are visible on wide screens and collapse to a sidebar menu layout at smaller breakpoints. It also features an expandable search bar that spans the full width of the navbar.
<br><br>

#### Examples
<br>

#### Members Sub Navigation
<br>

The Members sub navigation features course specific links.
<br><br>

#### Examples
<br>