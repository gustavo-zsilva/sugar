import { styled } from "@styles/stitches.config";

export const SocialButton = styled('a', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '50px',
    height: '50px',

    background: '$primary',
    color: '$white',

    padding: '.2rem',
    borderRadius: '50%',
    
    cursor: 'pointer',
    transition: '.2s',
    '&:hover': {
        background: '$primaryDark',
    }
})