module.exports = (theme) => {
    //Forms
    return {
        //Inputs
        '.input-field': {
            marginBottom: theme('margin.4'),
            position: 'relative',
        
            '.label': {
                color: theme('textColor.black'),
                display: 'block',
                fontSize: theme('fontSize.sm'),
                fontWeight: 'bold',
                marginBottom: theme('margin.2')
            },

            '.input-wrapper': {
                position: 'relative',
            },

            'input[type=date], input[type=email], input[type=number], input[type=search], input[type=tel], input[type=password], input[type=text], select, textarea, button': {
                appearance: 'none',
                backgroundColor: theme('backgroundColor.white'),
                border: '1px solid',
                borderColor: theme('textColor.gray.300'),
                borderRadius: theme('borderRadius.full'),
                boxShadow: theme('boxShadow.sm'),
                color: theme('textColor.gray.700'),
                display: 'block',
                fontSize: theme('fontSize.base'),
                height: theme('height.12'),
                lineHeight: '1.5rem',
                marginBottom: theme('margin.1'),
                paddingTop: theme('padding.2'),
                paddingBottom: theme('padding.2'), 
                paddingLeft: theme('padding.4'),
                paddingRight: theme('padding.10'),
                width: '100%',

                '&:focus': {
                    outline: 'none', 
                },

                '& + .input-icon svg.invalid-icon, & + .input-icon svg.valid-icon': {
                    display: 'none'
                },
            },
            'input[type=search]': {
                paddingRight: theme('padding.4'),
            },

            'textarea': {
                borderRadius: theme('borderRadius.lg')
            },
            'button': {
                marginBottom: 0,
                textAlign: 'left',
            },

            'ul.dropdown': {
                backgroundColor:theme('backgroundColor.white'),
                boxShadow: theme('boxShadow.lg'),
                border: '1px solid',
                borderColor: theme('textColor.gray.300'),
                borderRadius: theme('borderRadius.md'),
                fontSize: theme('fontSize.base'),
                listStyle: 'none',
                marginTop: theme('margin.1'),
                maxHeight: theme('maxHeight.60'),
                overflowY: 'scroll',
                overflowX: 'hidden',
                paddingTop: theme('padding.1'),
                paddingBottom: theme('padding.1'),
                paddingLeft: 0,
                position: 'absolute',
                width: '100%',
                zIndex: theme('zIndex.10'),

                'li': {
                    color: theme('textColor.gray.900'),
                    cursor: 'default',
                    position: 'relative',
                    userSelect: 'none',
                    
                    'a, .option': {
                        cursor: 'pointer',
                        display: 'block',
                        overflow: 'hidden',
                        position: 'relative',
                        paddingTop: theme('padding.2'),
                        paddingBottom: theme('padding.2'),
                        paddingLeft: theme('padding.3'),
                        paddingRight: theme('padding.9'),
                        textOverflow: 'ellipsis',
                        transitionProperty: 'all',
                        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                        transitionDuration: '150ms',
                        whiteSpace: 'nowrap',

                        '&:hover, .option': {
                            backgroundColor: theme('backgroundColor.gray.200'),
                        }
                    },
                    'input[type="checkbox"], input[type="radio"]': {
                        appearance: 'none',
                        position: 'absolute'
                    },
                    'input[type="checkbox"] + .option .input-icon svg, input[type="radio"] + .option .input-icon svg': {
                        color: 'currentColor',
                        height: theme('height.4'),
                        opacity: 0,
                        width: theme('width.4'),
                    },
                    'input[type="checkbox"]:checked + .option .input-icon svg, input[type="radio"]:checked + .option .input-icon svg': {
                        opacity: 1,
                    },
                    'input[type="checkbox"]:checked + .option, input[type="radio"]:checked + .option': {
                        backgroundColor: theme('backgroundColor.drumeo.500'),
                        color: theme('textColor.white')
                    }
                },

                'li.with-dropdown:hover .dropdown': {
                    '@media(min-width: 768px)': {
                        display: 'block'
                    }
                }
            },

            '&[disabled]': {
                pointerEvents: 'none',

                'input[type=date], input[type=email], input[type=number], input[type=search], input[type=tel], input[type=password], input[type=text], select, textarea': {
                    backgroundColor: theme('backgroundColor.gray.100'),
                },

                'label': {
                    color: theme('textColor.gray.300')
                }
            },

            '.input-icon': {
                alignItems: 'center',
                bottom: 0,
                display: 'flex',
                height: theme('height.full'),
                paddingRight: theme('padding.3'),
                position: 'absolute',
                pointerEvents: 'none',
                right: 0,
                top: 1,

                'svg': {
                    color: theme('textColor.gray.500'),
                    height: theme('height.5'),
                    width: theme('width.5'),
                }
            },
            '.input-message': {
                display: 'none',
                fontSize: theme('fontSize.sm'),
                fontStyle: 'italic',
                paddingLeft: theme('padding.4'),
            },
            'input[type=date], input[type=email], input[type=number], input[type=search], input[type=tel], input[type=password], input[type=text], select, textarea': {
                '&[aria-required="true"]:not(:placeholder-shown):not(:focus)[aria-invalid="true"], &:required:not(:placeholder-shown):not(:focus):invalid': {
                    borderColor: theme('textColor.red.500'), 
                    backgroundColor: theme('backgroundColor.red.50'),

                    '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active': {
                        '-webkit-box-shadow': '0 0 0 30px '+ theme('backgroundColor.red.50') +' inset !important',
                    },

                    '& + .input-icon svg, & ~ .input-message': {
                        color: theme('textColor.red.500'),
                        display: 'block',
                    },

                    '& + .input-icon svg.invalid-icon': {
                        display: 'block'
                    },
                    '& + .input-icon svg.valid-icon': {
                        display: 'none'
                    },
                },
                '&[aria-required="true"]:not(:placeholder-shown):not(:focus)[aria-invalid="false"], &:required:not(:placeholder-shown):not(:focus):valid': {
                    borderColor: theme('textColor.green.500'), 
                    backgroundColor: theme('backgroundColor.green.50'),
                    
                    '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active': {
                        '-webkit-box-shadow': '0 0 0 30px '+ theme('backgroundColor.green.50') +' inset !important',
                    },

                    '& + .input-icon svg': {
                        color: theme('textColor.green.500'),
                        display: 'block',
                    },

                    '& + .input-icon svg.valid-icon': {
                        display: 'block'
                    },
                    '& + .input-icon svg.invalid-icon': {
                        display: 'none'
                    },
                }
            }
        },
        'input.toggle:focus + label' : {
            borderColor: 'currentColor !important'
        },
        '.toggle-field': {
            marginBottom: theme('margin.4'),
            position: 'relative',

            'input[type="checkbox"]': {
                appearance: 'none'
            },
            'input[type="checkbox"] + label': {
                border: '2px solid',
                borderRadius: theme('borderRadius.full'),
                borderColor: 'transparent',
                cursor: 'pointer',
                display: 'inline-flex',

                '.toggle-wrapper': {
                    border: '2px solid',
                    borderRadius: theme('borderRadius.full'),
                    borderColor: 'transparent',
                    display: 'inline-flex',
                    flexShrink: 0,
                    height: theme('height.6'),
                    margin: '0.125rem',
                    position: 'relative',
                    transitionProperty: 'background-color, border-color, color, fill, stroke',
                    transitionDuration: '200ms',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    width: theme('width.11'),
                },
                '.toggle-switch': {
                    backgroundColor: theme('backgroundColor.white'),
                    borderRadius: theme('borderRadius.full'),
                    display: 'inline-block',
                    height: theme('height.5'),
                    pointerEvents: 'none',
                    position: 'relative',
                    transitionDuration: '200ms',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
                    width: theme('width.5'),

                    '.toggle-off, .toggle-on': {
                        alignItems: 'center',
                        bottom: '0',
                        display: 'flex',
                        height: theme('height.full'),
                        justifyContent: 'center',
                        left: '0',
                        position: 'absolute',
                        right: '0',
                        top: '0',
                        transitionProperty: 'opacity',
                        width: theme('width.full'),

                        'svg': {
                            height: theme('height.3'),
                            width: theme('width.3')
                        }
                    },
                    '.toggle-off': {
                        transitionDuration: '200ms',
                        transitionTimingFunction: 'cubic-bezier(0.4, 0, 1, 1)',

                        'svg': {
                            color:theme('textColor.gray.400')
                        }
                    },
                    '.toggle-on': {
                        opacity: 0,
                        transitionDuration: '100ms',
                        transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1) ',

                        'svg': {
                            color: 'currentColor',
                        }
                    }
                }
            }
        }
    }
}