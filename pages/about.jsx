import Head from "next/head";
import TypeWriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="mt-[125px]">
      <Head>
        <title>About | Marwan Zayed</title>
      </Head>
      <div className="container">
        <div className="about text-center">
          <h2 className="text-3xl m-5 text-main border-b-2 inline-block border-main border-dashed">
            About
          </h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-left px-5">
            <div className="bg-bg-secondary text-white text-xl p-3 rounded-md">
              <span className="text-main">Name:</span>{" "}
              <TypeWriter
                onInit={(typewriter) => {
                  typewriter.typeString("Marwan Zayed").start();
                }}
              />
            </div>
            <div className="bg-bg-secondary text-white text-xl p-3 rounded-md">
              <span className="text-main">Field:</span>{" "}
              <TypeWriter
                onInit={(typewriter) => {
                  typewriter.pauseFor(2000).typeString("MERN Stack").start();
                }}
              />
            </div>
            <div className="bg-bg-secondary text-white text-xl p-3 rounded-md">
              <span className="text-main">Country:</span>{" "}
              <TypeWriter
                onInit={(typewriter) => {
                  typewriter.pauseFor(4000).typeString("Egypt").start();
                }}
              />
            </div>
          </div>
        </div>
        <div className="skills text-center mb-5">
          <h2 className="text-3xl m-5 text-main border-b-2 inline-block border-main border-dashed">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 px-5">
            <div className="bg-bg-color rounded flex justify-between items-center p-2">
              <h3 className="text-2xl text-white">HTML</h3>
              <i className="fa-brands fa-html5 text-main text-3xl"></i>
            </div>
            <div className="bg-bg-color rounded flex justify-between items-center p-2">
              <h3 className="text-2xl text-white">CSS</h3>
              <i className="fa-brands fa-css3 text-main text-3xl"></i>
            </div>
            <div className="bg-bg-color rounded flex justify-between items-center p-2">
              <h3 className="text-2xl text-white">SASS</h3>
              <i className="fa-brands fa-sass text-main text-3xl"></i>
            </div>
            <div className="bg-bg-color rounded flex justify-between items-center p-2">
              <h3 className="text-2xl text-white">JavaScript</h3>
              <i className="fa-brands fa-js text-main text-3xl"></i>
            </div>
            <div className="bg-bg-color rounded flex justify-between items-center p-2">
              <h3 className="text-2xl text-white">Bootstrap</h3>
              <i className="fa-brands fa-bootstrap text-main text-3xl"></i>
            </div>
            <div className="bg-bg-color rounded flex justify-between items-center p-2">
              <h3 className="text-2xl text-white">Tailwind</h3>
              <svg
                viewBox="0 0 43 32"
                width={32}
                height={20}
                className="fa-brands text-main text-3xl inline"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                  fill="#23a96e"
                ></path>
              </svg>
            </div>
            <div className="bg-bg-color rounded flex justify-between items-center p-2">
              <h3 className="text-2xl text-white">React</h3>
              <i className="fa-brands fa-react text-main text-3xl"></i>
            </div>
            <div className="bg-bg-color rounded flex justify-between items-center p-2">
              <h3 className="text-2xl text-white">Next</h3>
              <svg
                viewBox="0 0 148 90"
                width={82}
                height={40}
                className="fa-brands text-main text-3xl inline"
              >
                <path
                  d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
                  fill="#23a96e"
                  fillRule="nonzero"
                ></path>
              </svg>
            </div>
            <div className="bg-bg-color rounded flex justify-between items-center p-2">
              <h3 className="text-2xl text-white">TypeScript</h3>
              <svg
                fill="none"
                height="26"
                viewBox="0 0 27 26"
                width="27"
                xmlns="http://www.w3.org/2000/svg"
                className="fa-brands text-main text-3xl inline"
              >
                <path
                  clipRule="evenodd"
                  d="m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z"
                  fill="#23a96e"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="bg-bg-color rounded flex justify-between items-center p-2">
              <h3 className="text-2xl text-white">Node</h3>
              <i className="fa-brands fa-node text-main text-3xl"></i>
            </div>
            <div className="bg-bg-color rounded flex justify-between items-center p-2">
              <h3 className="text-2xl text-white">Express</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32"
                height="32"
              >
                <path
                  fill="#23a96e"
                  d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"
                />
              </svg>
            </div>
            <div className="bg-bg-color rounded flex justify-between items-center p-2">
              <h3 className="text-2xl text-white">MongoDB</h3>
              <svg
                role="img"
                aria-label="Go to the Organization Home"
                className="fa-brands text-main text-3xl inline"
                height="32"
                viewBox="0 0 15 32"
                fill="none"
              >
                <path
                  d="M10.2779 3.56801C8.93285 1.97392 7.76219 0.354933 7.52557 0.0186807C7.50066 -0.00622689 7.4633 -0.00622689 7.43839 0.0186807C7.20177 0.354933 6.04357 1.97392 4.69856 3.56801C-6.8461 18.2759 6.51681 28.1891 6.51681 28.1891L6.6289 28.2639C6.72853 29.7957 6.9776 32 6.9776 32H7.47576H7.97391C7.97391 32 8.22298 29.8081 8.32261 28.2639L8.4347 28.1767C8.44715 28.1891 21.8225 18.2759 10.2779 3.56801ZM7.48821 27.9774C7.48821 27.9774 6.89043 27.4668 6.72853 27.2053V27.1804L7.45085 11.1648C7.45085 11.115 7.52557 11.115 7.52557 11.1648L8.24789 27.1804V27.2053C8.08599 27.4668 7.48821 27.9774 7.48821 27.9774Z"
                  fill="#23a96e"
                ></path>
              </svg>
            </div>
            <div className="bg-bg-color rounded flex justify-between items-center p-2">
              <h3 className="text-2xl text-white">Redux</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 250 250"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
                  fill="#23a96e"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
