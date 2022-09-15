import apiData from "../Data/apiData";

const useFormatData = () => {
  const performance = [];
  const webPages: WebPageType[] = [];

  for (let x of apiData) {
    webPages.push({ portfolioName: x.portfolioName, pageName: x.pageName });
  }

  return { webPages };
};

export default useFormatData;
