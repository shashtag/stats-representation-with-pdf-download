import logo from "../Assets/logo.png";
import DocStats from "./DocStats";
import Footer from "./Footer";
import useFormatData from "../Hooks/useFormatData";
import { LegacyRef } from "react";

// import AboutPoint from "./AboutPoint";
// import features from "../Assets/features.png";
type Props = { eRef: React.MutableRefObject<HTMLDivElement | null> };

const Document = ({ eRef }: Props) => {
  var {
    webPages,
    performances,
    accessibility,
    bestPractices,
    pwa,
    seo,
    auditDetails,
  } = useFormatData();
  return (
    <div ref={eRef}>
      <div className='flex w-full px-8 py-6 justify-between align-middle'>
        <div className='flex-shrink-0'>
          <a href='/'>
            <img className='h-16 w-48' src={logo} alt='Auditzy logo' />
          </a>
        </div>
        <div className='text-3xl font-bold my-auto h-max'>Auditzy Insights</div>
      </div>
      <div className='flex'>
        <div className='flex-1 h-[5px] bg-[#1D893E]'></div>
        <div className='flex-1 h-[5px] bg-[#F1B44C]'></div>
        <div className='flex-1 h-[5px] bg-[#EB201F]'></div>
      </div>

      <div className='bg-white mx-auto w-[100vw] p-8 max-w-[2480px]'>
        <h2 className='text-3xl font-extrabold text-[#6E83EA] mb-4'>
          Multiple Comparision Analysis
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae
          eligendi ullam? Ipsam fugiat doloremque impedit rem eveniet facilis
          iste, aperiam minus unde ratione aut cumque, ipsa porro animi
          molestiae tenetur molestias nulla distinctio soluta dignissimos ullam
          maxime sunt in? Laborum eos exercitationem a necessitatibus veniam,
          maiores aliquid veritatis commodi hic dolore quo, pariatur expedita
          magni quidem, quod reprehenderit optio ea sequi nam amet iusto ipsum
          rerum velit aperiam.
        </p>

        <DocStats
          max={100}
          webPages={webPages}
          barValues={performances}
          auditDetails={auditDetails}
          title={"Performance"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa
          odit laborum, rerum magnam libero eligendi ipsum non deleniti
          necessitatibus neque qui labore voluptate architecto id provident,
          iste sed totam. Ex reprehenderit expedita tenetur ea, tempora, esse
          dignissimos quis neque quam dolorum quos deserunt, voluptatum quo
          delectus in. Dolorum, doloribus minima ex reprehenderit, consequatur
          voluptatibus explicabo recusandae distinctio quam labore.
        </DocStats>
        <DocStats
          max={100}
          webPages={webPages}
          barValues={accessibility}
          auditDetails={auditDetails}
          title={"Accessibility"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa
          odit laborum, rerum magnam libero eligendi ipsum non deleniti
          necessitatibus neque qui labore voluptate architecto id provident,
          iste sed totam. Ex reprehenderit expedita tenetur ea, tempora, esse
          dignissimos quis neque quam dolorum quos deserunt, voluptatum quo
          delectus in. Dolorum, doloribus minima ex reprehenderit, consequatur
          voluptatibus explicabo recusandae distinctio quam labore.
        </DocStats>
        <DocStats
          max={100}
          webPages={webPages}
          barValues={bestPractices}
          auditDetails={auditDetails}
          title={"Best Practices"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa
          odit laborum, rerum magnam libero eligendi ipsum non deleniti
          necessitatibus neque qui labore voluptate architecto id provident,
          iste sed totam. Ex reprehenderit expedita tenetur ea, tempora, esse
          dignissimos quis neque quam dolorum quos deserunt, voluptatum quo
          delectus in. Dolorum, doloribus minima ex reprehenderit, consequatur
          voluptatibus explicabo recusandae distinctio quam labore.
        </DocStats>
        <DocStats
          max={100}
          webPages={webPages}
          barValues={seo}
          auditDetails={auditDetails}
          title={"SEO"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa
          odit laborum, rerum magnam libero eligendi ipsum non deleniti
          necessitatibus neque qui labore voluptate architecto id provident,
          iste sed totam. Ex reprehenderit expedita tenetur ea, tempora, esse
          dignissimos quis neque quam dolorum quos deserunt, voluptatum quo
          delectus in. Dolorum, doloribus minima ex reprehenderit, consequatur
          voluptatibus explicabo recusandae distinctio quam labore.
        </DocStats>
        <DocStats
          max={100}
          webPages={webPages}
          barValues={pwa}
          auditDetails={auditDetails}
          title={"PWA"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa
          odit laborum, rerum magnam libero eligendi ipsum non deleniti
          necessitatibus neque qui labore voluptate architecto id provident,
          iste sed totam. Ex reprehenderit expedita tenetur ea, tempora, esse
          dignissimos quis neque quam dolorum quos deserunt, voluptatum quo
          delectus in. Dolorum, doloribus minima ex reprehenderit, consequatur
          voluptatibus explicabo recusandae distinctio quam labore.
        </DocStats>
        {/* <h2 className='text-3xl font-extrabold text-[#6E83EA] mb-4 mt-20'>
            About Auditzy
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quasi corporis commodi veniam dolor culpa, aspernatur facere nihil
            fuga, enim non rerum. Mollitia voluptatem quos atque? Minus vel
            laboriosam voluptatibus!
          </p>
          <AboutPoint color='#EB201F'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            fuga, inventore, quod perferendis deleniti eveniet vero cumque vel
            suscipit voluptatem dignissimos voluptates voluptatum eius. Magni
            voluptate accusantium repellendus amet aut.
          </AboutPoint>
          <AboutPoint color='#F1B44C'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            fuga, inventore, quod perferendis deleniti eveniet vero cumque vel
            suscipit voluptatem dignissimos voluptates voluptatum eius. Magni
            voluptate accusantium repellendus amet aut.
          </AboutPoint>
          <AboutPoint color='#1D893E'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            fuga, inventore, quod perferendis deleniti eveniet vero cumque vel
            suscipit voluptatem dignissimos voluptates voluptatum eius. Magni
            voluptate accusantium repellendus amet aut.
          </AboutPoint>
          <h2 className='text-3xl font-extrabold text-[#6E83EA] mb-4 mt-20'>
            Features
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quasi corporis commodi veniam dolor culpa, aspernatur facere nihil
            fuga, enim non rerum. Mollitia voluptatem quos atque? Minus vel
            laboriosam voluptatibus!
          </p>
          <div>
            <img src={features} alt='features' className='w-full mt-8' />
          </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Document;
