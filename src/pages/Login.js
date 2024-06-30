import React from 'react';

const InputField = ({ label, type = "text", id }) => (
  <div className="flex flex-col text-base text-stone-500 max-md:max-w-full">
    <label htmlFor={id} className="justify-center py-2 text-left max-md:max-w-full">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="shrink-0 mt-1 h-14 rounded-xl border border-solid border-stone-500 border-opacity-30 max-md:max-w-full"
    />
  </div>
);

const SignInButton = () => (
  <button className="flex justify-center items-center px-16 py-4 text-xl text-center text-white bg-neutral-900 rounded-[32px] max-md:px-5 w-full">
    Sign in
  </button>
);

function Login() {
  return (
    <div className="bg-white">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden relative flex-col grow justify-center items-start px-16 py-20 text-white min-h-[1024px] max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a83fc3c3437dc64386f6a66f2be529f0c6ddccdda9ad672adfd73b556004c07?apiKey=03f5df226c30468fbf8fdf985b85fe26&"
              alt=""
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col justify-center mt-24 ml-3 max-w-full w-[482px] max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3be0cf0cc439d7f3e137cba276074492f1d6a29d7859629136bbc029f4e1940c?apiKey=03f5df226c30468fbf8fdf985b85fe26&"
                alt=""
                className="aspect-square w-[50px]"
              />
              <h1 className="mt-4 text-6xl font-semibold text-center leading-[63.84px] max-md:max-w-full max-md:text-4xl">
                Tiara South
              </h1>
              <p className="mt-4 text-2xl max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                lobortis maximus nunc, ac rhoncus odio congue quis. Sed ac
                semper orci, eu porttitor lacus.
              </p>
            </div>
          </div>
        </section>
        <main className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center px-16 py-20 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col mx-4 mt-52 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              <h2 className="text-3xl font-medium text-zinc-800 text-left max-md:text-center max-md:max-w-full">
                Sign in
              </h2>
              <form className="flex flex-col mt-12 max-md:mt-10 max-md:max-w-full">
                <InputField
                  label="User name or email address"
                  id="username"
                  type="text"
                />
                <div className="flex flex-col mt-5 max-md:max-w-full">
                  <div className="flex flex-col max-md:max-w-full">
                    <div className="flex gap-5 py-0.5 pr-2.5 w-full max-md:flex-wrap max-md:max-w-full">
                      <label
                        htmlFor="password"
                        className="flex-auto my-auto text-base text-stone-500 text-left"
                      >
                        Your password
                      </label>
                      <div className="flex gap-3 text-lg text-right whitespace-nowrap text-stone-500 text-opacity-80">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5140d1751deadb6ffe6ce71941c3fdb5f2023605350f9ec7903c30d5418e27aa?apiKey=03f5df226c30468fbf8fdf985b85fe26&"
                          alt=""
                          className="shrink-0 w-6 aspect-square"
                        />
                        <span>Hide</span>
                      </div>
                    </div>
                    <input
                      type="password"
                      id="password"
                      className="shrink-0 mt-1 h-14 rounded-xl border border-solid border-stone-500 border-opacity-30 max-md:max-w-full"
                    />
                  </div>
                  <a
                    href="#"
                    className="self-end mt-2 text-base text-right underline text-neutral-900"
                  >
                    Forget your password
                  </a>
                </div>
                <div className="flex flex-col mt-5 max-w-full w-[304px]">
                  <SignInButton />
                  <p className="justify-center p-0.5 mt-2 text-base underline text-neutral-900">
                    <span className="text-zinc-800">
                      Don't have an account?{" "}
                    </span>
                    <a href="Signup" className="text-neutral-900">
                      Sign up
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Login;
