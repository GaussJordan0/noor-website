import React from "react";

 export default function Impressum() {
  return (
    <main className="max-w-3xl mx-auto p-6 mb-[40px]">
      <img src="/logo.svg" className="w-[100px] h-[100px] mb-5" alt="" />
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
        <p>Therapiezentrum SAM</p>
        <p>Westfälische Str. 72</p>
        <p>10709 Berlin</p>
        <p>Telefon 1: 030 44010654</p>
        <p>Telefon 2: 030 44013538</p>
        <p>Fax: 030 43744613</p>
        <p>E-Mail: info@sam-physio.de</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Vertreten durch</h2>
        <p>Geschäftsführer: Sameh Elbehouti</p>
      </section>

      {/* <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Handelsregister & Umsatzsteuer-ID</h2>
        <p>HRB bei AG [City]: HRB-XXXXX</p> 
        <p>USt-ID: DEXXXXXXXXX</p> 
      </section> */}

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Kontakt Datenschutzbeauftragter</h2>
        <p>Verantwortliche Person: Sameh Elbehouti</p>
        <p>E-Mail: info@sam-physio.de</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Haftungsausschluss</h2>
        <p className="mb-4">
          Trotz sorgfältiger inhaltlicher Kontrolle übernimmt Therapiezentrum SAM keine Haftung für die Inhalte externer Links.
          Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Hiermit distanzieren
          wir uns ausdrücklich von allen Inhalten aller gelinkten Seiten auf unserer Homepage und machen uns diese Inhalte
          nicht zu eigen. Des Weiteren übernimmt Therapiezentrum SAM keinerlei Gewähr darüber, dass die Aktualität, Richtigkeit,
          Vollständigkeit oder Qualität der bereitgestellten Inhalte auf der Website zu jeder Zeit gegeben ist. Therapiezentrum SAM
          ist insbesondere in keiner Art verpflichtet, veraltete Informationen oder Meinungen zu aktualisieren, von der
          eigenen Website zu entfernen oder entsprechend zu kennzeichnen. Die auf der Website enthaltenen Informationen
          können jederzeit ohne Ankündigung geändert werden.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Streitbeilegung</h2>
        <p>
            Wir sind weder verpflichtet noch bereit, an Streitbeteiligungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen. Aufgrund der kooperativen Zusammenarbeit mit unseren Vertragspartnern kommt es nur in sehr seltenen
            Fällen zu Unstimmigkeiten, die im Rahmen unseres effektiven Kundenmanagements bearbeitet werden.
        </p>
      </section>
    </main>
  );
};


