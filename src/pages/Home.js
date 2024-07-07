import React from "react";
import axios from "axios";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const checkAccessToken = async () => {
      try {
        const response = await axios.get("https://tiarasouth-iri7.onrender.com/auth/auth", {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        });
        console.log("User is authenticated:", response.data);
      } catch (e) {
        console.error("User is not authenticated:", e);
      }
    };

    // Call the function to check accessToken
    checkAccessToken();
  }, []);

  return (
    <div className="flex flex-col bg-white">
      <section className="flex overflow-hidden relative flex-col justify-center items-center px-16 pt-16 pb-24 w-full text-8xl font-bold text-center text-white backdrop-blur-[2px] min-h-[322px] tracking-[8px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <img
          loading="lazy"
          src="https://png.pngtree.com/background/20230424/original/pngtree-an-aerial-view-of-residential-buildings-with-green-roofs-picture-image_2462208.jpg"
          alt=""
          className="absolute z-[-2] inset-0 object-cover size-full"
        />
        PERSATUAN PENDUDUK <br /> TIARA SOUTH
      </section>
      <section className="flex flex-col w-full pb-10 text-center bg-cyan-700 max-md:max-w-full">
        <div className="flex items-center justify-center w-full px-16 py-12 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[1000px] max-md:max-w-full">
            <div className="flex flex-col text-slate-50 max-md:max-w-full">
              <h2 className="self-center text-2xl font-extrabold uppercase tracking-[3.6px] max-md:max-w-full">
                Sertai Komuniti
              </h2>
              <p className="mt-5 text-lg max-md:max-w-full">
                Sedia untuk menjadikan Tiara South satu tempat yang sejahtera
                dan damai? <br /> <br />
                Selamat Datang kepada semua pengunjung laman web Persatuan
                Penduduk Tiara South, Semenyih. Di harap para pengunjung dapat
                menggunakan wadah laman web ini sebagai satu medium penghubung
                yang efektif di antara Persatuan ini dengan orang ramai.
              </p>
            </div>
            <div className="flex flex-col self-center justify-center w-48 max-w-full mt-10 text-lg font-semibold text-cyan-700">
              <button onClick={()=>{
                window.location.href = "/Signup"
              }} className="items-center justify-center px-8 py-2 shadow-sm rounded-xl bg-slate-50 max-md:px-5">
                Sertai Kami
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="justify-center items-center py-7 pr-16 pl-20 mt-32 w-full text-md font-semibold leading-7 text-white uppercase bg-cyan-700 tracking-[2px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <span className="text-white">Hakcipta 2024 © TiaraSouth.com</span>
      </footer>
    </div>
  );
}

export default Home;
