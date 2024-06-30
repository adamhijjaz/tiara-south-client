import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://localhost:3001/posts").then((resp) => {
        setListOfPosts(resp.data);
        try {
          console.log("Response: " + resp);
        } catch (error) {
          console.log("Error :" + error);
        }
      });
    } catch (error) {
      console.log("hello");
    }
  }, []);

  return (
    <div className="flex flex-col bg-white">
      <section className="flex overflow-hidden relative flex-col justify-center items-center px-16 pt-16 pb-24 w-full text-8xl font-bold text-center text-white backdrop-blur-[2px] min-h-[322px] tracking-[7.68px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e094ddfe0b77312e55da12717461ee1e662468af98f306f5dfd3eb4a55d9dd80?apiKey=03f5df226c30468fbf8fdf985b85fe26&"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        PERSATUAN PENDUDUK <br /> TIARA SOUTH
      </section>
      <section className="flex flex-col pb-10 w-full text-center bg-cyan-700 max-md:max-w-full">
        <div className="flex justify-center items-center px-16 py-12 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[1000px] max-md:max-w-full">
            <div className="flex flex-col text-slate-50 max-md:max-w-full">
              <h2 className="self-center text-2xl font-extrabold uppercase tracking-[3.6px] max-md:max-w-full">
                Join the Community
              </h2>
              <p className="mt-5 text-lg max-md:max-w-full">
                Ready to take your digital art journey to new heights? <br />{" "}
                <br />
                Join the DesignForge community today and become part of a
                dynamic and supportive ecosystem of digital artists and
                enthusiasts. Whether you're here to showcase your work, learn
                from others, or simply immerse yourself in the world of digital
                creativity, DesignForge welcomes you with open arms.
              </p>
            </div>
            <div className="flex flex-col justify-center self-center mt-10 w-48 max-w-full text-lg font-semibold text-cyan-700">
              <button className="justify-center items-center px-16 py-5 rounded-xl shadow-sm bg-slate-50 max-md:px-5">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="justify-center items-center py-7 pr-16 pl-20 mt-32 w-full text-xl font-semibold leading-7 text-white uppercase bg-cyan-700 tracking-[2px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <span className="text-white">Hakcipta 2024 © TiaraSouth.com</span>
      </footer>
    </div>
  );
}

export default Home;
