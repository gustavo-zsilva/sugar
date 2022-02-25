import Head from "next/head"
import { Header } from "@components/Header"

import { Container } from "../styles/pages/Home"

export default function Home() {
  return (
    <Container>
        <Head>
            <title>Sugar!</title>
        </Head>
        
        <div>
            <Header />
        </div>
    </Container>
  )
}
