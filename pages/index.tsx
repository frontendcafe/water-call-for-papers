import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../stories/Button/Button";
import logo_vercel from "../public/img/powered-by-vercel.svg";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      Hola
      <Button onClick={() => null}>Click</Button>
      <div className="inline-flex bg-slate-700">
        <div className="m-2 mb-1">
          <Link href="https://vercel.com/?utm_source=hifrontendcafe&utm_campaign=oss">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src={logo_vercel}
                alt="Powered by Vercel"
                placeholder="blur"
                blurDataURL={logo_vercel}
              />
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
