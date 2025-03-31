import Accordion from "../../utils/Accordion/index.jsx";
export default function index() {
  return (
    <div>
      <div className="mx-auto text-4xl font-oswald mt-12 mb-6 text-center font-semibold text-c-mid-green">
        Häufig gestellte Fragen
      </div>
      <div className="flex justify-between flex-col items-center gap-1">
        <Accordion
          content={
            "Ja, in Deutschland ist für physiotherapeutische Behandlungen in der Regel eine ärztliche Verordnung erforderlich. Private Leistungen können jedoch oft auch ohne Rezept in Anspruch genommen werden"
          }
          title={"Brauche ich eine ärztliche Verordnung für Physiotherapie?"}
        />
        <Accordion
          content={
            "Eine Sitzung dauert in der Regel zwischen 20 und 60 Minuten, abhängig von der Behandlung und der ärztlichen Verordnung."
          }
          title={"Wie lange dauert eine Physiotherapie-Sitzung?"}
        />
        <Accordion
          content={
            "Ja, gesetzliche Krankenkassen übernehmen die Kosten für verordnete Physiotherapie. Es kann jedoch eine Zuzahlung erforderlich sein. Private Versicherungen haben individuelle Regelungen."
          }
          title={"Wird Physiotherapie von der Krankenkasse übernommen?"}
        />
        <Accordion
          content={
            "Die Häufigkeit hängt von Ihrer Diagnose und dem individuellen Therapieplan ab. Ihr Therapeut wird Ihnen eine Empfehlung geben."
          }
          title={"Wie oft sollte ich zur Physiotherapie kommen?"}
        />
      </div>
    </div>
  );
}
