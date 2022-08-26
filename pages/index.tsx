import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../stories/Button/Button";
import logo_vercel from "../public/img/powered-by-vercel.svg";

const Home: NextPage = () => {
  return (
    <div style={{ height: "200vh" }} className="bg-gray-500 rounded p-10">
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
    </div>
  );
};

export default Home;
