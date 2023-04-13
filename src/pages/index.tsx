import { ChangeEvent, useEffect, useState } from "react";
import EvidenceField from "@/components/EvidenceField";
import GhostCard from "@/components/GhostCard";
import Ghost from "@/models/Ghost";
import ghostData from "@/data/ghosts.json";
import evidenceData from "@/data/evidence.json";

type AppState = {
  ghosts: Ghost[];
  gatheredEvidence: {
    [name: string]: boolean;
  };
};

let ghosts = ghostData.map((ghost) => {
  return new Ghost(ghost.name, ghost.huntThreshold, ghost.evidence, ghost.tips);
});

let gatheredEvidence = evidenceData.reduce((prev, curr) => {
  prev[curr.name] = false;
  return prev;
}, {} as AppState["gatheredEvidence"]);

export default function IndexPage() {
  const [state, setState] = useState<AppState>({
    ghosts: [],
    gatheredEvidence: {},
  });

  useEffect(() => {
    const currentEvidence = Object.entries(state.gatheredEvidence).filter(
      (evidence) => evidence[1]
    );

    if (currentEvidence.length !== 0) {
      const filteredGhosts = ghostData.filter((ghost) => {
        return currentEvidence.every((ce) => ghost.evidence.includes(ce[0]));
      });

      return setState((prevState) => ({
        ...prevState,
        ghosts: filteredGhosts,
      }));
    }

    setState(() => ({
      ghosts,
      gatheredEvidence,
    }));
  }, [state.gatheredEvidence]);

  function handleEvidenceToggle(event: ChangeEvent<HTMLInputElement>) {
    const targetEvidence = event.currentTarget.id;
    const targetStatus = event.currentTarget.checked;

    setState((prevState) => ({
      ...prevState,
      gatheredEvidence: {
        ...prevState.gatheredEvidence,
        [targetEvidence]: targetStatus,
      },
    }));
  }

  return (
    <main className="container mx-auto grid gap-4 p-4">
      <h1 className="text-neutral-400 text-xl">VERSION 1 | WORK IN PROGRESS</h1>
      <hr />
      <p className="text-xs">
        Thank you for using my app! I hope it helps the game feel more enjoyable
        and provides that little bit of extra knowledge to identify the ghost
        that much easier.
      </p>
      <p className="text-xs">
        If you find any bugs/misinformation or want to provide any
        feedback/ideas, please visit{" "}
        <a
          target="_blank"
          href="https://discord.gg/TapgjEKDC8"
          className="text-blue-400"
        >
          my Discord server
        </a>
        !
      </p>

      <hr />

      <fieldset className="flex flex-wrap border gap-4 p-4">
        <legend className="font-bold">Evidence</legend>
        {evidenceData.map((evidence) => (
          <EvidenceField
            key={evidence.name}
            name={evidence.name}
            onChange={handleEvidenceToggle}
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
