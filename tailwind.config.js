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
                'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
                'open-sans': ['"Open Sans"', 'sans-serif']
            },
            colors: {
                drumeo: '#0B76DB',
                pianote: '#F61A30',
                guitareo: '#00C9AC',
                'guitar-quest': '#FFB500',
                'dark-blue': '#010611',
                courses: '#07A0FF',
                shows: '#0BBE76',
                songs: '#F8004F',
                'play-alongs': '#FFB500',
                rudiments: '#FA6300',
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
        },
        zIndex: {
            '0': 0,
            '10': 10,
            '20': 20,
            '30': 30,
            '40': 40,
            '50': 50,
            '75': 75,
            '100': 100,
            '150': 150,
            '200': 200,
            '250': 250,
            'auto': 'auto'
        },
        inset: {
            '0': 0,
            '1': '1rem',
            '2': '2rem',
            '3': '3rem',
            '4': '4rem',
            '5': '5rem',
            auto: 'auto'
        }
    },
    variants: {
        extend: {
            backgroundColor: ['active', 'visited'],
            textColor: ['visited', 'active'],
        }
    },
    plugins: [],
};

