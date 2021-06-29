module.exports = (theme) => {
    //Tooltips
    return {
        '.with-tooltip': {
            alignItems: 'center',
            display: 'inline-flex',
            justifyContent: 'center',
            overflow: 'visible',
            position: 'relative',

            '&:hover .tooltip': {
                display: 'block'
            },
        },
        '.tooltip': {
            backgroundColor: theme('backgroundColor.white'),
            borderRadius: theme('borderRadius.md'),
            boxShadow: theme('boxShadow.md'),
            color: theme('textColor.black'),
            display: 'none',
            fontFamily: theme('fontFamily.primary'),
            fontSize: theme('fontSize.xs'),
            fontWeight: 400,
            lineHeight: '15px',
            maxWidth: '186px',
            padding: '5px',
            position: 'absolute',
            textTransform: 'initial',
            top: 'calc(100% + 10px)',
            whiteSpace: 'nowrap',
            zIndex: '100',
            
            '&::after': {
                backgroundColor: 'inherit',
                content: '"" !important',
                height: '7px',
                position: 'absolute',
                right: 'calc(50% - 3.5px)',
                top: '-3px',
                transform: 'rotate(45deg)',
                width: '7px',  
            },
        },
        '.tooltip-center': {
            justifyContent: 'center !important',

            '& > .tooltip::after': {
                right: 'calc(50% - 3.5px) !important'
            }
        },
        '.tooltip-left': {
            justifyContent: 'flex-start !important',

            '& > .tooltip::after': {
                left: '14px !important'
            }
        },
        '.tooltip-right': {
            justifyContent: 'flex-end !important',

            '& > .tooltip::after': {
                right: '14px !important'
            }
        },
        '.tooltip-top': {
            '& .tooltip': {
                bottom: 'calc(100% + 10px) !important',
                top: 'initial'
            },
            '& .tooltip:after': {
                bottom: '-3px !important',
                top: 'initial'
            }
        },
        '.tooltip-top.tooltip-center': {
            '& .tooltip:after': {
                bottom: '-3px !important',
                top: 'initial'
            }
        },
        '.tooltip-top.tooltip-right': {
            '& .tooltip:after': {
                bottom: '-3px !important',
                top: 'initial'
            }
        },
        '.tooltip-top.tooltip-left': {
            '& .tooltip:after': {
                bottom: '-3px !important',
                top: 'initial'
            }
        },
        //Dark Default
        '.tooltip-dark': {
            backgroundColor: theme('backgroundColor.true-gray.500'),
            color: theme('textColor.white')
        },
    }
}