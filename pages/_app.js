import Layout from "../components/LayOut";
// import NavBar from "../components/NavBar";
import "../styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
      <Component {...pageProps} />
      </Layout>

    </>
  );
}
