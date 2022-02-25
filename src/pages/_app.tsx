import { globalStyles } from "../styles/global"

function App({ Component, pageProps }) {
    globalStyles()
    return <Component {...pageProps} />
}

export default App
