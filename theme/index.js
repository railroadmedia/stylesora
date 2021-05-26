/*
    This file exports the theme settings you will 
    be able to 'extend' in you tailwind.config.js
*/

module.exports = {
    //FONTS
    fontFamily: {
        'roboto-condensed': ['"Roboto Condensed"', 'Segoe UI', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'Century Gothic', 'sans-serif'],
        'bison-bold': ['"Bison Bold"', 'Impact'],
        'permanent-marker': ['Permanent Marker', 'Brush Script MT', 'cursive']
    },
    //COLORS
    colors: {
        //Brands Colors
        drumeo: {
            gray: '#F3F4F5',
            lightest: '#EAF5FF',
            light: '#B2D4F4',
            hover: '#258FF4',
            DEFAULT: '#0B76DB',
            dark: '#112E4A',
            black: '#13171B'
        },
        pianote: {
            gray: '#F6F5F5',
            lightest: '#FEF2F2',
            light: '#FCB8BF',
            hover: '#F73346',
            DEFAULT: '#F61A30',
            dark: '#55171D',
            black: '#201617'
        },
        guitareo: {
            gray: '#F2F4F3',
            lightest: '#E3F8F5',
            light: '#A8EDE3',
            hover: '#00E3C2',
            DEFAULT: '#00C9AC',
            dark: '#0C443C',
            black: '#101817'
        },
        singeo: {
            gray: '#F4F3F5',
            lightest: '#F2DBFF',
            light: '#DAB3F8',
            hover: '#A100FF',
            DEFAULT: '#8300E9',
            dark: '#320E4F',
            black: '#18131C'
        },
        recordeo: {
            gray: '#F6F5F4',
            light: '#FFE3A7',
            DEFAULT: '#FFAE00',
            dark: '#563F0F',
            black: '#1E1B14'
        },
        //Content Types
        content: {
            courses: '#07A0FF',
            shows: '#0BBE76',
            songs: '#F8004F',
            'play-alongs': '#FFB500',
            rudiments: '#FA6300'
        },
        //Gray Variations
        'ui-gray': {
            '100': '#FAFAFB',
            '200': '#F2F3F5',
            '300': '#DAE3EB',
            '400': '#B1BDC8',
            '500': '#879097',
            '600': '#404951',
            '700': '#111C26'
        },
        //Dark Mode
        
        //UI Colors
        ui: {
            error: '#F71B26',
            highlight: '#F3F9FF',
            success: '#00BC75'
        }
    },
    //SPACING
    spacing: {
        md: '28rem',
        '14': '3.5rem',
        '44': '11rem',
        '68': '17rem',
        '72': '18rem',
        '80': '20rem',
        '92': '23rem'
    },
    //Z-INDEX
    zIndex: {
        '75': 75,
        '100': 100,
        '150': 150,
        '200': 200,
        '250': 250,
    },
    //INSETS
    inset: {
        '-full': '100%',
    },
}