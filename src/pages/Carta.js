import React from "react";

function Carta() {
  return (
    // <div className="flex flex-col bg-white">
    //   <main className="flex flex-col self-center px-5 mt-28 w-full max-w-[1300px] max-md:mt-10 max-md:max-w-full">
    //     <h1 className="self-center text-4xl font-extrabold text-center text-cyan-700 uppercase tracking-[6px] max-md:max-w-full ">
    //       Tiara South
    //     </h1>
    //     <section className="flex flex-col items-center justify-center p-10 mt-10 text-base border shadow-xl border-opacity-40 whitespace-nowrap border-cyan-600 bg-cyan-700 bg-opacity-10 text-cyan-950 max-md:px-5 max-md:max-w-full rounded-xl">
    //       <h1 className="mb-4 self-center text-4xl font-extrabold text-center text-cyan-700 uppercase tracking-[6px] max-md:max-w-full ">
    //         Carta Organisasi
    //       </h1>
    //       <div className="flex w-3/4 text-wrap">
    //         <img className="rounded-xl shadow-xl border-2 border-slate-700 border-opacity-50" src="/OC TS.png"></img>
    //       </div>
    //     </section>
    //   </main>
    //   <footer className="justify-center items-center py-7 pr-16 pl-20 mt-28 w-full text-md font-semibold leading-7 text-white uppercase bg-cyan-700 tracking-[2px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
    //     <span className="text-white">Hakcipta 2024 © TiaraSouth.com</span>
    //   </footer>
    // </div>

    <div className="flex flex-col bg-white">
      <section className="flex overflow-hidden relative flex-col justify-center items-center px-16 pt-16 pb-24 w-full text-8xl font-bold text-center text-white backdrop-blur-[2px] min-h-[322px] tracking-[8px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <img
          loading="lazy"
          src="https://media.graphassets.com/resize=fit:crop,width:1280,height:660/9qiBGM97SZinM5O3ENvv"
          alt=""
          className="absolute z-[-2] inset-0 object-cover size-full"
        />
        CARTA ORGANISASI
      </section>
      <section className="flex flex-col w-full p-10 text-center bg-cyan-700 max-md:max-w-full">
        <div className="backdrop-blur-md self-center p-5 px-5 text-4xl bg-slate-300 bg-opacity-70 rounded-xl shadow-xl border border-cyan-700 border-opacity-50  text-center mt-10 ">
          <h2 className="font-bold text-white text-2xl mb-4">
            Organisasi Tiara South 
          </h2>
          <div className="flex flex-col w-full max-w-[1000px] max-md:max-w-full">
            <img
              className="rounded-xl"
              loading="lazy"
              src="/OC TS.png"
              alt=""
            />
            <div className="flex flex-col self-center justify-center w-48 max-w-full mt-10 text-lg font-semibold text-cyan-700">
              <div className="items-center justify-center px-8 py-1 shadow-sm rounded-xl bg-slate-100 bg-opacity-40 max-md:px-5"></div>
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

export default Carta;
