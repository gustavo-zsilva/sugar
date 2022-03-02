import { FiGithub, FiLinkedin } from 'react-icons/fi'

import { SocialButton } from "@components/SocialButton";
import { Container } from "./styles";

export function Footer() {
    return (
        <Container>
            <SocialButton>
                <FiGithub size={28} />
            </SocialButton>
            <SocialButton>
                <FiLinkedin size={28} />
            </SocialButton>
        </Container>
    )
}