import { styled } from '@styles/stitches.config'

export const Container = styled('header', {
    gridArea: 'Header',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0',

    'strong': {
        color: '$lightBlack',
    },

    'button': {
        background: '$lightBlack',
        padding: '.6rem 1.2rem',
        borderRadius: '999px',
        border: 0,

        'span': {
            color: '$white',
            fontWeight: '$semiBold',
        }
    },

    '@sm': {
        margin: '0 1rem',
    }
})