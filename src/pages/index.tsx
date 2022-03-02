import Head from "next/head"
import Image from "next/image"

import { FiArrowRight, FiLogIn } from 'react-icons/fi'

import { Header } from "@components/Header"
import { Button } from "@components/Button"
import { Footer } from "@components/Footer"
import { Hero } from "@components/Hero"
import { Container, ButtonGroup } from "../styles/pages/Home"

export default function Home() {
  return (
    <Container>
        <Head>
            <title>Sugar!</title>
        </Head>
        
        <div>
            <Header />
            <main>
                <div>
                    <h1>Sweets for <span>all</span> tastes.</h1>
                    <span>choose, click and enjoy.</span>
                </div>
                <ButtonGroup>
                    <Button aria-label="Browse Sweets" type="primary">
                        <span>Browse Sweets</span>
                        <FiArrowRight size={32} />
                    </Button>
                    <span>or</span>
                    <Button aria-label="Create an account" type="ghost">
                        <span>Create an account</span>
                        <FiLogIn size={32} />
                    </Button>
                </ButtonGroup>
            </main>
            <Hero>
                <Image
                    src="/hero.svg"
                    width={650}
                    height={650}
                    alt="Hero"
                    objectFit="contain"
                />
            </Hero>
            <Footer />
        </div>
    </Container>
  )
}
