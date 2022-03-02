import { styled } from '@styles/stitches.config'

export const Hero = styled('div', {
    gridArea: 'Hero',
    display: 'none',

    '@desktop': {
        display: 'flex',
    }
})