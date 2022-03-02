import Head from "next/head"
import { Header } from "@components/Header"

import { Button } from "@components/Button"
import { Footer } from "@components/Footer"
import { Container } from "../styles/pages/Home"

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
                    <h1>Sweets for all tastes.</h1>
                    <span>choose, click and enjoy.</span>
                </div>
                <div>
                    <Button type="purple">
                        <span>Browse Sweets</span>
                    </Button>
                    <span>or</span>
                    <Button type="ghost">
                        <span>Create an account</span>
                    </Button>
                </div>
            </main>
            <Footer />
        </div>
    </Container>
  )
}
