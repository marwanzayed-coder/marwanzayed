import Head from "next/head";
import TypeWriter from "typewriter-effect";

/*
<TypeWriter
  onInit={(typewriter) => {
    typewriter.typeString("Marwan Zayed").start();
  }}
/>
*/

export default function Work() {
  return (
    <div className="mt-[125px]">
      <Head>
        <title>Works | Marwan Zayed</title>
      </Head>
      <div className="container text-center">
        <h2 className="text-3xl m-5 text-main border-b-2 inline-block border-main border-dashed">
          Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-4">
          <div className="bg-bg-color rounded-tr-[120px] rounded-bl-[120px] rounded-tl-[20px] rounded-br-[20px] text-white p-5">
            <h3 className="text-xl my-2">
              <TypeWriter
                onInit={(typewriter) => {
                  typewriter.typeString("Khaled Ehab Portfolio").start();
                }}
              />
            </h3>
            <div className="flex items-center justify-center">
              <a
                href="https://khaledehab.ml/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="div">
                  <i className="fas fa-desktop link" />
                  <h3 className="text-head">Live</h3>
                  <h3 className="text">Live</h3>
                </div>
              </a>
              <a
                href="https://github.com/marwanzayed-coder/khaledEhab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="div">
                  <i className="fa-brands fa-github-alt link" />
                  <h3 className="text-head">Code</h3>
                  <h3 className="text">Code</h3>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-bg-color rounded-tr-[120px] rounded-bl-[120px] rounded-tl-[20px] rounded-br-[20px] text-white p-5">
            <h3 className="text-xl my-2">
              <TypeWriter
                onInit={(typewriter) => {
                  typewriter.typeString("My Blog").start();
                }}
              />
            </h3>
            <div className="flex items-center justify-center">
              <a
                href="https://araaciit.gq/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="div">
                  <i className="fas fa-desktop link" />
                  <h3 className="text-head">Live</h3>
                  <h3 className="text">Live</h3>
                </div>
              </a>
              <a
                href="https://github.com/marwanzayed-coder/marwan-blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="div">
                  <i className="fa-brands fa-github-alt link" />
                  <h3 className="text-head">Code</h3>
                  <h3 className="text">Code</h3>
                </div>
              </a>
            </div>          </div>
           <div className="bg-bg-color rounded-tr-[120px] rounded-bl-[120px] rounded-tl-[20px] rounded-br-[20px] text-white p-5">
            <h3 className="text-xl my-2">
              <TypeWriter
                onInit={(typewriter) => {
                  typewriter.typeString("Quran Web").start();
                }}
              />
            </h3>
            <span className="text-hover uppercase text-sm">Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}
