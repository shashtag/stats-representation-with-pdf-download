import { useState } from "react";
import Nav from "./Nav";
import Stats from "./StatsRep";
import Header from "./Header";
import useFormatData from "../Hooks/useFormatData";
import performanceMetricsTitles from "../Data/performanceMetricsTitles";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function Hero() {
  const [page, setPage] = useState("Performance");
  const [performanceTitle, setPerformanceTitle] = useState(
    "Time to Interactive",
  );
  var {
    webPages,
    performances,
    accessibility,
    bestPractices,
    pwa,
    seo,
    auditDetails,
    fcp,
    tti,
    lcp,
    si,
    cls,
    tbt,
    maxfcp,
    maxtti,
    maxlcp,
    maxsi,
    maxcls,
    maxtbt,
  } = useFormatData();

  return (
    <div className='min-h-full hidden lg:block'>
      <Nav page={page} setPage={setPage} />
      <Header page={page} />
      <main className='bg-gray-200 mx-auto max-w-7xl p-8 '>
        <div className='bg-white shadow rounded-md p-8'>
          <Stats
            //normalize max by mul *1000
            max={100000}
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
            auditDetails={auditDetails}
          />
        </div>
        {page === "Performance" ? (
          <>
            <div className=' shadow rounded-md p-8 py-4 mt-8 mb-2 bg-gray-500'>
              <div className='hidden md:block'>
                <div className=' flex space-x-4 overflow-x-scroll'>
                  {performanceMetricsTitles.map((item) => (
                    <div
                      onClick={() => setPerformanceTitle(item)}
                      key={item}
                      className={classNames(
                        performanceTitle === item
                          ? "bg-gray-900 text-white cursor-pointer whitespace-nowrap"
                          : "text-gray-100 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium cursor-pointer whitespace-nowrap",
                      )}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='bg-white shadow rounded-md p-8'>
              <Stats
                rev={true}
                max={
                  performanceTitle === "Time to Interactive"
                    ? maxtti
                    : performanceTitle === "Speed Index"
                    ? maxsi
                    : performanceTitle === "First Contentful Paint"
                    ? maxfcp
                    : performanceTitle === "Largest Contentful Paint"
                    ? maxlcp
                    : performanceTitle === "Cumulative Layout Shift"
                    ? maxcls
                    : maxtbt
                }
                webPages={webPages}
                barValues={
                  performanceTitle === "Time to Interactive"
                    ? tti
                    : performanceTitle === "Speed Index"
                    ? si
                    : performanceTitle === "First Contentful Paint"
                    ? fcp
                    : performanceTitle === "Largest Contentful Paint"
                    ? lcp
                    : performanceTitle === "Cumulative Layout Shift"
                    ? cls
                    : tbt
                }
                auditDetails={auditDetails}
              />
            </div>
          </>
        ) : null}
      </main>
    </div>
  );
}
