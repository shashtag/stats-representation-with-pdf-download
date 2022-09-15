import { useEffect, useRef, useState } from "react";
import apiData from "../Data/apiData";

const useFormatData = () => {
  const firstMount = useRef(true);

  const [performances, setPerformances] = useState<BarValueType[]>([]);
  const [accessibility, setAccessibility] = useState<BarValueType[]>([]);
  const [seo, setSeo] = useState<BarValueType[]>([]);
  const [pwa, setPwa] = useState<BarValueType[]>([]);
  const [bestPractices, setBestPractices] = useState<BarValueType[]>([]);
  const [webPages, setWebPages] = useState<WebPageType[]>([]);

  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      for (let x of apiData) {
        setWebPages((prev) => [
          ...prev,
          { id: x.page, portfolioName: x.portfolioName, pageName: x.pageName },
        ]);
        setPerformances((prev) => [
          ...prev,
          { id: x.page, value: x.performance, display: x.performance },
        ]);
        setAccessibility((prev) => [
          ...prev,
          { id: x.page, value: x.accessibility, display: x.accessibility },
        ]);
        setPwa((prev) => [
          ...prev,
          { id: x.page, value: x.pwa, display: x.pwa },
        ]);
        setSeo((prev) => [
          ...prev,
          { id: x.page, value: x.seo, display: x.seo },
        ]);
        setBestPractices((prev) => [
          ...prev,
          { id: x.page, value: x.bestPractices, display: x.bestPractices },
        ]);
      }
    }

    return () => {};
  }, []);

  return { webPages, performances, accessibility, seo, pwa, bestPractices };
};

export default useFormatData;
