"use client"; // This is a client component 👈🏽
import Head from "next/head";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import React from "react";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillYoutube, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

export default function Home() {
  let [darkMode, setDarkMode] = React.useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title> Jedrek's Portfolio</title>
        <meta name="description" content="Generic"></meta>
        <link rel="icon" href="/react-portfolio1/public/favicon.ico"></link>
      </Head>

      <main>
        <section className=" h-screen min-h-screen px-10 md:px-20 lg:px-40">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons text-gray-700">developedby</h1>
            <ul className="flex items-center ">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-300 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  {" "}
                  Resume{" "}
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Jedrek Koh
            </h2>
            <h3 className="text-2xl py-2 text-gray-800 md:text-3xl">
              {" "}
              Developer and Designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-wl max-w-xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, accusantium veniam aliquid dicta repellendus ducimus
              natus ex laudantium praesentium dolores nesciunt accusamus ullam
              iure quaerat assumenda minus voluptatum modi.
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillFacebook></AiFillFacebook>
            <AiFillLinkedin></AiFillLinkedin>
            <AiFillYoutube></AiFillYoutube>
          </div>

          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover"></Image>
          </div>
        </section>

        <section>
          <div className="p-12 text-center py-48">
            <h3 className="text-3xl text-gray-600 py-2"> Service I offer </h3>
            <p className="text-md leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              labore sed odit nobis amet{" "}
              <span className="text-teal-500">testText</span> distinctio quia
              vel, quae, quasi nesciunt voluptatibus facere ad debitis placeat
              nihil!
            </p>

            <p className="text-md leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              labore sed odit nobis amet{" "}
              <span className="text-teal-500">testText</span> distinctio quia
              vel, quae, quasi nesciunt voluptatibus facere ad debitis placeat
              nihil! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, qui. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Beatae, suscipit.
            </p>
            <div className="lg:flex gap-10">
              <div className=" text-center shadow-lg p-10 rounded-xl my019">
                <Image
                  className="relative mx-auto"
                  src={design}
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs for you or me or him or her.
                </p>
                <h4 className="py-4 text-teal-400"> Design tools I use</h4>
                <p className="text-gray-500 py-1">PhotopShop</p>
                <p className="text-gray-500 py-1">Adobe Illustator</p>
                <p className="text-gray-500 py-1">Figma</p>
              </div>

              <div className=" text-center shadow-lg p-10 rounded-xl my019">
                <Image
                  className="relative mx-auto"
                  src={consulting}
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs for you or me or him or her.
                </p>
                <h4 className="py-4 text-teal-400"> Design tools I use</h4>
                <p className="text-gray-500 py-1">PhotopShop</p>
                <p className="text-gray-500 py-1">Adobe Illustator</p>
                <p className="text-gray-500 py-1">Figma</p>
              </div>

              <div className=" text-center shadow-lg p-10 rounded-xl my019">
                <Image
                  className="relative mx-auto"
                  src={code}
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs for you or me or him or her.
                </p>
                <h4 className="py-4 text-teal-400"> Design tools I use</h4>
                <p className="text-gray-500 py-1">PhotopShop</p>
                <p className="text-gray-500 py-1">Adobe Illustator</p>
                <p className="text-gray-500 py-1">Figma</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="p-10 text-center">
            <h3 className="text-3xl  text-gray-600 py-1">Portfolio</h3>

            <p className="text-md leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              labore sed odit nobis amet{" "}
              <span className="text-teal-500">testText</span> distinctio quia
              vel, quae, quasi nesciunt voluptatibus facere ad debitis placeat
              nihil! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, qui. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Beatae, suscipit.
            </p>

            <div className="flex flex-col gap-10 p-10 lg:flex-row flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image
                  src={web1}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                ></Image>
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web2}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                ></Image>
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web3}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                ></Image>
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web4}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                ></Image>
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web5}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                ></Image>
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web6}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                ></Image>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
