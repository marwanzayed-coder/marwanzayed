import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from "../public/favicon.png";

const Slider = () => {
  let url = useRouter().route;
  let [show, setShow] = useState(false);
  return (
    <div className="slider transition-all h-17 w-full bg-bg-color text-white p-4 flex justify-between items-center fixed left-0 top-0">
      <div>
        <Image src={Logo} alt="Logo" width={45} height={45}></Image>
      </div>
      <div
        className={`flex flex-col ${
          show ? "top-[83px]" : "-top-80"
        } transition-all left-0 w-full items-start sm:top-0 bg-bg-color sm:justify-center sm:items-center sm:flex-row sm:gap-10 absolute sm:relative`}
      >
        <Link href="/">
          <div className="div">
            <i
              className={
                url !== "/" ? "fas fa-home link" : "fas fa-home link active"
              }
            />
            <h3 className="text-head">Home</h3>
            <h3 className="text">Home</h3>
          </div>
        </Link>
        <Link href="/about">
          <div className="div">
            <i
              className={
                url !== "/about"
                  ? "fas fa-address-card link"
                  : "fas fa-address-card link active"
              }
            />
            <h3 className="text-head">About</h3>
            <h3 className="text">About</h3>
          </div>
        </Link>
        <Link href="/works">
          <div className="div">
            <i
              className={
                url !== "/works"
                  ? "fas fa-laptop-code link"
                  : "fas fa-laptop-code link active"
              }
            />
            <h3 className="text-head">Work</h3>
            <h3 className="text">Work</h3>
          </div>
        </Link>
        <Link href="/contact">
          <div className="div">
            <i
              className={
                url !== "/contact"
                  ? "fas fa-message link"
                  : "fas fa-message link active"
              }
            />
            <h3 className="text-head">Contact</h3>
            <h3 className="text">Contact</h3>
          </div>
        </Link>
      </div>
      <div>
        <i
          className="fa-solid fa-bars-staggered text-xl cursor-pointer sm:hidden"
          onClick={() => setShow(!show)}
        />
      </div>
    </div>
  );
};

export default Slider;
