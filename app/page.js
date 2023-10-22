import Head from "next/head";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillYoutube, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Jedrek's Portfolio</title>
        <meta name="description" content="Generic"></meta>
        <link rel="icon" href="/react-portfolio1/public/favicon.ico"></link>
      </Head>

      <main>
        <section className=" h-screen min-h-screen px-10">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedby</h1>
            <ul className="flex items-center ">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
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
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Jedrek Koh
            </h2>
            <h3 className="text-2xl py-2"> Developer and Designer</h3>
            <p className="text-md py-5 leading-8 text-gray-300">
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

          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover"></Image>
          </div>
        </section>

        <section>
          <div className="p-12">
            <h3 className="text-3xl py-3"> Service I offer </h3>
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
            <div></div>
          </div>
        </section>
      </main>
    </div>
  );
}
