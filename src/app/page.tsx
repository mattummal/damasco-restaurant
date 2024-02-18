"use client";

import Link from "next/link";
import NavigationFooter from "@/components/NavigationFooter";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Restaurant DAMASCO</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden w-full">
        <section className="!fixed inset-0 min-h-screen w-full bg-transparent flex flex-col items-center justify-between p-8 md:p-12 z-[20]">
          <Link href="/" className="cursor-pointer font-extrabold text-5xl">
            D A M A S C O
          </Link>

          <div className="flex flex-col items-center">
            <h2 className="text-[#FACE8D] font-dancing text-3xl sm:text-[40px] md:text-[60px] lg:text-[60px] leading-none">
            Experience Authentic Syrian & Lebanese Cuisine in the
            </h2>

            <h1 className="font-medium text-6xl sm:text-4xl mt-[50px] md:text-[90px] lg:text-[120px] leading-none">
            Heart of Leuven
            </h1>

            <p className="text-xl md:text-[19px] italic text-center md:text-start mt-[50px] md:max-w-[600px]">
            Savor the rich flavors of the Middle East at our restaurant, where traditional recipes meet modern flair.
            Indulge in a culinary journey through Syria and Lebanon, where each dish is crafted with care and passion.
            From aromatic spices to mouthwatering mezze, discover the true essence of Levantine cuisine.
            Join us for a dining experience like no other.
            </p>

            <div className="w-full flex-col justify-center max-w-[650px]">
              <div className="mt-[23px] max-w-[650px] w-full flex justify-end">
                <div className="bg-white w-[250px] h-[163px] rounded-[10px] text-black py-4 px-6 hidden sm:block">
                  <h3 className="font-normal tracking-wide">Opening Hours</h3>
                  <div className="mt-2 flex justify-between items-center">
                    <h2 className="">Mon</h2>
                    <p className="font-normal tracking-wide">closed</p>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <h2 className="">Tue - Fri</h2>
                    <p className="font-normal tracking-wide">12pm - 08pm</p>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <h2 className="">Sat - Sun</h2>
                    <p className="font-normal tracking-wide">11am - 08pm</p>
                  </div>
                </div>
              </div>
              <NavigationFooter />
            </div>
          </div>
        </section>

        <div className="slider">
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
        </div>
      </main>
    </>
  );
}
