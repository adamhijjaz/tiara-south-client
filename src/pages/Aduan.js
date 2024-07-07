import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
import { IconSpinner } from "../Icon/Icon";

const InputField = ({ label, id, value, onChange }) => (
  <div className="flex flex-col mt-10 max-md:max-w-full">
    <label htmlFor={id} className="py-2 text-left max-md:max-w-full">
      {label}
    </label>
    <input
      id={id}
      placeholder={label.toString()}
      className="px-4 py-2 mt-1 text-lg leading-6 capitalize border border-solid shrink-0 h-14 rounded-xl border-cyan-950 border-opacity-30 max-md:max-w-full"
      value={value}
      onChange={onChange}
      disabled={false}
    />
  </div>
);

function Aduan() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [complaint, setComplaint] = useState("");
  const { authState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://tiarasouth-iri7.onrender.com/complaints",
        {
          username: authState.username,
          subject: subject,
          aduan: complaint,
        }
      );
      if (response.status === 201) {
        alert("Aduan berjaya dihantar!");
        // Clear the form
        setName("");
        setSubject("");
        setComplaint("");
      }
    } catch (error) {
      console.error("Error submitting the complaint:", error);
      alert("Terdapat ralat semasa menghantar aduan anda. Sila cuba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <main className="flex flex-col self-center p-5 h-full w-full justify-center items-center">
        {loading && (
          <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-[120%] bg-gray-300 bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50">
            <div className="">
              <IconSpinner className="w-[30vh] animate-spin" />
              Sending Report...
            </div>
          </div>
        )}
        <h1 className="self-center text-4xl font-extrabold text-center text-cyan-700 uppercase tracking-[6px] max-md:max-w-full ">
          Ruang Aduan
        </h1>
        <section className="flex flex-col items-center justify-center p-10 mt-10 text-base border w-3/5 shadow-xl border-opacity-40 whitespace-nowrap border-cyan-600 bg-cyan-700 bg-opacity-10 text-cyan-950 max-md:px-5 max-md:max-w-full rounded-xl">
          <div className="flex w-3/4 text-wrap">
            <p className="text-red-500">*</p>
            Aduan anda akan diberi perhatian segera. Kami menghargai maklum
            balas anda dan berusaha untuk menyelesaikan setiap aduan dengan
            segera. Terima kasih kerana memberi peluang kepada kami untuk
            meningkatkan perkhidmatan kami.
          </div>
          <form
            className="flex flex-col mb-8 max-w-full w-[846px]"
            onSubmit={handleSubmit}
          >
            <InputField
              label="Name"
              id="name"
              value={authState.username}
              onChange={(e) => setName(authState.username)}
              className="cursor-not-allowed pointer-events-none"
              disabled={true}
            />
            <InputField
              label="Subjek"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <div className="flex flex-col mt-10">
              <label className="py-2 text-left max-md:max-w-full">
                Aduan (Maksimum: 250 huruf)
              </label>
              <textarea
                id="complaint"
                placeholder="Aduan berkenaan..."
                className="relative p-4 text-lg leading-6 border border-solid rounded-xl border-cyan-950 border-opacity-30"
                value={complaint}
                onChange={(e) => setComplaint(e.target.value)}
              ></textarea>
              <div className="w-full text-right right-4 text-sm">
                <span
                  className={
                    complaint.length > 250
                      ? "text-red-500 font-bold"
                      : "text-gray-500"
                  }
                >
                  {complaint.length}
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-1/2 p-4 font-bold mx-auto mt-8  text-white duration-500 rounded-lg hover:shadow-xl bg-slate-700 hover:bg-slate-950 text-md"
            >
              Hantar
            </button>
          </form>
        </section>
      </main>
      <footer className="justify-center items-center py-7 pr-16 pl-20 w-full text-md font-semibold leading-7 text-white uppercase bg-cyan-700 tracking-[2px] max-md:px-5  max-md:max-w-full">
        <span className="text-white">Hakcipta 2024 © TiaraSouth.com</span>
      </footer>
    </div>
  );
}

export default Aduan;
