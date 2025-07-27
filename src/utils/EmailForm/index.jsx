"use client";

import { useState } from "react";

export default function Index() {
  const send = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      number: formData.get("number"),
      message: formData.get("message"),
    };

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Nachricht erfolgreich gesendet!");
      form.reset();
    } else {
      alert("Fehler beim Senden der Nachricht.");
    }
  };

  const [focused, setFocused] = useState({
    name: false,
    lastname: false,
    email: false,
    message: false,
    company: false,
    subject: false,
    number: false,
  });

  const [agreed, setAgreed] = useState(false);

  return (
    <div className=" w-[95%]  mx-auto ">
      <div>
        <h2
          className="text-4xl font-oswald mx-auto text-center md:text-5xl lg:text-6xl xl:text-7xl md:mt-[5%]"
          id="contact"
        >
          Kontakt
        </h2>
        <p className="font-normal mt-4 mx-auto text-center text-sm max-w-[55ch]">
          Kontaktieren Sie uns, wenn Sie Hilfe benötigen oder Fragen zu
          Zahlungen oder Dienstleistungen haben, die wir Ihnen anbieten sollen.
        </p>
        <p className="text-xs font-bold tracking-tight mt-6">*Pflichtfelder</p>
      </div>
      <div className="grid grid-cols-1  hover:group:border-opacity-0 gap-8">
        <form
          onSubmit={send}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 md:mt-0"
        >
          <div className="md:col-start-1 md:col-end-2 text-xs text-black/70">
            Vorname*
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John"
              required
              className={`text-2xl w-full border-b-[1px] bg-transparent border-black hover:border-opacity-100  py-2 transition-all 
                        ${
                          focused.name
                            ? "border-opacity-100"
                            : "border-opacity-40"
                        }`}
              onFocus={() => setFocused({ ...focused, name: true })}
              onBlur={(e) =>
                setFocused({ ...focused, name: e.target.value !== "" })
              }
            />
          </div>
          <div className="md:col-start-2 text-xs text-black/70">
            Nachname*
            <input
              type="text"
              id="name"
              name="lastname"
              placeholder="Doe"
              required
              className={`text-2xl w-full border-b-[1px] bg-transparent border-black py-2 hover:border-opacity-100 transition-all 
                        ${
                          focused.lastname
                            ? "border-opacity-100"
                            : "border-opacity-40"
                        }`}
              onFocus={() => setFocused({ ...focused, lastname: true })}
              onBlur={(e) =>
                setFocused({ ...focused, lastname: e.target.value !== "" })
              }
            />
          </div>
          <div className="md:col-start-1 md:col-span-full text-xs text-black/70">
            E-Mail*
            <input
              type="email"
              id="name"
              name="email"
              placeholder="you@email.com"
              required
              className={`text-2xl w-full border-b-[1px] bg-transparent border-black py-2 hover:border-opacity-100 transition-all 
                        ${
                          focused.email
                            ? "border-opacity-100"
                            : "border-opacity-40"
                        }`}
              onFocus={() => setFocused({ ...focused, email: true })}
              onBlur={(e) =>
                setFocused({ ...focused, email: e.target.value !== "" })
              }
            />
          </div>

          <div className="md:col-start-1 md:col-end-2  text-xs text-black/70 overflow-hidden">
            Betreff
            <select
              id="subject"
              name="subject"
              className={`text-2xl w-full border-b-[1px] bg-transparent border-black py-2 hover:border-opacity-100 transition-all 
                        ${
                          focused.subject
                            ? "border-opacity-100"
                            : "border-opacity-40"
                        }`}
              onFocus={() => setFocused({ ...focused, subject: true })}
              onBlur={(e) =>
                setFocused({ ...focused, subject: e.target.value !== "" })
              }
            >
              <option value="" disabled defaultValue={"Ein Betreff auswählen"}>
                Ein Betreff auswählen
              </option>
              <option value="Physiotherapie">Physiotherapie</option>
              <option value="Manuelle Lymphdrainage (MLD)">
                Manuelle Lymphdrainage (MLD)
              </option>
              <option value="Manuelle Therapie">Manuelle Therapie</option>
              <option value="Neurologische Rehabilitation (Bobath-Therapie)">
                Neurologische Rehabilitation (Bobath-Therapie)
              </option>
              <option value="Pulmonale Physiotherapie (Atemtherapie)">
                Pulmonale Physiotherapie (Atemtherapie)
              </option>
              <option value="Schröpfen (Myofasziale Dekompressionstherapie)">
                Schröpfen (Myofasziale Dekompressionstherapie)
              </option>
              <option value="Medizinische Massagetherapie">
                Medizinische Massagetherapie
              </option>
              <option value="Hausbesuche – Professionelle Physiotherapie zu Hause">
                Hausbesuche – Professionelle Physiotherapie zu Hause
              </option>
            </select>
          </div>
          <div className="md:col-start-2 text-xs text-black/70">
            Telefon*
            <input
              type="text"
              id="name"
              name="number"
              placeholder="Telefonnummer"
              required
              className={`text-2xl w-full border-b-[1px] bg-transparent border-black py-2 hover:border-opacity-100 transition-all 
                        ${
                          focused.number
                            ? "border-opacity-100"
                            : "border-opacity-40"
                        }`}
              onFocus={() => setFocused({ ...focused, number: true })}
              onBlur={(e) =>
                setFocused({ ...focused, number: e.target.value !== "" })
              }
            />
          </div>

          <div className="md:col-start-1 md:col-span-full text-xs text-black/70">
            Nachricht*
            <textarea
              id="message"
              name="message"
              rows={1}
              required
              placeholder="Meine Nachricht..."
              className={`text-2xl w-full border-b-[1px] bg-transparent border-black py-2 hover:border-opacity-100 transition-all
    ${
      focused.message ? "border-opacity-100" : "border-opacity-40"
    } overflow-hidden resize-none`}
              onFocus={() => setFocused({ ...focused, message: true })}
              onBlur={(e) =>
                setFocused({ ...focused, message: e.target.value !== "" })
              }
              onInput={(e) => {
                const target = e.target;
                target.style.height = "auto"; // Reset height
                target.style.height = `${target.scrollHeight}px`; // Set height dynamically
              }}
            />
          </div>
          <div className="md:col-start-1 md:col-span-full text-xs text-black/70">
            <label>
              <input
                type="checkbox"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mr-2"
              />
              Ich stimme den{" "}
              <a href="/Datenschutz" target="_blank" className="underline">
                Datenschutzbestimmungen
              </a>{" "}
              und den{" "}
              <a href="/Datenschutz" target="_blank" className="underline">
                Nutzungsbedingungen
              </a>{" "}
              zu.
            </label>
          </div>
          <div className="mx-auto flex justify-center">
            <button
              type="submit"
              className="flex flex-row-reverse items-center gap-x-2 bg-c-green text-c-beige hover:bg-c-mid-green transition-colors px-4 py-2 rounded-md  w-fit  hover:text-c-light-green duration-300"
            >
              <div className="font-bold text-xs cursor-pointer">Meine Nachricht senden</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor" // Inherits color from parent
                width="18"
                height="18"
              >
                <path d="M6 3v10h8l-3 3 1.5 1.5L18 12l-5.5-5.5L11 8l3 3H8V3H6z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

