const plugin = require('tailwindcss/plugin');

module.exports = () => {
    return plugin(function( { addUtilities } ) {
        
        const stylesoraUtils = {
            //Misc Utilities
            '.list-square': { listStyleType: 'square' },
            // Alpine JS - hide elements before js loads 
            '[x-cloak]': { display: 'none' },
            //Scrolling
            '.scrolling-touch': { '-webkit-overflow-scrolling': 'touch' },
            '.scrollbar-none': {
                '-ms-overflow-style': 'none',
                'scrollbar-width': 'none'
            },
            '.scrollbar-none::webkit-scrollbar': { display: 'none' },
            '.scrolling-smooth': { scrollBehavior: 'smooth' },
            '@media (prefers-reduced-motion)': {
                '.scrolling-smooth': { scrollBehavior: 'auto' },
            },
            //Content Container
            '.content-container': {
                display: 'block',
                margin: '0 auto',
                width: '100%',
                position: 'relative',

                '@media screen and (min-width: 40rem)': {
                    maxWidth: '100%'
                },
                '@media screen and (min-width: 64rem)': {
                    maxWidth: '64rem',
                    padding: '0 .9375rem'
                },
                '@media screen and (min-width: 72.5rem)': {
                    maxWidth: '72.5rem'
                },
                '@media screen and (min-width: 97.5rem)': {
                    maxWidth: '97.5rem'
                },
            },
        }

        addUtilities(stylesoraUtils);
    })
}