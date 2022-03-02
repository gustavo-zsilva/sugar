import { createStitches } from "@stitches/react";
import type * as Stitches from '@stitches/react';

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
            primaryDark: '#6B56C9',
            secondary: '#AB0067',
            green: '#B0FF92',
            bg: '#FDCFF3',
        },
        fontWeights: {
            regular: '400',
            semiBold: '600',
            bold: '700',
        },
        space: {
            1: '1rem',
            2: '2rem',
        },
        radii: {
            'full': '999px',
            'round': '50%',
        }
    },
    media: {
        mobile: '(min-width: 0px)',
        tablet: '(min-width: 750px)',
        desktop: '(min-width: 1300px)',
    },
    utils: {
        mx: (value: Stitches.ScaleValue<'space'>) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value: Stitches.ScaleValue<'space'>) => ({
            marginTop: value,
            marginBottom: value,
        }),
        px: (value: Stitches.ScaleValue<'space'>) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value: Stitches.ScaleValue<'space'>) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
    }
})