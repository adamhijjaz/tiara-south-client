import React from "react";

const InputField = ({ label, id }) => (
  <div className="flex flex-col mt-10 max-md:max-w-full">
    <label htmlFor={id} className="py-2 text-left max-md:max-w-full">
      {label}
    </label>
    <input
      id={id}
      placeholder={label.toString()}
      className="px-4 py-2 mt-1 text-lg leading-6 border border-solid shrink-0 h-14 rounded-xl border-cyan-950 border-opacity-30 max-md:max-w-full"
    />
  </div>
);

function Aduan() {
  return (
    <div className="flex flex-col bg-white">
      <main className="flex flex-col self-center px-5 mt-28 w-full max-w-[1300px] max-md:mt-10 max-md:max-w-full">
        <h1 className="self-center text-4xl font-extrabold text-center text-cyan-700 uppercase tracking-[6px] max-md:max-w-full ">
          Ruang Aduan
        </h1>
        <section className="flex flex-col items-center justify-center p-10 mt-10 text-base border shadow-xl border-opacity-40 whitespace-nowrap border-cyan-600 bg-cyan-700 bg-opacity-10 text-cyan-950 max-md:px-5 max-md:max-w-full rounded-xl">
          <div className="flex w-3/4 text-wrap">
          <p className="text-red-500">*</p>
            Aduan anda akan diberi perhatian segera. Kami menghargai maklum
            balas anda dan berusaha untuk menyelesaikan setiap aduan dengan
            segera. Terima kasih kerana memberi peluang kepada kami untuk
            meningkatkan perkhidmatan kami.
          </div>
          <form className="flex flex-col mb-8 max-w-full w-[846px]">
            <InputField label="Name" id="name" />
            <InputField label="Subjek" id="subject" />
            {/* <InputField label="Aduan" id="complaint" /> */}
            <div className="flex flex-col mt-10">
              <label className="py-2 text-left max-md:max-w-full">Aduan (Maksimum: 250 huruf)</label>
              <textarea
                label="Aduan"
                placeholder="Aduan anda berkenaan..."
                className="p-4 text-lg leading-6 border border-solid rounded-xl border-cyan-950 border-opacity-30"
              ></textarea>
            </div>
          </form>
          <button className="w-1/4 p-4 font-bold text-white duration-500 rounded-lg hover:shadow-xl bg-slate-700 hover:bg-slate-950 text-md">
            Hantar
          </button>
        </section>
      </main>
      <footer className="justify-center items-center py-7 pr-16 pl-20 mt-28 w-full text-xl font-semibold leading-7 text-white uppercase bg-cyan-700 tracking-[2px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <span className="text-white">Hakcipta 2024 © TiaraSouth.com</span>
      </footer>
    </div>
  );
}

export default Aduan;
