import { useState } from "react";
import Nav from "./Nav";
import Stats from "./StatsRep";
import Header from "./Header";
import formatData from "../UtilFunctions/formatData";

export default function Hero() {
  const [page, setPage] = useState("Performance");
  var { webPages } = formatData();

  return (
    <div className='min-h-full'>
      <Nav page={page} setPage={setPage} />
      <Header />
      <main className='bg-gray-200 mx-auto max-w-7xl p-8'>
        <div className='bg-white shadow rounded-md p-8'>
          <Stats max={100} webPages={webPages} />
        </div>
      </main>
    </div>
  );
}
