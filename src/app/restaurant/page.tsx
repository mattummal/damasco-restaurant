"use client";

import NavigationFooter from "@/components/NavigationFooter";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

export default function Restaurant() {
  return (
    <>
      <Head>
        <title>Restaurant DAMASCO</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden">
        <section className="!fixed inset-0 min-h-screen w-full bg-transparent flex flex-col items-center justify-between p-12 z-[20]">
          <Link href="/" className="font-semibold cursor-pointer">
            DAMASCO
          </Link>

          <div className="w-full flex flex-col items-center">
            <h2 className="text-[#FACE8D] font-dancing text-[50px] md:text-[80px] leading-none">
              The pure taste of
            </h2>
            <h1 className="font-medium text-[55px] md:text-[120px] lg:text-[160px] leading-none">
              Syria
            </h1>
            <p className="text-[20px] md:text-[23px] text-center md:text-start mt-[20px] max-w-[600px] italic">
            Savor the rich flavors of the Middle East at our restaurant, where traditional recipes meet modern flair.
            Indulge in a culinary journey through Syria and Lebanon, where each dish is crafted with care and passion.
            From aromatic spices to mouthwatering mezze, discover the true essence of Levantine cuisine.
            Join us for a dining experience like no other.
            </p>

            <div className="w-full flex-col justify-center max-w-[650px]">
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
