import { useContext } from "react";
import { Icon } from "@iconify/react";
import AppContext from "@/context/AppContext";
import EvidenceStatusButton from "@/component/EvidenceStatusButton";

export default function IndexPage() {
  const { allGhosts, allEvidence, evidenceStatus, setEvidenceStatus } =
    useContext(AppContext);

  return (
    <main className="grid grid-cols-layout min-h-[100svh]">
      <aside className="bg-neutral-50 p-2 grid gap-2 content-start">
        <h2 className="font-bold text-lg uppercase">Evidence</h2>
        <hr />
        {allEvidence.map((evidence) => (
          <EvidenceStatusButton key={evidence.name} name={evidence.name} />
        ))}
      </aside>
      <div></div>
    </main>
  );
}
