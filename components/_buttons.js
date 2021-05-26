module.exports = (theme) => {
    //Buttons
    return {
        '.btn-primary, .btn-secondary, .btn-tertiary, .btn-icon': {
            borderStyle: 'solid',
            borderRadius: theme('borderRadius.full'),
            borderWidth: theme('borderWidth.2'),
            lineHeight: '1',
            position: 'relative',
            transitionDuration: '150ms',
            transitionProperty: 'background-color, color, fill, stroke, opacity, box-shadow, transform',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            userSelect: 'none',
            whiteSpace: 'no-wrap',
        },
        '.btn-primary, .btn-secondary, .btn-tertiary': {
            color: 'white',
            cursor: 'pointer',
            display: 'inline-block',
            fontFamily: '"Roboto Condensed", Segoe UI, sans-serif',
            fontSize: '1rem',
            fontWeight: '700',
            padding: '0.75rem 1rem',
            textDecoration: 'none',
            textTransform: 'uppercase',
        },
        //Primary
        '.btn-primary': {
            borderColor: 'transparent',
            '&:active, &:visited': {
                backgroundColor: 'currentColor',
                color: 'white'
            },
            '&:hover' : { textDecoration: 'none' },
            '&[disabled]': {
                pointerEvents:'none',
                backgroundColor: theme('backgroundColor.gray.200'),
                color: theme('textColor.gray.400'),
            }
        },
    
        //Secondary
        '.btn-secondary': {
            borderColor: 'currentColor',
            '&:hover': {
                textDecoration: 'none',
                backgroundColor: '',
            },
            '&:active': { backgroundColor: 'currentColor' },
            '&[disabled]': {
                pointerEvents:'none',
                color: theme('textColor.gray.400'),
            }
        },
    
        //Tertiary
        '.btn-tertiary': {
            borderColor: 'white',
            '&:hover': {
                backgroundColor: 'white',
                color: 'black',
                textDecoration: 'none',
            },
            '&:hover i, &:hover span': {
                color: 'currentColor'
            },
            '&:active span, &:active i, &:visited span, &:visited i': { color: 'currentColor' },
            '&[disabled]': {
                borderColor: theme('borderColor.gray.400'),
                color: theme('textColor.gray.400'),
                pointerEvents:'none',
            }
        },
    
        //Icon
        '.btn-icon': {  
            alignItems: 'center',
            borderColor: 'currentColor',
            display: 'inline-flex',
            justifyContent: 'center',
            width: theme('width.10'),
            height: theme('width.10'),
            '&:hover': {
                background: 'currentColor',
                borderColor: 'currentColor'
            },
            '&:hover i': { color: 'white' },
            '&:active span, tw-btn-icon:active i, &:visited span, &:visited i': {color: 'currentColor' },
            '&[disabled]': {
                pointerEvents:'none',
                borderColor: theme('borderColor.gray.400'),
                color: theme('textColor.gray.400'),
            }
        },        
    }
}