import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
// import deved from "../public/dev-ed-wave.png";
import deved from "../public/en.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/project/lantaupos.png";
import web2 from "../public/project/abgadget.png";
import web3 from "../public/project/fastpizza.png";
import web4 from "../public/project/natours.jpg";
import web5 from "../public/project/worldwise.png";
import web6 from "../public/web6.png";
import reactsvg from "../public/toolsicons/react.svg";
import vuejslogo from "../public/toolsicons/vuejslogo.png";
import express from "../public/toolsicons/express-js.png";
import next from "../public/toolsicons/nextjs.png";
import nodejs from "../public/toolsicons/nodejs.png";
import html5 from "../public/toolsicons/html5.png";
import css3 from "../public/toolsicons/css3.png";
import js from "../public/toolsicons/js.png";
import bootstrap from "../public/toolsicons/bootstrap.png";
import tailwind from "../public/toolsicons/tailwind.png";
import vuetify from "../public/toolsicons/vuetify.png";
import mongodb from "../public/toolsicons/mongodb.png";
import nosql from "../public/toolsicons/nosql.png";
import php from "../public/toolsicons/php.png";
import firebase from "../public/toolsicons/firebase.png";
import supabase from "../public/toolsicons/supabase.png";
import git from "../public/toolsicons/git.png";
import bitbucket from "../public/toolsicons/bitbucket.png";
import canva from "../public/toolsicons/canva.png";
import vscode from "../public/toolsicons/vscode.png";
import mscode from "../public/toolsicons/mscode.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Design from "./components/Design";
import { Typewriter } from "react-simple-typewriter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const onButtonClick = () => {
    const pdfUrl = "Enrique's Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Enrique's Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Head>
        <title>Enrique Salomon Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10  md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="pt-3 mb-12 flex flex-wrap justify-between">
            <h1 className="text-xl font-burtons">
              salomon<span className="text-amber-300">dev</span>
            </h1>
            <ul className="flex items-center">
              {/* <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
              </li> */}

              {/* <li className="pr-1">
                <Image style={{ width: "50px" }} src={reactsvg} />
              </li>
              <li className="pr-1">
                <Image style={{ width: "50px" }} src={vuejslogo} />
              </li>
              <li className="pr-1">
                <Image style={{ width: "50px" }} src={nodejs} />
              </li>
              <li className="pr-1">
                <Image style={{ width: "50px" }} src={express} />
              </li> */}
              <li className="pr-1">
                <div className="text-5xl flex justify-center">
                  <a href="https://github.com/enriquesalomon" target="_blank">
                    <AiFillGithub />
                  </a>
                </div>
              </li>
              <li className="pr-1">
                <div className="text-5xl flex justify-center">
                  <a
                    href="https://www.linkedin.com/in/enrique-salomon-573930183"
                    target="_blank"
                  >
                    <AiFillLinkedin />
                  </a>
                </div>
              </li>

              <li>
                <button
                  className=" text-white px-4 py-2 rounded-md ml-8 outline outline-offset-2 outline-teal-500"
                  onClick={onButtonClick}
                >
                  Download Resume
                </button>
              </li>
            </ul>
          </nav>
          <div className="text-center ">
            <h2 className="text-5xl  text-teal-600 font-medium md:text-6xl">
              {/* <span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ..."> */}
              Enrique Salomon
              {/* </span> */}
            </h2>
            <h3 className="text-2xl py-2">
              <span className="box-decoration-slice bg-gradient-to-r from-teal-600 to-teal-900 text-white px-2 ...">
                {/* Fullstack Developer */}
                <Typewriter
                  words={["Fullstack Developer"]}
                  loop={10}
                  cursor={true}
                  cursorStyle="|"
                  typeSpeed={150}
                  deleteSpeed={70}
                  delaySpeed={1000}
                />
              </span>
            </h3>
            <p className="text-md py-5 leading-8 text-gray-400 md:text-xl max-w-l mx-auto">
              An experienced full-stack developer. Possesses adaptability and
              can work efficiently in both team and independent work
              environments, with a strong drive to master legacy technologies
              and explore new systems.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 mb-4">
            {/* <AiFillGithub />
            <AiFillLinkedin />
            <AiFillYoutube /> */}
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 overflow-hidden md:h-66 md:w-66">
            <Image
              src={deved}
              alt="imagewave"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        <section>
          <h3 className="text-center text-3xl pt-12">Skills</h3>

          <div className="lg:flex gap-10">
            <div
              className=" text-center shadow-lg p-10 rounded-xl my-10  shadow-teal-500/50  flex-1"
              data-aos="fade-right"
            >
              <h3 className="text-lg font-medium pt-8 pb-2">FRONTEND</h3>
              <div className="text-xl  gap-1 py-3 grid grid-cols-2 ">
                <div className="border-2 rounded-lg flex px-2 py-2">
                  <Image style={{ width: "30px" }} src={reactsvg} alt="react" />
                  <span className="text-sm pt-1 pl-1">React Js</span>
                </div>
                <div className="border-2 rounded-lg flex px-2 py-2">
                  <Image style={{ width: "30px" }} src={vuejslogo} alt="vue" />
                  <span className="text-sm pt-1 pl-1">Vue Js</span>
                </div>
                <div className="border-2 rounded-lg flex px-2 py-2">
                  <Image style={{ width: "30px" }} src={html5} alt="html" />
                  <span className="text-sm pt-1 pl-1">HTML</span>
                </div>
                <div className="border-2 rounded-lg flex px-2 py-2">
                  <Image style={{ width: "30px" }} src={css3} alt="cssr" />
                  <span className="text-sm pt-1 pl-1">CSS</span>
                </div>
                <div className="border-2 rounded-lg flex px-2 py-2">
                  <Image style={{ width: "30px" }} src={js} alt="js" />
                  <span className="text-sm pt-1 pl-1">JavaScript</span>
                </div>
                <div className="border-2 rounded-lg flex px-2 py-2">
                  <Image style={{ width: "30px" }} src={bootstrap} alt="bs" />
                  <span className="text-sm pt-1 pl-1">Bootstrap</span>
                </div>
                <div className="border-2 rounded-lg flex px-2 py-2">
                  <Image
                    style={{ width: "30px" }}
                    src={tailwind}
                    alt="tailwind"
                  />
                  <span className="text-sm pt-1 pl-1">TailwinCSS</span>
                </div>
                <div className="border-2 rounded-lg flex px-2 py-2">
                  <Image style={{ width: "30px" }} src={vuetify} alt="ve" />
                  <span className="text-sm pt-1  pl-1">Vuetify</span>
                </div>
              </div>
            </div>
            <div
              className="text-center shadow-lg p-10 rounded-xl my-10  shadow-teal-500/50  shrink-0 "
              data-aos="flip-up"
            >
              <h3 className="text-lg font-medium pt-8 pb-2">BACKEND</h3>
              <div className="text-xl  gap-1 py-3 grid grid-cols-2 ">
                <div className="border-2 rounded-lg flex px-2 py-2 ">
                  <Image style={{ width: "30px" }} src={nodejs} alt="nodejs " />
                  <span className="text-sm pt-1 pl-1">Node Js</span>
                </div>
                <div className="border-2 rounded-lg flex px-2 py-2">
                  <Image
                    style={{ width: "30px" }}
                    src={express}
                    alt="express"
                  />
                  <span className="text-sm pt-1  pl-1">Express Js</span>
                </div>
                <div className="border-2 rounded-lg flex px-2 py-2">
                  <Image
                    style={{ width: "30px" }}
                    src={mongodb}
                    alt="mongodb"
                  />
                  <span className="text-sm pt-1  pl-1">MongoDB</span>
                </div>
                <div className="border-2 rounded-lg flex px-2 py-2">
                  <Image style={{ width: "30px" }} src={nosql} alt="nosql" />
                  <span className="text-sm pt-1  pl-1">NoSQL</span>
                </div>
                <div className="border-2 rounded-lg flex px-2 py-2">
                  <Image style={{ width: "30px" }} src={php} alt="php" />
                  <span className="text-sm pt-1  pl-1">PHP</span>
                </div>
                <div className="border-2 rounded-lg flex px-2 py-2">
                  <Image
                    style={{ width: "30px" }}
                    src={firebase}
                    alt="firebase"
                  />
                  <span className="text-sm pt-1  pl-1">Firebase</span>
                </div>
                <div className="border-2 rounded-lg flex px-2 py-2">
                  <Image
                    style={{ width: "30px" }}
                    src={supabase}
                    alt="supabase"
                  />
                  <span className="text-sm pt-1  pl-1">Supabase</span>
                </div>
              </div>
            </div>
            <div
              className="text-center shadow-lg p-10 rounded-xl my-10  shadow-teal-500/50 flex-1"
              data-aos="fade-left"
            >
              <h3 className="text-lg font-medium pt-8 pb-2">OTHERS</h3>
              <div className="text-xl  gap-1 py-3 grid grid-cols-2 ">
                <div className="border-2 rounded-lg flex px-2 py-2 ">
                  <Image style={{ width: "30px" }} src={git} alt="git" />
                  <span className="text-sm pt-1  pl-1">Git</span>
                </div>
                <div className="border-2 rounded-lg flex px-2 py-2">
                  <Image
                    style={{ width: "30px" }}
                    src={bitbucket}
                    alt="bitbucket"
                  />
                  <span className="text-sm pt-1  pl-1">Bitbucket</span>
                </div>
                <div className="border-2 rounded-lg flex px-2 py-2">
                  <Image style={{ width: "30px" }} src={canva} alt="canva" />
                  <span className="text-sm pt-1  pl-1">Canva</span>
                </div>
                <div className="border-2 rounded-lg flex px-2 py-2">
                  <Image style={{ width: "30px" }} src={vscode} alt="vscode" />
                  <span className="text-sm pt-1  pl-1">VS Code</span>
                </div>
                <div className="border-2 rounded-lg flex px-2 py-2">
                  <Image style={{ width: "30px" }} src={mscode} alt="mscode" />
                  <span className="text-sm pt-1 pl-1">
                    Microsoft Visual Studio
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-center text-3xl py-1 pt-10">Portfolio</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1" data-aos="fade-down-right">
              <Image
                src={web3}
                alt=""
                className="rounded-lg object-cover"
                height={"100%"}
                width={"100%"}
                layout="responsive"
              />
              {/* <h4 className="py-4 text-teal-600 font-bold">
                Ordering Pizza <br></br>
                <span className=" text-gray-500 font-semibold">
                  #ReactJS, #ReactQuery, #ReduxToolkit, #Tailwindcss
                </span>
              </h4> */}
              <div className="flex">
                <div className="grow h-14">
                  <h4 className="py-4 text-teal-600 font-bold">
                    Ordering Pizza <br></br>
                    <span className=" text-gray-500 font-semibold">
                      #ReactJS, #ReactQuery, #ReduxToolkit, #Tailwindcss
                    </span>
                  </h4>
                </div>
                <div className="flex pt-5  mb-6">
                  <a
                    className="bg-teal-500 hover:bg-sky-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="https://drive.google.com/file/d/1izs06eI9Wn7v_MfZyq2unJ-PXatjiiAg/view?usp=drive_link"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1" data-aos="fade-down-left">
              <Image
                src={web4}
                alt=""
                className="rounded-lg object-cover"
                height={"100%"}
                width={"100%"}
                layout="responsive"
              />

              <div className="flex">
                <div className="grow h-14">
                  <h4 className="py-4 text-teal-600 font-bold">
                    Tour Booking App <br></br>
                    <span className=" text-gray-500 font-semibold">
                      #Nodejs, #Expressjs, #MongoDB, #Stripe
                    </span>
                  </h4>
                </div>
                <div className="flex pt-5 mb-6">
                  <a
                    className="bg-teal-500 hover:bg-sky-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="https://youtu.be/Yo-1ga21KOk?si=4Qmc12ZHoybjYGlI"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1" data-aos="fade-down-right">
              <Image
                src={web1}
                alt="web1"
                className="rounded-lg object-cover"
                height={"100%"}
                width={"100%"}
                layout="responsive"
              />

              <div className="flex">
                <div className="grow h-14">
                  <h4 className="py-4 text-teal-600 font-bold">
                    Water Refilling Station Management System w/ POS<br></br>
                    <span className=" text-gray-500 font-semibold">
                      #.NET Desktop Application
                    </span>
                  </h4>
                </div>
                <div className="flex pt-5 mb-12">
                  <a
                    className="bg-teal-500 hover:bg-sky-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="https://drive.google.com/file/d/10j9MKPFU--L_35IP_5MVr5ioJ6gJU3nu/view?usp=drive_link"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1" data-aos="fade-down-left">
              <Image
                src={web2}
                alt="web2"
                className="rounded-lg object-cover"
                height={"100%"}
                width={"100%"}
                layout="responsive"
              />

              <div className="flex">
                <div className="grow h-14">
                  <h4 className="py-4 text-teal-600 font-bold">
                    Installment Management System w/ POS
                    <br></br>
                    <span className=" text-gray-500 font-semibold">
                      #.NET Desktop Application
                    </span>
                  </h4>
                </div>
              </div>
            </div>

            <div className="basis-1/3 flex-1" data-aos="fade-up">
              <Image
                src={web5}
                alt="web5"
                className="rounded-lg object-cover"
                height={"100%"}
                width={"100%"}
                layout="responsive"
              />
              {/* <h4 className="py-4 text-teal-600 font-bold">
                Adventures Note Tracker <br></br>
                <span className=" text-gray-500 font-semibold">
                  #ReactJS, #ReactQuery, #ReduxToolkit, #Tailwindcss
                </span>
              </h4> */}

              <div className="flex">
                <div className="grow h-14">
                  <h4 className="py-4 text-teal-600 font-bold">
                    Adventures Note Tracker<br></br>
                    <span className=" text-gray-500 font-semibold">
                      {" "}
                      #ReactJS, #ReactQuery, #ReduxToolkit, #Tailwindcss
                    </span>
                  </h4>
                </div>
                <div className="flex pt-5 ">
                  <a
                    className="bg-teal-500 hover:bg-sky-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="https://drive.google.com/file/d/1jrVqR7nP6hm7BPwfHHzVRCCzor5MH130/view?usp=sharing"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Design />
    </div>
  );
}
