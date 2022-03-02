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
        fontSize: '1.125rem',
        color: '$black',
        height: '100vh',
    },
    'button': {
        border: 0,
        fontFamily: 'Poppins',
        cursor: 'pointer',
        fontSize: '1.125rem',

        '&:focus': {
            outline: '3px solid $black',
        },
    },
    'a': {
        textDecoration: 'none',

        '&:focus': {
            outline: '3px solid $black',
        }
    },
})