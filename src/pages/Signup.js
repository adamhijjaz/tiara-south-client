import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signup = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Check if any of the fields are empty
    if (!email || !password || !username) {
      alert("Please fill out all the fields.");
      return; // Exit the function early if any field is empty
    }

    const data = {
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/auth/signup",
        data
      );

      if (response.data.error) {
        alert("Error logging in: " + response.data.error);
      } else {
        alert(
          "Anda telah berjaya mendaftar. tekan OK untuk ke Halaman Log Masuk"
        );
        navigate("/Login");
      }
    } catch (error) {
      alert("Maklumat telah dihantar ke pangkalan data.");
      console.error("Error in Signing in: ", error);
    }
  };

  return (
    <main className="flex flex-col pt-4 pb-20 pl-4 pr-20 grow max-md:pr-5 max-md:max-w-full">
      <section className="flex flex-col justify-end self-center mt-6 max-w-full w-[665px]">
        <div className="flex flex-col max-w-full w-[386px] mx-auto">
          <h1 className="text-3xl font-medium text-zinc-800">
            Welcome to Tiara South{" "}
          </h1>
        </div>
        <form>
          <div className="flex flex-col mt-8 text-base text-left whitespace-nowrap text-stone-500 max-md:max-w-full">
            <label
              htmlFor="username"
              className="justify-center py-2 max-md:max-w-full"
            >
              Nama Pengguna
            </label>
            <input
              type="text"
              placeholder="Nama"
              id="username"
              onChange={(event) => setUsername(event.target.value)}
              className="p-2 mt-1 border border-solid shrink-0 h-14 rounded-xl border-stone-500 border-opacity-30 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col mt-8 text-base text-left whitespace-nowrap text-stone-500 max-md:max-w-full">
            <label
              htmlFor="email"
              className="justify-center py-2 max-md:max-w-full"
            >
              Alamat Emel
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              className="p-2 mt-1 border border-solid shrink-0 h-14 rounded-xl border-stone-500 border-opacity-30 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col mt-8 max-md:max-w-full">
            <div className="flex flex-col whitespace-nowrap">
              <div className="flex gap-5 py-0.5 pr-2.5 max-md:flex-wrap justify-between">
                <div htmlFor="password" className="text-base text-stone-500">
                  Kata Laluan Anda
                </div>
                <button className="flex gap-3 text-lg text-right text-stone-500 text-opacity-80">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5140d1751deadb6ffe6ce71941c3fdb5f2023605350f9ec7903c30d5418e27aa?apiKey=03f5df226c30468fbf8fdf985b85fe26&"
                    alt=""
                    className="w-6 shrink-0 aspect-square"
                  />
                  <span>Hide</span>
                </button>
              </div>
              <input
                type="password"
                id="password"
                placeholder="kata laluan"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="p-2 mt-1 border border-solid shrink-0 h-14 rounded-xl border-stone-500 border-opacity-30 max-md:max-w-full"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center w-64 max-w-full mx-auto my-6 text-xl font-medium text-center text-white gap-y-8">
            <button
              onClick={signup}
              className="flex flex-col justify-center px-8 py-4 bg-slate-700 rounded-[16px] max-md:px-5 hover:bg-slate-950 transition-colors duration-500"
            >
              <span className="w-full text-center text-nowrap">
                Create an account
              </span>
            </button>
            <p className="justify-center p-0.5 text-base underline text-neutral-900">
              <span className="text-zinc-800">Sudah berdaftar?</span>{" "}
              <Link to="/Login" className="text-neutral-900">
                Log Masuk
              </Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Signup;
