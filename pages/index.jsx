import Head from "next/head";
import Image from "next/image";
import GIF_Img from "../public/sammy-service-support.gif";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Marwan Zayed</title>
        {/* <script
          src="//code.tidio.co/29kwc19yrdlylprfhzeyl527holw5og4.js"
          async
        ></script> */}
      </Head>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-[100vh]">
        <div className="m-auto">
          <h1 className="text-4xl uppercase font-bold mt-10 sm:mt-0 my-5 text-bg-color text-center sm:text-start">
            <span className="text-main">M</span>arwan{" "}
            <span className="text-main">Z</span>ayed
          </h1>
          <p className="capitalize text-lg leading-[2] text-bg-secondary font-semibold text-center p-3 sm:text-start">
            I&#39;m Marwan Zayed and I work in the field of MERN Stack, I&#39;m
            looking forward to improving myself every day.
          </p>
        </div>
        <div className="m-auto">
          <Image src={GIF_Img} alt="Hello"></Image>
        </div>
      </div>
    </div>
  );
}
