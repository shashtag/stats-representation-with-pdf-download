import { useState } from "react";
import Nav from "./Nav";
import Stats from "./StatsRep";
import Header from "./Header";
import useFormatData from "../Hooks/useFormatData";

export default function Hero() {
  const [page, setPage] = useState("Performance");
  var { webPages, performances, accessibility, bestPractices, pwa, seo } =
    useFormatData();

  return (
    <div className='min-h-full'>
      <Nav page={page} setPage={setPage} />
      <Header />
      <main className='bg-gray-200 mx-auto max-w-7xl p-8'>
        <div className='bg-white shadow rounded-md p-8'>
          <Stats
            max={100}
            webPages={webPages}
            barValues={
              page === "Performance"
                ? performances
                : page === "Accessibility"
                ? accessibility
                : page === "SEO"
                ? seo
                : page === "PWA"
                ? pwa
                : bestPractices
            }
          />
        </div>
      </main>
    </div>
  );
}
