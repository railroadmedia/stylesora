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
            }
        }

        addUtilities(stylesoraUtils);
    })
}