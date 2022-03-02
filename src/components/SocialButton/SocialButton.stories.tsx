import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { SocialButton } from ".";

const Stories = {
    title: 'SocialButton',
    component: SocialButton,
}

export default Stories

export const Default = () => <SocialButton />

export const Github = () => <SocialButton>
        <FiGithub size={28} />
    </SocialButton>

export const Linkedin = () => <SocialButton>
        <FiLinkedin size={28} />
    </SocialButton>