import Head from "next/head";

export default function Content() {
  return (
    <div className="mt-[125px]">
      <Head>
        <title>Content | Marwan Zayed</title>
      </Head>
      <div className="container text-center">
        <h2 className="text-3xl m-5 text-main border-b-2 inline-block border-main border-dashed">
          Content
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 p-3 gap-8">
          <div className="bg-[#0d8af0] rounded-tr-[120px] rounded-bl-[120px] rounded-tl-[20px] rounded-br-[20px]">
            <a
              href="https://www.facebook.com/marwanzayed13/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="div">
                <i className="fa-brands fa-facebook-f icon-contact" />
              </div>
            </a>
          </div>
          <div className="bg-[#161b22] rounded-tr-[120px] rounded-bl-[120px] rounded-tl-[20px] rounded-br-[20px]">
            <a
              href="https://github.com/marwanzayed-coder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="div">
                <i className="fa-brands fa-github icon-contact" />
              </div>
            </a>
          </div>
          <div className="bg-[#1d9bf0] rounded-tr-[120px] rounded-bl-[120px] rounded-tl-[20px] rounded-br-[20px]">
            <a
              href="https://twitter.com/marwanzayed20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="div">
                <i className="fa-brands fa-twitter icon-contact" />
              </div>
            </a>
          </div>
          <div className="bg-[#0a66c2] rounded-tr-[120px] rounded-bl-[120px] rounded-tl-[20px] rounded-br-[20px]">
            <a
              href="https://www.linkedin.com/in/marwan-zayed-887191227/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="div">
                <i className="fa-brands fa-linkedin-in icon-contact" />
              </div>
            </a>
          </div>
          <div className="bg-[#2f91ed] rounded-tr-[120px] rounded-bl-[120px] rounded-tl-[20px] rounded-br-[20px]">
            <a
              href="https://t.me/marwan_zayed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="div">
                <i className="fa-brands fa-telegram icon-contact" />
              </div>
            </a>
          </div>
          <div className="instagram rounded-tr-[120px] rounded-bl-[120px] rounded-tl-[20px] rounded-br-[20px]">
            <a
              href="https://www.instagram.com/marwanzayed14/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="div">
                <i className="fa-brands fa-instagram icon-contact" />
              </div>
            </a>
          </div>
          <div className="bg-[#24cc63] rounded-tr-[120px] rounded-bl-[120px] rounded-tl-[20px] rounded-br-[20px]">
            <a
              href="https://wa.me/201118698906"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="div">
                <i className="fa-brands fa-whatsapp icon-contact" />
              </div>
            </a>
          </div>
          <div className="bg-[#0099FF] rounded-tr-[120px] rounded-bl-[120px] rounded-tl-[20px] rounded-br-[20px]">
            <a
              href="http://m.me/marwanzayed13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="div">
                <i className="fa-brands fa-facebook-messenger icon-contact" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
