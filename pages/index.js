import Head from "next/head";
import Footer from "@components/Footer";
import AboutMe from "@components/AboutMe";
import Repos from "@components/Repos";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lukács Áron</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen justify-between">
        <main className="flex flex-row flex-grow justify-between gap-5">
          <AboutMe />
          <Repos />
        </main>

        <Footer />
      </div>
    </div>
  );
}
