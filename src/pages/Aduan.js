import React from 'react';

const InputField = ({ label, id }) => (
  <div className="flex flex-col mt-10 max-md:max-w-full">
    <label htmlFor={id} className="py-2 max-md:max-w-full text-left">
      {label}
    </label>
    <input
      id={id}
      className="shrink-0 mt-1 h-14 rounded-xl border border-solid border-cyan-950 border-opacity-30 px-4 py-2 text-lg leading-6 max-md:max-w-full"
    />
  </div>
);

function Aduan() {
  return (
    <div className="flex flex-col bg-white">
      <main className="flex flex-col self-center px-5 mt-28 w-full max-w-[1300px] max-md:mt-10 max-md:max-w-full">
        <h1 className="self-center text-4xl font-extrabold text-center text-cyan-700 uppercase tracking-[6px] max-md:max-w-full">
          Ruang Aduan
        </h1>
        <section className="flex justify-center items-center p-10 mt-10 text-base whitespace-nowrap rounded-none bg-cyan-700 bg-opacity-10 text-cyan-950 max-md:px-5 max-md:max-w-full">
          <form className="flex flex-col mb-8 max-w-full w-[846px]">
            <InputField label="Name" id="name" />
            <InputField label="Subjek" id="subject" />
            <InputField label="Aduan" id="complaint" />
          </form>
        </section>
      </main>
      <footer className="justify-center items-center py-7 pr-16 pl-20 mt-28 w-full text-xl font-semibold leading-7 text-white uppercase bg-cyan-700 tracking-[2px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <span className="text-white">Hakcipta 2024 © TiaraSouth.com</span>
      </footer>
    </div>
  )
}

export default Aduan;
