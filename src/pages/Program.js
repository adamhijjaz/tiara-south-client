import React, { useState } from 'react';

const NewsCard = ({ imageSrc, title, description }) => (
  <article className="flex flex-col w-full grow text-cyan-950 max-md:mt-10">
    <img loading="lazy" src={imageSrc} alt={title} className="w-full aspect-[1.18] max-md:max-w-full" />
    <div className="flex flex-col mt-5 max-md:max-w-full">
      <h3 className="text-2xl font-semibold max-md:max-w-full">{title}</h3>
      <p className="mt-2.5 text-lg max-md:max-w-full">{description}</p>
    </div>
  </article>
);

const newsItems = [
  {
    imageSrc: "/gotongroyong.jpg",
    title: "Gotong Royong",
    description: "Aktiviti gotong royong merupakam aktiviti tahunan penduduk Tiara South demi menjaga keamanan taman. Aktiviti ini merangkumi menebas pokok bagi mengelakkan pencerobohan monyet, memasang perangkap ular dan membersihkan kawasan taman."
  },
  {
    imageSrc: "/perkhemahan.jpg",
    title: "Perkhemahan",
    description: "Aktiviti ini kebiasaannya dijalankan di rumah kelab Tiara South di mana ia mengumpulkan penduduk-penduduk Tiara South sebagai tanda keharmonian taman."
  },
  {
    imageSrc: "/senamrobik.jpg",
    title: "Senam Robik",
    description: "Perkhemahan atau lebih dikenali sebagai “camping” diwujudkan bagi memberi pengalaman kemahiran hidup di kawasan hutan kepada ahli yang berminat."
  },
  {
    imageSrc: "/bbq.jpg",
    title: "Malam BBQ",
    description: "Aktiviti ini kebiasaannya dijalankan di rumah kelab Tiara South di mana ia mengumpulkan penduduk-penduduk Tiara South sebagai tanda keharmonian taman."
  }
];


function Program() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const displayedItems = newsItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col bg-white">
      <main className="flex flex-col self-center px-5 mt-36 w-full max-w-[1300px] max-md:mt-10 max-md:max-w-full">
        <h1 className="self-center text-4xl font-extrabold text-center text-cyan-700 uppercase tracking-[6px] max-md:max-w-full">
          Program
        </h1>
        <section className="flex flex-col mt-10 max-md:max-w-full">
          <div className="flex flex-col justify-center p-10 border shadow-xl rounded-xl border-cyan-700 border-opacity-40 bg-cyan-700 bg-opacity-10 max-md:px-5 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {displayedItems.map((item, index) => (
                  <div key={index} className="flex flex-col w-1/3 max-md:ml-0 max-md:w-full">
                    <NewsCard {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <nav className="flex gap-2.5 self-center mt-5" aria-label="News pagination">
            {[...Array(totalPages).keys()].map(page => (
              <div
                key={page}
                className={`shrink-0 w-10 h-2.5 rounded-xl ${currentPage === page + 1 ? 'bg-slate-400' : 'bg-slate-300'}`}
                role="button"
                tabIndex="0"
                aria-label={`Page ${page + 1}`}
                onClick={() => handlePageChange(page + 1)}
              ></div>
            ))}
          </nav>
        </section>
      </main>
      <footer className="justify-center items-center px-16 py-5 mt-36 w-full text-md font-semibold leading-7 text-white uppercase bg-cyan-700 tracking-[2px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <span className="text-white">Hakcipta 2024 © TiaraSouth.com</span>
      </footer>
    </div>
  );
}

export default Program;
