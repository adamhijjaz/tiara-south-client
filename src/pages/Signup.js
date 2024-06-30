import * as React from "react";

const InputField = ({ label, type = "text" }) => (
  <div className="flex flex-col mt-8 text-base whitespace-nowrap text-stone-500 max-md:max-w-full">
    <label htmlFor={label.toLowerCase()} className="justify-center py-2 max-md:max-w-full">
      {label}
    </label>
    <input
      type={type}
      id={label.toLowerCase()}
      className="shrink-0 mt-1 h-14 rounded-xl border border-solid border-stone-500 border-opacity-30 max-md:max-w-full"
    />
  </div>
);

const PasswordRequirement = ({ text }) => (
  <div className="flex gap-2 justify-center py-2">
    <div className="shrink-0 my-auto w-2 h-2 rounded-full bg-stone-500 bg-opacity-60" />
    <div>{text}</div>
  </div>
);

function MyComponent() {
  const passwordRequirements = [
    "Use 8 or more characters",
    "One special character",
    "One Uppercase character",
    "One number",
    "One lowercase character"
  ];

  return (
    <main className="flex flex-col grow pt-4 pr-20 pb-20 pl-4 max-md:pr-5 max-md:max-w-full">
      <header className="flex justify-center items-center w-[50px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3be0cf0cc439d7f3e137cba276074492f1d6a29d7859629136bbc029f4e1940c?apiKey=03f5df226c30468fbf8fdf985b85fe26&" alt="" className="w-full aspect-square" />
      </header>
      <section className="flex flex-col justify-end self-center mt-6 max-w-full w-[665px]">
        <div className="flex flex-col max-w-full w-[386px]">
          <h1 className="text-3xl font-medium text-zinc-800">
            Welcome to Tiara South{" "}
          </h1>
          <p className="justify-center p-0.5 text-base underline text-neutral-900">
            <span className="text-zinc-800">Already have an account?</span>{" "}
            <a href="Login" className="text-neutral-900">Log in</a>
          </p>
        </div>
        <form>
          <InputField label="Email" type="email" />
          <InputField label="Username" />
          <div className="flex flex-col mt-8 max-md:max-w-full">
            <div className="flex flex-col whitespace-nowrap max-md:max-w-full">
              <div className="flex gap-5 py-0.5 pr-2.5 w-full max-md:flex-wrap max-md:max-w-full">
                <label htmlFor="password" className="text-base text-stone-500">Password</label>
                <div className="flex flex-1 gap-3 text-lg text-right text-stone-500 text-opacity-80">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5140d1751deadb6ffe6ce71941c3fdb5f2023605350f9ec7903c30d5418e27aa?apiKey=03f5df226c30468fbf8fdf985b85fe26&" alt="" className="shrink-0 w-6 aspect-square" />
                  <span>Hide</span>
                </div>
              </div>
              <input
                type="password"
                id="password"
                className="shrink-0 mt-1 h-14 rounded-xl border border-solid border-stone-500 border-opacity-30 max-md:max-w-full"
              />
            </div>
            <div className="flex gap-5 pr-5 text-sm text-stone-500 text-opacity-60 max-md:flex-wrap">
              <div className="flex flex-col">
                {passwordRequirements.slice(0, 2).map((req, index) => (
                  <PasswordRequirement key={index} text={req} />
                ))}
              </div>
              <div className="flex flex-col">
                {passwordRequirements.slice(2, 4).map((req, index) => (
                  <PasswordRequirement key={index + 2} text={req} />
                ))}
              </div>
              <div className="flex flex-col justify-center self-start">
                <PasswordRequirement text={passwordRequirements[4]} />
              </div>
            </div>
          </div>
          <div className="flex gap-2 py-2 mt-8 mr-6 text-base text-zinc-800 max-md:flex-wrap max-md:mr-2.5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6af9ba2e9a556fb9033ac5910fa81aa425460672feeedbf3193252226446dcda?apiKey=03f5df226c30468fbf8fdf985b85fe26&" alt="" className="shrink-0 self-start w-6 aspect-square" />
            <p className="max-md:max-w-full">
              I want to receive emails about the product, feature updates, events, and marketing promotions.
            </p>
          </div>
          <p className="justify-center py-2 mt-8 text-base underline text-neutral-900 max-md:max-w-full">
            <span className="text-zinc-800">
              By creating an account, you agree to the{" "}
            </span>
            <a href="#" className="underline text-neutral-900">Terms of use</a>{" "}
            <span className="text-zinc-800">and</span>{" "}
            <a href="#" className="underline text-neutral-900">Privacy Policy.</a>{" "}
          </p>
          <button className="flex flex-col justify-center mt-8 w-64 max-w-full text-2xl font-medium text-center text-white">
            <div className="flex flex-col justify-center px-6 py-4 bg-neutral-900 rounded-[32px] max-md:px-5">
              <span className="justify-center">Create an account</span>
            </div>
          </button>
        </form>
      </section>
    </main>
  );
}

export default MyComponent;