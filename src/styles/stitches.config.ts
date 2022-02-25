import { createStitches } from "@stitches/react";

export const {
    globalCss,
    styled,
} = createStitches({
    theme: {
        colors: {
            black: '#171717',
            lightBlack: '#303633',
            white: '#EEF5DB',
            primary: '#8468F5',
            secondary: '#AB0067',
            bg: '#FDCFF3',
        },
        fontWeights: {
            regular: '400',
            semiBold: '600',
            bold: '700',
        }
    },
    media: {
        sm: '(min-width: 0px)',
    }
})