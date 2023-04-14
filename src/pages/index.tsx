import type { ChangeEvent } from "react";

import { useContext, useEffect } from "react";
import Head from "next/head";
import AppContext from "@/context/AppContext";
import EvidenceField from "@/components/EvidenceField";
import GhostCard from "@/components/GhostCard";

export default function IndexPage() {
  const { appData, setAppData } = useContext(AppContext);

  const filterGhosts = () => {
    const gatheredEvidence = Object.entries(appData.evidence)
      .filter((evidence) => evidence[1] === 1)
      .map((evidence) => evidence[0]);

    const excludedEvidence = Object.entries(appData.evidence)
      .filter((evidence) => evidence[1] === 2)
      .map((evidence) => evidence[0]);

    const filteredGhosts = appData.ghosts.filter((ghost) => {
      const hasAllGathered = gatheredEvidence.every((ge) =>
        ghost.evidence.includes(ge)
      );
      const hasNoExcluded = excludedEvidence.every(
        (ee) => !ghost.evidence.includes(ee)
      );

      if (hasAllGathered && hasNoExcluded) return true;
    });

    setAppData((prevState) => ({
      ...prevState,
      filteredGhosts,
    }));
  };

  useEffect(() => {
    filterGhosts();
  }, [appData.evidence]);

  function handleEvidenceToggle(event: ChangeEvent<HTMLInputElement>) {
    const targetEvidence = event.currentTarget;
    let nextStep: number;

    if (appData.evidence[targetEvidence.id] < 2) {
      nextStep = appData.evidence[targetEvidence.id] + 1;
    } else {
      nextStep = 0;
    }

    if (nextStep === 2) {
      targetEvidence.indeterminate = true;
    }

    setAppData((prevState) => ({
      ...prevState,
      evidence: {
        ...prevState.evidence,
        [targetEvidence.id]: nextStep,
      },
    }));
  }

  return (
    <main className="container mx-auto grid gap-4 p-4">
      <Head>
        <title>Ghost Hunter&apos;s Toolkit</title>
      </Head>
      <h1 className="text-neutral-400 text-xl">
        VERSION 1.01 | WORK IN PROGRESS
      </h1>
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
      <p className="text-xs font-medium text-emerald-600">
        UPDATE: Added the ability to exclude evidence.
      </p>

      <hr />

      <fieldset className="flex flex-wrap border gap-4 p-4 select-none">
        <legend className="font-bold">Evidence</legend>
        {Object.keys(appData.evidence).map((evidence) => (
          <EvidenceField
            key={evidence}
            name={evidence}
            onChange={handleEvidenceToggle}
          />
        ))}
      </fieldset>

      <div className="grid gap-4 grid-cols-ghosts">
        {appData.filteredGhosts.map((ghost) => (
          <GhostCard key={ghost.name} ghost={ghost} />
        ))}
      </div>
    </main>
  );
}
