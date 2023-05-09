import { useContext } from "react";
import { Icon } from "@iconify/react";
import AppContext from "@/context/AppContext";
import EvidenceStatusButton from "@/components/EvidenceStatusButton";
import GhostCardGrid from "@/components/GhostCardGrid";

export default function IndexPage() {
  const { allEvidence, evidenceStatus, resetEvidenceStatus } =
    useContext(AppContext);

  return (
    <main className="grid grid-cols-layout min-h-[100svh]">
      <aside className="bg-neutral-50 p-2 grid content-start">
        <h2 className="font-bold text-lg uppercase">Evidence</h2>
        <hr />
        <button
          onClick={resetEvidenceStatus}
          className="bg-red-500/90 hover:bg-red-500/100 active:bg-red-600 p-2 rounded text-white uppercase font-bold mb-4"
        >
          Reset Evidence
        </button>
        <hr />
        {allEvidence.map((evidence) => (
          <EvidenceStatusButton key={evidence.name} name={evidence.name} />
        ))}
      </aside>
      <GhostCardGrid />
    </main>
  );
}
