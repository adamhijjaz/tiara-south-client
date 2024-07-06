import React from "react";

function Latar() {
  return (
    <div className="flex flex-col bg-[url('https://www.legendkitchen.com/backend/uploads/gallery/210526_2.jpg')] bg-no-repeat bg-cover ">
      <main className=" backdrop-blur-md flex flex-col self-center p-5 px-5 mt-36 w-full text-4xl bg-slate-300 bg-opacity-70 rounded-xl shadow-xl border border-cyan-700 border-opacity-50  text-center max-w-[1300px] max-md:mt-10 max-md:max-w-full">
        <h1 className="self-center text-cyan-700 max-md:max-w-full uppercase font-extrabold">
          Latar Belakang
        </h1>
        <section className="justify-center text-justify px-10 pt-10 pb-32 mt-10 text-[20px] text-black font-bold rounded-none bg-cyan-700 bg-opacity-10 max-md:px-5 max-md:pb-10 max-md:max-w-full">
          <div className="flex flex-col items-center gap-y-6 w-full">
            <div className="w-full">
              Persatuan penduduk Tiara South adalah sebuah organisasi atau badan
              yang dibentuk oleh penduduk yang tinggal di Tiara South. Tujuan
              utama dari persatuan penduduk taman ini adalah untuk memajukan
              kehidupan bersama dan meningkatkan kesejahteraan komunitas
              tersebut. Beberapa tujuan dan fungsi umum persatuan penduduk taman
              melibatkan:
            </div>

            <li className="w-full">
              Kesejahteraan Komuniti: Memastikan Kehidupan yang nyaman dan aman
              bagi semua penduduk dalam taman perumahan tersebut.
            </li>
            <li className="w-full">
              Keamanan: Menigkatkan sistem keamanan di dalam taman, mungkin
              melalui kemanan bersama, patrol keamanan, atau Kerjasama dengan
              pihak berkuasa.
            </li>
            <li className="w-full">
              Kegiatan Sosial: Mengorganisasi kegiatan-kegiatan sosial seperti
              acara-acara komuniti, pertemuan tetangga, atau kegiatan amal.
            </li>
          </div>
        </section>
      </main>
      <footer className="justify-center items-center px-16 py-5 mt-36 w-full text-xl font-semibold leading-7 text-white uppercase bg-cyan-700 tracking-[2px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <span className="text-white">Hakcipta 2024 © TiaraSouth.com</span>
      </footer>
    </div>
  );
}

export default Latar;
