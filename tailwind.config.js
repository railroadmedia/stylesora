module.exports = {
    prefix: 'tw-',
    important: true,
    purge: {
        enabled: false
    },
    theme: {
        fontFamily: {
            sans: ['"Open Sans"', 'sans-serif']
        },
        extend: {
            fontFamily: {
                'roboto-condensed': ['"Roboto Condensed"', 'Segoe UI', 'sans-serif'],
                'open-sans': ['"Open Sans"', 'Century Gothic', 'sans-serif'],
                'bison-bold': ['"Bison Bold"', 'Impact'],
                'permanent-marker': ['Permanent Marker', 'Brush Script MT', 'cursive']
            },
            colors: {
                //Brands
                drumeo: '#0B76DB',
                'drumeo-light': '#2092ff',
                pianote: '#F61A30',
                'pianote-light': '#ff5258',
                guitareo: '#00C9AC',
                'guitareo-light': '#00fcd8',
                'guitar-quest': '#FFB500',
                'guitar-quest-light': '#ffc433',  
                //Content              
                courses: '#07A0FF',
                shows: '#0BBE76',
                songs: '#F8004F',
                'play-alongs': '#FFB500',
                rudiments: '#FA6300',
                //Grays
                'warm-gray-100': '#EFF0F0',
                'warm-gray-200': '#E5E6E8',
                'warm-gray-300': '#CCD0D3',
                'warm-gray-500': '#9EA1A6',
                'warm-gray-700': '#4D5356',
                'warm-gray-900': '#191B1C',
                //Dark Mode
                'mild-blue': '#7E9AB1',
                'gray-blue': '#445F74',
                'royal-blue': '#002039',
                'dark-blue-1': '#081825',
                'dark-blue-2': '#00101D',
                'dark-blue-3': '#010611',
                //UI
                error: '#F71B26',
                success: '#00BC75',
                highlight: '#F3F9FF'
            },
            spacing: {
                md: '28rem',
                '14': '3.5rem',
                '44': '11rem',
                '68': '17rem',
                '72': '18rem',
                '80': '20rem',
                '92': '23rem'
            },
            inset: {
                '-full': '100%',
            },
            zIndex: {
                '75': 75,
                '100': 100,
                '150': 150,
                '200': 200,
                '250': 250,
            }
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active', 'visited'],
            textColor: ['visited', 'active'],
        }
    },
    plugins: [],
};

