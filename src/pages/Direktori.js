import React from "react";
import { SolarCopyBold } from "../Icon/Icon";

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
  contacts: [
    { name: "Fatt Chan Gas", phone: "016-392-9696" }
  ],
};

const contactData_Acc = {
  title: "Accessories",
  contacts: [
    { name: "Eric Awning", phone: "018-265-4165" },
    { name: "Zawwaz Flooring", phone: "019-270-6867" }
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
              <button className="capitalize" onClick={()=>{
                alert("Anda menyalin No. Tel "+contact.name)
                copyPhoneNumber(contact.phone)
              }}>
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
          src="https://png.pngtree.com/background/20230424/original/pngtree-an-aerial-view-of-residential-buildings-with-green-roofs-picture-image_2462208.jpg"
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
      <footer className="justify-center items-center py-7 pr-16 pl-20 mt-32 w-full text-md font-semibold leading-7 text-white uppercase bg-cyan-700 tracking-[2px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <span className="text-white">Hakcipta 2024 © TiaraSouth.com</span>
      </footer>
    </div>
  );
}

export default Direktori;
