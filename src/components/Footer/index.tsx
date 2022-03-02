import { FiGithub, FiLinkedin } from 'react-icons/fi'

import { SocialButton } from "@components/SocialButton";
import { Container } from "./styles";

export function Footer() {
    return (
        <Container>
            <SocialButton
                as="a"
                href="https://github.com/gustavo-zsilva/sugar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
            >
                <FiGithub size={28} />
            </SocialButton>
            <SocialButton
                as="a"
                href="https://www.linkedin.com/in/gustavo-silva-47b3a21b1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
            >
                <FiLinkedin size={28} />
            </SocialButton>
        </Container>
    )
}