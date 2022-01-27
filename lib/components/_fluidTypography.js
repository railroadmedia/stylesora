module.exports = (theme) => {
    //Scaler
    const scaler = "1vw";
    /*
        Fluid Type
        fontSize: `clamp( minFontSize, scaler, maxFontSize )`
    */
    return {
        '.fluid-text-5xl-xs': {
            fontSize: `clamp( ${theme('fontSize.xs')}, ${scaler}, ${theme('fontSize.5xl')} )`
        },
        '.fluid-text-3xl-2xl': {
            fontSize: `clamp( ${theme('fontSize.2xl')}, ${scaler}, ${theme('fontSize.3xl')} )`
        },
        '.fluid-text-2xl-base': {
            fontSize: `clamp( ${theme('fontSize.base')}, 2w, ${theme('fontSize.2xl')} )`
        },
        '.fluid-text-base-xs': {
            fontSize: `clamp( ${theme('fontSize.xs')}, ${scaler}, ${theme('fontSize.base')} )`
        },
        '.fluid-text-sm-xs': {
            fontSize: `clamp( ${theme('fontSize.xs')}, ${scaler}, ${theme('fontSize.sm')} )`
        }
    }
}