import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext); // Ensure correct destructuring
  const navigate = useNavigate();

  const login = async () => {
    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://tiarasouth.onrender.com/auth/login",
        data
      );

      if (!response.data.error) {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          username: response.data.username,
          email: response.data.email,
          id: response.data.id,
          status: true,
        });
        alert("Log Masuk berjaya! " + response.data.username);
        navigate("/");
      } else {
        alert("Log Masuk tidak berjaya: " + response.data.error);
      }
    } catch (error) {
      alert("Error during login process. Please try again.");
      console.error("Error in Signing in:", error);
    }
  };

  const checkfield = () => {
    if (!email || !password) {
      alert("Sila Isi Emel dan kata laluan anda");
    } else {
      login();
    }
  };

  return (
    <div className="bg-white">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden relative flex-col grow justify-center items-start px-16 py-20 text-white min-h-[1024px] max-md:px-5 max-md:max-w-full">
            <div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a83fc3c3437dc64386f6a66f2be529f0c6ddccdda9ad672adfd73b556004c07?apiKey=03f5df226c30468fbf8fdf985b85fe26&"
                alt=""
                className="absolute inset-0 object-cover size-full"
              />
            </div>

            <div className="flex relative flex-col justify-center mt-24 ml-3 max-w-full w-[482px] max-md:mt-10">
              <div className="flex">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3be0cf0cc439d7f3e137cba276074492f1d6a29d7859629136bbc029f4e1940c?apiKey=03f5df226c30468fbf8fdf985b85fe26&"
                  alt=""
                  className="aspect-square h-[52px] w-[52px] bg-fix my-auto"
                />
                <div className=" text-6xl font-semibold text-center leading-[63.84px] w-full max-md:text-4xl my-auto">
                  Tiara South
                </div>
              </div>
              <p className="mt-4 text-2xl max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                lobortis maximus nunc, ac rhoncus odio congue quis. Sed ac
                semper orci, eu porttitor lacus.
              </p>
            </div>
          </div>
        </section>
        <main className="flex flex-col w-6/12 ml-5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center px-16 py-20 grow max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col mx-4 mt-52 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              <h2 className="text-3xl font-medium text-left text-zinc-800 max-md:text-center max-md:max-w-full">
                Log Masuk
              </h2>
              <form
                className="flex flex-col p-2 mt-12 max-md:mt-10 max-md:max-w-full"
                onSubmit={(e) => {
                  e.preventDefault();
                  checkfield();
                }}
              >
                <div className="flex flex-col text-base text-stone-500 max-md:max-w-full">
                  <label
                    htmlFor="email"
                    className="justify-center py-2 text-left max-md:max-w-full"
                  >
                    Alamat e-mel
                  </label>
                  <input
                    placeholder="example@gmail.com"
                    type="email"
                    id="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    className="p-2 mt-1 border border-solid shrink-0 h-14 rounded-xl border-stone-500 border-opacity-30 max-md:max-w-full"
                  />
                </div>
                <div className="flex flex-col mt-5 max-md:max-w-full">
                  <div className="flex flex-col max-md:max-w-full">
                    <div className="flex gap-5 py-0.5 pr-2.5 w-full max-md:flex-wrap max-md:max-w-full">
                      <label
                        htmlFor="password"
                        className="flex-auto my-auto text-base text-left text-stone-500"
                      >
                        Kata Laluan Anda
                      </label>
                      <button
                        type="button"
                        className="flex gap-3 text-lg text-right whitespace-nowrap text-stone-500 text-opacity-80"
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5140d1751deadb6ffe6ce71941c3fdb5f2023605350f9ec7903c30d5418e27aa?apiKey=03f5df226c30468fbf8fdf985b85fe26&"
                          alt=""
                          className="w-6 my-auto shrink-0 aspect-square"
                        />
                        <span>Sembunyi</span>
                      </button>
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Kata Laluan"
                      className="p-2 mt-1 border border-solid shrink-0 h-14 rounded-xl border-stone-500 border-opacity-30 max-md:max-w-full"
                      onInput={(event) => {
                        setPassword(event.target.value);
                        console.log(event.target.value);
                      }}
                    />
                  </div>
                  <Link
                    onClick={() => {
                      alert(
                        "No Implementation, If you forget Please Login or Register Again"
                      );
                    }}
                    className="self-end mt-2 text-base text-right underline text-neutral-900"
                  >
                    Lupa Kata Laluan
                  </Link>
                </div>
                <div className="flex flex-col justify-center items-center mt-5 max-w-full w-[304px]">
                  <div className="w-full">
                    <button
                      type="submit"
                      className="flex justify-center items-center px-16 py-4 text-xl text-center text-white bg-slate-700 rounded-[16px] max-md:px-5 w-full hover:bg-slate-950 transition-colors duration-700"
                    >
                      Log Masuk
                    </button>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-center p-0.5 mt-2 text-base underline text-neutral-900">
                      <p className="underline text-zinc-800">
                        Tidak mempunyai akaun?,
                      </p>
                      <Link
                        to="/Signup"
                        onClick={() => {
                          console.log("Clicked Sign Up");
                        }}
                        className=" text-neutral-900"
                      >
                        {" "}
                        Daftar Masuk
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;
