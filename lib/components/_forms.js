module.exports = (theme) => {
    //Forms
    return {
        //Inputs
        '.input-wrapper': {
            position: 'relative',

            'input[type=date], input[type=email], input[type=number], input[type=password], input[type=text], select, textarea': {
                height: '50px',
                borderRadius: '25px',
                background: '#fff',
                color: '#000',
                boxShadow: 'none',
                border: '1px solid #d1d1d1',
                outline: 'none',
                width: '100%',
                paddingTop: '12px',
                font: '400 16px/1.5em "Open Sans", sans-serif',
                paddingLeft: '25px',
                paddingRight: '25px',

                '&:focus': {
                    boxShadow: '0 0 2px rgb(0 0 0 / 50%)',
                },

                '&:focus ~ label': {
                    transform: 'scale(.7) translateY(-8px) translateX(15px)!important',
                }
           },
           '& label': {
                position: 'absolute',
                left: '.625rem',
                top: '0',
                height: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                willChange: 'transform,color',
                transition: 'transform .2s ease-in-out,color .1s ease-in-out',
                transformOrigin: '0 0',
                color: '#8c9698',
                pointerEvents: 'none',
                font: '400 16px/1.5em Open Sans,sans-serif',
                transform: 'scale(1) translateY(0) translateX(15px)',
           }
        },

    }
}