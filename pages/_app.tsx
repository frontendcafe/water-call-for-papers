import "react-datepicker/dist/react-datepicker.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <Layout isHomePage={pathname === "/"}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
