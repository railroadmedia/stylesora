module.exports = (theme) => {
    //Buttons
    return {
        '.btn-primary, .btn-secondary': {
            alignItems: 'center',
            borderStyle: 'solid',
            borderRadius: theme('borderRadius.full'),
            borderWidth: theme('borderWidth.2'),
            color: 'white',
            cursor: 'pointer',
            display: 'inline-flex',
            fontFamily: '"Roboto Condensed", Segoe UI, sans-serif',
            fontSize: '1rem',
            fontWeight: '700',
            lineHeight: '1',
            minHeight: '50px',
            padding: '8px 70px',
            position: 'relative',
            textDecoration: 'none',
            textTransform: 'uppercase',
            transitionDuration: '150ms',
            transitionProperty: 'background-color, color, fill, stroke, opacity, box-shadow, transform',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            userSelect: 'none',
            whiteSpace: 'nowrap',
            '& *': {
                margin: '0 auto',
            }
        },
        //Primary
        '.btn-primary': {
            borderColor: 'transparent',
            '&:visited': {
                backgroundColor: 'currentColor',
                color: 'white'
            },
            '&:hover' : { textDecoration: 'none' },
            '&[disabled]': {
                backgroundColor: theme('backgroundColor.gray.200'),
                color: theme('textColor.gray.400') + '!important',
                pointerEvents:'none',
            },
            //Brand Specific
            //hover
            '&.bg-drumeo:hover, &.bg-drumeo:focus-visible': {
                backgroundColor: theme('backgroundColor.drumeo.400') + '!important',
            },
            '&.bg-pianote:hover, &.bg-pianote:focus-visible': {
                backgroundColor: theme('backgroundColor.pianote.400') + '!important',
            },
            '&.bg-guitareo:hover, &.bg-guitareo:focus-visible': {
                backgroundColor: theme('backgroundColor.guitareo.400') + '!important',
            },
            '&.bg-singeo:hover, &.bg-singeo:focus-visible': {
                backgroundColor: theme('backgroundColor.singeo.400') + '!important',
            },
            '&.bg-recordeo:hover, &.bg-recordeo:focus-visible': {
                backgroundColor: theme('backgroundColor.recordeo.400') + '!important',
            },
            //active
            '&.bg-drumeo:hover': {
                backgroundColor: theme('backgroundColor.drumeo.600') + '!important',
            },
            '&.bg-pianote:hover': {
                backgroundColor: theme('backgroundColor.pianote.600') + '!important',
            },
            '&.bg-guitareo:hover': {
                backgroundColor: theme('backgroundColor.guitareo.600') + '!important',
            },
            '&.bg-singeo:hover': {
                backgroundColor: theme('backgroundColor.singeo.600') + '!important',
            },
            '&.bg-recordeo:hover': {
                backgroundColor: theme('backgroundColor.recordeo.600') + '!important',
            }
        },
    
        //Secondary
        '.btn-secondary': {
            borderColor: 'currentColor',
            '&:hover': {
                textDecoration: 'none',
            },
            '&[disabled]': {
                pointerEvents:'none',
                color: theme('textColor.gray.400') + '!important',
            },
            //Brand Colors
            '&.text-drumeo:hover, &.text-drumeo:focus-visible': {
                color: theme('color.drumeo.400') + '!important',
            },
            '&.text-pianote:hover, &.text-pianote:focus-visible': {
                color: theme('color.pianote.400') + '!important',
            },
            '&.text-guitareo:hover, &.text-guitareo:focus-visible': {
                color: theme('color.guitareo.400') + '!important',
            },
            '&.text-singeo:hover, &.text-singeo:focus-visible': {
                color: theme('color.singeo.400') + '!important',
            },
            '&.text-recordeo:hover, &.text-recordeo:focus-visible': {
                color: theme('color.recordeo.400') + '!important',
            },
            //Active Colors
            '&.text-drumeo:active': {
                color: theme('color.drumeo.600') + '!important',
            },
            '&.text-pianote:active': {
                color: theme('color.pianote.600') + '!important',
            },
            '&.text-guitareo:active': {
                color: theme('color.guitareo.600') + '!important',
            },
            '&.text-singeo:active': {
                color: theme('color.singeo.600') + '!important',
            },
            '&.text-recordeo:active': {
                color: theme('color.recordeo.600') + '!important',
            }
        },
        
        //Button Variants,
        '.btn-circle': {
            padding: '0 !important',
            height: '50px !important',
            width: '50px !important'
        },
        //Sizes
        '.btn-small': {
            fontSize: '14px',
            height: '34px !important',
            minHeight: 'auto',
            padding: '8px 48px',
        },
        '.btn-medium': {
            fontSize: '1rem',
            height: 'auto',
            minHeight: '50px'
        },
        //Sizes + Circles
        '.btn-small.btn-circle': {
            height: '34px !important',
            width: '34px !important'
        },
        '.btn-medium.btn-circle': {
            height: '50px !important',
            width: '50px !important'
        }
    }
}