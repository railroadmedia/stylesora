module.exports = (theme) => {
    //Forms
    return {
        //Inputs
        '.input-field': {
            position: 'relative',
            marginBottom: theme('margin.4'),

            '.label': {
                paddingLeft: theme('padding.4'),
                display: 'block',
                fontSize: theme('fontSize.sm'),
                color: theme('textColor.gray.700'),
                marginBottom: theme('margin.1')
            },

            '.input-wrapper': {
                position: 'relative',
            },

            'input[type=date], input[type=email], input[type=number], input[type=search], input[type=tel], input[type=password], input[type=text], select, textarea, button': {
                appearance: 'none',
                backgroundColor: theme('backgroundColor.white'),
                boxShadow: theme('boxShadow.sm'),
                display: 'block',
                width: '100%',
                fontSize: theme('fontSize.base'),
                lineHeight: '1.5rem',
                border: '1px solid',
                borderColor: theme('textColor.gray.300'),
                marginBottom: theme('margin.1'),
                paddingTop: theme('padding.2'),
                paddingBottom: theme('padding.2'), 
                paddingLeft: theme('padding.4'),
                paddingRight: theme('padding.10'),
                borderRadius: theme('borderRadius.full'),
                color: theme('textColor.gray.700'),

                '&:focus': {
                    outline: 'none', 
                },
            },
            'input[type=search]': {
                paddingRight: theme('padding.4'),
            },

            'textarea': {
                borderRadius: theme('borderRadius.lg')
            },
            'button': {
                textAlign: 'left',
                marginBottom: 0
            },

            'ul.dropdown': {
                position: 'absolute',
                zIndex: theme('zIndex.10'),
                marginTop: theme('margin.1'),
                width: '100%',
                backgroundColor:theme('backgroundColor.white'),
                boxShadow: theme('boxShadow.lg'),
                border: '1px solid',
                borderColor: theme('textColor.gray.300'),
                maxHeight: theme('maxHeight.60'),
                borderRadius: theme('borderRadius.md'),
                overflow: 'auto',
                paddingTop: theme('padding.1'),
                paddingBottom: theme('padding.1'),
                paddingLeft: 0,
                fontSize: theme('fontSize.base'),

                'li': {
                    color: theme('textColor.gray.900'),
                    cursor: 'default',
                    position: 'relative',
                    userSelect: 'none',

                    'a, label.option': {
                        display: 'block',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        position: 'relative',
                        paddingTop: theme('padding.2'),
                        paddingBottom: theme('padding.2'),
                        paddingLeft: theme('padding.3'),
                        paddingRight: theme('padding.9'),
                        transitionProperty: 'all',
                        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                        transitionDuration: '150ms',

                        '&:hover, label.option': {
                            backgroundColor: theme('backgroundColor.gray.200'),
                        }
                    },
                    'input[type="checkbox"], input[type="radio"]': {
                        appearance: 'none',
                        position: 'absolute'
                    },
                    'input[type="checkbox"] + label.option .input-icon svg, input[type="radio"] + label.option .input-icon svg': {
                        height: theme('height.4'),
                        width: theme('width.4'),
                        color: 'currentColor',
                        opacity: 0,
                    },
                    'input[type="checkbox"]:checked + label.option .input-icon svg, input[type="radio"]:checked + label.option .input-icon svg': {
                        opacity: 1,
                    },
                    'input[type="checkbox"]:checked + label.option, input[type="radio"]:checked + label.option': {
                        backgroundColor: theme('backgroundColor.drumeo.500'),
                        color: theme('textColor.white')
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
                position: 'absolute',
                right: 0,
                top: 1,
                bottom: 0,
                height: theme('height.10'),
                paddingRight: theme('padding.3'),
                display: 'flex',
                alignItems: 'center',
                pointerEvents: 'none',

                'svg': {
                    height: theme('height.5'),
                    width: theme('width.5'),
                    color: theme('textColor.gray.500')
                }
            },
            '.input-message': {
                fontSize: theme('fontSize.sm'),
                paddingLeft: theme('padding.4'),
                fontStyle: 'italic',
            },
            'input[type=date], input[type=email], input[type=number], input[type=search], input[type=tel], input[type=password], input[type=text], select, textarea': {
                '&[aria-invalid="true"]': {
                    borderColor: theme('textColor.red.500'), 
                    backgroundColor: theme('backgroundColor.red.50'),

                    '& + .input-icon svg, & ~ .input-message': {
                        color: theme('textColor.red.500')
                    }
                },
                '&[aria-invalid="false"]': {
                    borderColor: theme('textColor.green.500'), 
                    backgroundColor: theme('backgroundColor.green.50'),
                
                    '& + .input-icon svg, & ~ .input-message': {
                        color: theme('textColor.green.500')
                    }
                }
            }
        },
        'input.toggle:focus + label' : {
            borderColor: 'currentColor !important'
        },
        '.toggle-field': {
            position: 'relative',
            marginBottom: theme('margin.4'),

            'input[type="checkbox"]': {
                appearance: 'none'
            },
            'input[type="checkbox"] + label': {
                cursor: 'pointer',
                display: 'inline-flex',
                border: '2px solid',
                borderRadius: theme('borderRadius.full'),
                borderColor: 'transparent',

                '.toggle-wrapper': {
                    position: 'relative',
                    display: 'inline-flex',
                    flexShrink: 0,
                    height: theme('height.6'),
                    width: theme('width.11'),
                    margin: '0.125rem',
                    border: '2px solid',
                    borderRadius: theme('borderRadius.full'),
                    borderColor: 'transparent',
                    transitionProperty: 'background-color, border-color, color, fill, stroke',
                    transitionDuration: '200ms',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                },
                '.toggle-switch': {
                    borderRadius: theme('borderRadius.full'),
                    pointerEvents: 'none',
                    position: 'relative',
                    display: 'inline-block',
                    height: theme('height.5'),
                    width: theme('width.5'),
                    backgroundColor: theme('backgroundColor.white'),
                    transitionDuration: '200ms',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',

                    '.toggle-off, .toggle-on': {
                        height: theme('height.full'),
                        width: theme('width.full'),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transitionProperty: 'opacity',
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        bottom: '0',
                        left: '0',

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