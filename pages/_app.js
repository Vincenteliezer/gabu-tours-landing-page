import '../styles/globals.css'
import dynamic from "next/dynamic";

const {} = dynamic(import("tw-elements"), { ssr: false });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
