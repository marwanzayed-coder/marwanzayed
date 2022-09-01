import Head from "next/head";
import { useState } from "react";

export default function Content() {
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  let handelSubmit = async (e) => {
    e.preventDefault();
    const result = await fetch("/api/email", {
      method: "post",
      body: JSON.stringify({ email, message }),
    });
    if (result.status == 200) {
      console.log("Success");
    } else {
      console.log("Error");
    }
  };
  let handelEmail = (e) => {
    setEmail(e.target.value);
  };
  let handelMessage = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="mt-[125px]">
      <Head>
        <title>Content | Marwan Zayed</title>
        {/* <script src={ahoy} async defer onLoad={configureAhoy()}></script> */}
      </Head>
      <div className="container text-center">
        <h2 className="text-3xl m-5 text-main border-b-2 inline-block border-main border-dashed">
          Content
        </h2>
        <form onSubmit={handelSubmit} method="POST">
          <div className="flex flex-col gap-3 p-3">
            <div className="relative">
              <input
                type="email"
                name="email"
                onChange={handelEmail}
                placeholder="Email"
                className="w-full border-bg-color border-2 rounded-md p-2 pl-6 outline-none text-bg-color"
              />
              <i className="fa-solid fa-envelope absolute top-[14px] left-2 text-bg-color"></i>
            </div>
            <div>
              <textarea
                name="message"
                onChange={handelMessage}
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
                className="w-full border-bg-color border-2 rounded-md p-2 pl-6 outline-none text-bg-color resize-none"
              ></textarea>
            </div>
          </div>
          <div className="relative">
            <i className="fa-solid fa-paper-plane absolute left-5 z-10 top-[14px] text-main"></i>
            <button
              type="submit"
              className="absolute left-3 bg-bg-secondary text-white p-2 px-7 text-lg rounded-lg cursor-pointer"
            >
              Send Your Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// function configureAhoy() {
//   ahoy.configure({
//     visitsUrl: "https://usebasin.com/ahoy/visits",
//     eventsUrl: "https://usebasin.com/ahoy/events",
//     page: "c2894471afdc",
//   });
//   ahoy.trackView();
//   ahoy.trackSubmits();
// }
