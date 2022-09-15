import React from "react";
import { Disclosure } from "@headlessui/react";

import navigation from "../Data/navigation";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

const Nav = ({ page, setPage }: Props) => {
  return (
    <Disclosure as='nav' className='bg-gray-500'>
      <div className='mx-auto max-w-7xl px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <img
                className='h-8 w-24'
                src='https://auditzy-prod.s3.ap-south-1.amazonaws.com/auditzy+black+logo.png'
                alt='Your Company'
              />
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                {navigation.map((item) => (
                  <div
                    onClick={() => setPage(item.name)}
                    key={item.name}
                    className={classNames(
                      page === item.name
                        ? "bg-gray-900 text-white cursor-pointer"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "px-3 py-2 rounded-md text-sm font-medium cursor-pointer",
                    )}>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Nav;
