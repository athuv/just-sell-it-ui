import Link from 'next/link';
import React from 'react';

function Quicklinks() {
  return (
    <section className="w-full">
      <div className="px-40">
        <div className="mt-4 w-full bg-primaryBg p-4 shadow-md">
          <h1 className="font-bold">Quick Links</h1>
          <div className="flex gap-2">
            <div className="flex items-stretch justify-stretch gap-2 overflow-x-scroll py-4 md:overflow-x-visible ">
              <div className="bg-secondaryBg p-2 shadow-md">
                <h1 className="text-sm font-bold">
                  123,111 Ads in Electronics
                </h1>
                <div className="text-sm text-quaternary">
                  <Link className="mr-1 flex" href="/">
                    <span className="after:content-['|']">
                      Mobile Phones&nbsp;
                    </span>
                  </Link>
                  <Link className="mr-1 after:content-['|']" href="/">
                    Cameras & Camcoders&nbsp;
                  </Link>
                  <Link className="mr-1 after:content-['|']" href="/">
                    TVs&nbsp;
                  </Link>
                  <Link className="mr-1 after:content-['|']" href="/">
                    Air Conditions & Electrical Fitings&nbsp;
                  </Link>
                </div>
              </div>
              <div className="bg-secondaryBg p-2 shadow-md">
                <h1 className="text-sm font-bold">78, 054 Ads in Property</h1>
                <div className="text-sm text-quaternary">
                  <Link className="mr-1" href="/">
                    <span className="after:content-['|']">Land&nbsp;</span>
                  </Link>
                  <Link className="mr-1 after:content-['|']" href="/">
                    House for Sale&nbsp;
                  </Link>
                  <Link className="mr-1 after:content-['|']" href="/">
                    House Rentals&nbsp;
                  </Link>
                  <Link className="mr-1 after:content-['|']" href="/">
                    Apartment for Sale&nbsp;
                  </Link>
                </div>
              </div>
              <div className="bg-secondaryBg p-2 shadow-md">
                <h1 className="text-sm font-bold">9, 051 Ads in Jobs</h1>
                <div className="text-sm text-quaternary">
                  <Link className="mr-1" href="/">
                    <span className="after:content-['|']">
                      Data Entry Operator&nbsp;
                    </span>
                  </Link>
                  <Link className="mr-1 after:content-['|']" href="/">
                    Driver&nbsp;
                  </Link>
                  <Link className="mr-1 after:content-['|']" href="/">
                    Packing Officer&nbsp;
                  </Link>
                  <Link className="mr-1 after:content-['|']" href="/">
                    Clerk&nbsp;
                  </Link>
                  <Link className="mr-1 after:content-['|']" href="/">
                    Sales Executive&nbsp;
                  </Link>
                </div>
              </div>
              <div className="bg-secondaryBg p-2 shadow-md">
                <h1 className="text-sm font-bold">63, 275 Ads in Vechiles</h1>
                <div className="text-sm text-quaternary">
                  <Link className="mr-1" href="/">
                    <span className="after:content-['|']">Cars&nbsp;</span>
                  </Link>
                  <Link className="mr-1 after:content-['|']" href="/">
                    Motorbikes&nbsp;
                  </Link>
                  <Link className="mr-1 after:content-['|']" href="/">
                    Three Wheelers&nbsp;
                  </Link>
                  <Link className="mr-1 after:content-['|']" href="/">
                    Auto Parts & Accessories&nbsp;
                  </Link>
                  <Link className="mr-1 after:content-['|']" href="/">
                    Auto Services&nbsp;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quicklinks;
