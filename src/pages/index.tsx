import { ChangeEvent, useEffect, useState } from "react";
import EvidenceField from "@/components/EvidenceField";
import GhostCard from "@/components/GhostCard";
import Ghost from "@/models/Ghost";
import ghostData from "@/data/ghosts.json";

export default function IndexPage() {
  const [state, setState] = useState<{ ghosts: Ghost[]; evidence: string[] }>({
    ghosts: [],
    evidence: [],
  });

  const evidence = [
    "D.O.T.S",
    "EMF 5",
    "Fingerprints",
    "Freezing Temperatures",
    "Ghost Orbs",
    "Ghost Writing",
    "Spirit Box",
  ];

  let ghosts: Array<Ghost> = ghostData.map((ghost) => {
    return new Ghost(
      ghost.name,
      ghost.huntThreshold,
      ghost.evidence,
      ghost.tips
    );
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      ghosts,
    }));
  }, []);

  function handleEvidenceToggle(event: ChangeEvent<HTMLInputElement>) {}

  return (
    <main className="container mx-auto grid gap-4 p-4">
      <fieldset className="flex flex-wrap border gap-4 p-4">
        <legend className="font-bold">Evidence</legend>
        {evidence.map((evidenceName) => (
          <EvidenceField
            key={evidenceName}
            name={evidenceName}
            onClick={handleEvidenceToggle}
          />
        ))}
      </fieldset>

      <div className="grid gap-4 grid-cols-ghosts">
        {state.ghosts.map((ghost) => (
          <GhostCard key={ghost.name} ghost={ghost} />
        ))}
      </div>
    </main>
  );
}
