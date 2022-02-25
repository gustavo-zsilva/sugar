import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    'body': {
        background: '$bg',
        backgroundImage: 'url(/bg.svg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        fontFamily: 'Poppins',
        color: '$black',
        height: '100vh',
        fontSize: '1.1rem',
    },
    'button': {
        border: 0,
        fontFamily: 'Poppins',
        cursor: 'pointer',
    }
})