import React from "react";
import axios from "axios";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    try {
      axios.get("http://localhost:3001/auth/auth").then((resp) => {
        try {
          console.log("Response: " + resp);
        } catch (error) {
          console.log("Error :" + error);
        }
      });
    } catch (error) {
      console.log("hello error happen in Home Page");
    }
  }, []);

  return (
    <div className="flex flex-col bg-white">
      <section className="flex overflow-hidden relative flex-col justify-center items-center px-16 pt-16 pb-24 w-full text-8xl font-bold text-center text-white backdrop-blur-[2px] min-h-[322px] tracking-[7.68px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <img
          loading="lazy"
          src="https://png.pngtree.com/background/20230424/original/pngtree-an-aerial-view-of-residential-buildings-with-green-roofs-picture-image_2462208.jpg"
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
                Sertai Komuniti
              </h2>
              <p className="mt-5 text-lg max-md:max-w-full">
                Sedia untuk menjadikan Tiara South satu tempat yang sejahtera dan damai? <br />{" "}
                <br />
                Selamat Datang kepada semua pengunjung laman web Persatuan
                Penduduk Tiara South, Semenyih. Di harap para pengunjung dapat
                menggunakan wadah laman web ini sebagai satu medium penghubung
                yang efektif di antara Persatuan ini dengan orang ramai.
              </p>
            </div>
            <div className="flex flex-col justify-center self-center mt-10 w-48 max-w-full text-lg font-semibold text-cyan-700">
              <button className="justify-center items-center px-8 py-2 rounded-xl shadow-sm bg-slate-50 max-md:px-5">
                Sertai Kami
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
