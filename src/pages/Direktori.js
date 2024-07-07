import React from "react";
import { SolarCopyBold } from "../Icon/Icon";
import { Link } from "react-router-dom";
import { IconProfile } from "../Icon/Icon";
import { MdiEmail } from "../Icon/Icon";

function copyPhoneNumber(phoneNumber) {
  navigator.clipboard
    .writeText(phoneNumber)
    .then(() => {
      console.log("Phone number copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy phone number: ", err);
    });
}

const contact_us = {
  imageSrc: "/map.png",
  detail: [
    {
      address:
        "Persatuan Penduduk Tiara South, \n 43500 Semenyih, \n Selangor.",
    },
    { name: "Izwan bin Syahrul", email1: "izwan@gmail.com" },
    { name: "Mokhtar bin Abdullah", email2: "mokhtar@gmail.com" },
  ],
  goto: "https://www.google.com/maps/place/Tiara+South/@2.9293015,101.8426264,15z/data=!4m6!3m5!1s0x31cdce5f321901d9:0x7284d4f9fd8cb835!8m2!3d2.9293015!4d101.8426264!16s%2Fg%2F11b6nlnpnc?entry=ttu",
};

const contactData_Elec = {
  title: "Electrical",
  contacts: [
    { name: "Boon Electrical", phone: "019-236-1626" },
    { name: "Lorry Khoo", phone: "019-618-6688" },
    { name: "Eric Awning", phone: "018-265-4165" },
    { name: "Zawwaz Flooring", phone: "019-270-6867" },
  ],
};

const contactData_Gas = {
  title: "Gas",
  contacts: [{ name: "Fatt Chan Gas", phone: "016-392-9696" }],
};

const contactData_Acc = {
  title: "Accessories",
  contacts: [
    { name: "Eric Awning", phone: "018-265-4165" },
    { name: "Zawwaz Flooring", phone: "019-270-6867" },
  ],
};

// ContactTable component
const ContactTable = ({ title, contacts }) => {
  return (
    <div className="text-white">
      <div className="w-full bg-cyan-600 py-4">
        <h2 className="self-center text-2xl font-extrabold uppercase tracking-[3.6px] max-md:max-w-full">
          {title}
        </h2>
      </div>
      <table className="w-full text-center mt-2">
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <button
                className="capitalize"
                onClick={() => {
                  alert("Anda menyalin No. Tel " + contact.name);
                  copyPhoneNumber(contact.phone);
                }}
              >
                <SolarCopyBold></SolarCopyBold>
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function Direktori() {
  return (
    <div className="flex flex-col bg-white">
      <section className="flex overflow-hidden relative flex-col justify-center items-center px-16 pt-16 pb-24 w-full text-8xl font-bold text-center text-white backdrop-blur-[2px] min-h-[322px] tracking-[8px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <img
          loading="lazy"
          src="https://media.graphassets.com/resize=fit:crop,width:1280,height:660/9qiBGM97SZinM5O3ENvv"
          alt=""
          className="absolute z-[-2] inset-0 object-cover size-full"
        />
        DIREKTORI SERVIS
      </section>
      <section className="flex flex-col w-full pb-10 text-center bg-cyan-700 max-md:max-w-full">
        <div className="flex items-center justify-center w-full px-16 py-12 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[1000px] max-md:max-w-full">
            <ContactTable
              title={contactData_Elec.title}
              contacts={contactData_Elec.contacts}
            />
            <div className="border-[1px] border-cyan-500 w-full mb-2" />
            <ContactTable
              title={contactData_Gas.title}
              contacts={contactData_Gas.contacts}
            />
            <div className="border-[1px] border-cyan-500 w-full mb-2" />

            <ContactTable
              title={contactData_Acc.title}
              contacts={contactData_Acc.contacts}
            />
            <div className="border-[1px] border-cyan-500 w-full mb-2" />

            <div className="flex flex-col self-center justify-center w-48 max-w-full mt-10 text-lg font-semibold text-cyan-700">
              <div className="items-center justify-center px-8 py-1 shadow-sm rounded-xl bg-slate-100 bg-opacity-40 max-md:px-5"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full pb-10 text-center bg-cyan-700 max-md:max-w-full ">
        <h1 className="self-center text-2xl font-extrabold uppercase  tracking-[3.6px] max-md:max-w-full text-white my-4">
          Hubungi Kami
        </h1>
        <div className="w-full h-full mt-8 ">
          <div className="flex justify-center gap-x-8 w-full">
            <Link
              to={contact_us.goto}
              target="_blank"
              rel="noopener noreferrer"
              className=" w-1/2 flex items-center justify-end gap-x-2 "
            >
              <img
                className="rounded-xl w-3/5 duration-1000 hover:scale-105 hover:shadow-lg transition-transform"
                src={contact_us.imageSrc}
              ></img>
            </Link>
            <div className="flex flex-col  w-2/5 text-white">
              {contact_us.detail.map((item, index) => (
                <div key={index} className="mt-2 text-left">
                  {item.address && (
                    <div className=" ">
                      <div className="font-bold">Alamat :</div>

                      {item.address.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </div>
                  )}
                  {item.email1 && (
                    <div className="mt-2">
                      <div className="font-bold">Yang Dipertua :</div>

                      <div className="flex ">
                        <IconProfile></IconProfile> : {item.name}
                      </div>
                      <div className="flex">
                        <MdiEmail></MdiEmail> : {item.email1}
                      </div>
                    </div>
                  )}
                  {item.email2 && (
                    <div className="mt-2">
                      <div className="font-bold">Setiausaha :</div>

                      <div className="flex ">
                        <IconProfile></IconProfile> : {item.name}
                      </div>
                      <div className="flex">
                        <MdiEmail></MdiEmail> : {item.email2}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-col justify-center items-center text-white"></div>
        </div>
      </section>
      <footer className="justify-center items-center py-7 pr-16 pl-20 mt-32 w-full text-md font-semibold leading-7 text-white uppercase bg-cyan-700 tracking-[2px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <span className="text-white">Hakcipta 2024 © TiaraSouth.com</span>
      </footer>
    </div>
  );
}

export default Direktori;
