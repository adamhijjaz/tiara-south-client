import React, { useState } from "react";

const NewsCard = ({ imageSrc, title, description }) => (
  <article className="flex flex-col grow text-cyan-950 max-md:mt-10 max-md:max-w-full">
    <img
      loading="lazy"
      src={imageSrc}
      alt={title}
      className="w-full aspect-[1.18] max-md:max-w-full rounded-tr-3xl rounded-bl-3xl"
    />
    <div className="flex flex-col mt-5 max-md:max-w-full">
      <h3 className="text-2xl font-semibold max-md:max-w-full">{title}</h3>
      <p className="mt-2.5 text-lg max-md:max-w-full">{description}</p>
    </div>
  </article>
);

const newsItems = [
  {
    imageSrc:
      "/parking.png",
    title: "Parking",
    description:
      "Isu parking di bahu jalan sering diperkatakan oleh penduduk taman oleh kerana penduduk perlu lebih berhati-hati untuk menggunakan laluan utama untuk ke jalan 3, 4 dan 5.",
  },
  {
    imageSrc:
      "/monyet.png",
    title: "Monyet",
    description:
      "Masalah monyet menceroboh masuk taman Tiara South juga menjadi bualan hangat dalam kalangan penduduk. Oleh itu, beberapa inisiatif perlu diambil demi keselesaan penduduk.",
  },
  {
    imageSrc:
      "/sampah.png",
    title: "Sampah",
    description:
      "Penduduk Tiara South sering membuang sampah bukan pada tempat yang ditetapkan sedangkan tong sampah sudah disediakan di setiap unit rumah. Malahan, terdapat jugak unit yang mengalihkan tong sampah mereka ke tempat kerja mereka untuk kegunaan sendiri.",
  }
];

function Berita() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const displayedItems = newsItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col bg-white">
      <main className="flex flex-col self-center px-5 mt-36 w-full max-w-[1300px] max-md:mt-10 max-md:max-w-full">
        <h1 className="self-center text-4xl font-extrabold text-center text-cyan-700 uppercase tracking-[6px] max-md:max-w-full">
          Berita Terkini
        </h1>
        <section className="flex flex-col mt-10 max-md:max-w-full">
          <div className="flex flex-col justify-center p-10 rounded-none bg-cyan-700 bg-opacity-10 max-md:px-5 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {displayedItems.map((item, index) => (
                  <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
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
      <footer className="justify-center items-center px-16 py-5 mt-36 w-full text-xl font-semibold leading-7 text-white uppercase bg-cyan-700 tracking-[2px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <span className="text-white">Hakcipta 2024 © TiaraSouth.com</span>
      </footer>
    </div>
  );
}

export default Berita;
