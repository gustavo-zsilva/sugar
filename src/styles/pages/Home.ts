import { styled } from "../stitches.config";

export const Container = styled('div', {
    maxWidth: '80rem',
    margin: 'auto',

    'div': {
        display: 'grid',
        gridTemplateAreas: `
            'Header Header'
            'Main Hero'
            'Footer Footer'
        `,
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr auto 1fr',
    }
})