import { useContext } from "react";
import { Icon } from "@iconify/react";
import AppContext from "@/context/AppContext";
import EvidenceStatusButton from "@/components/EvidenceStatusButton";

type SideNavProps = {};

export default function SideNav(props: SideNavProps) {
  const {
    allEvidence,
    excludedGhosts,
    resetEvidenceStatus,
    clearGhostExclusions,
    removeGhostFromExclusions,
  } = useContext(AppContext);

  return (
    <aside className="bg-neutral-50 p-4 grid content-start gap-4">
      <div className="grid gap-2 border-b pb-2">
        <h2 className="text-lg uppercase font-medium">
          Ghost Hunters' Toolkit
        </h2>
        <p>Version 1.03</p>
        <p className="max-w-[28ch] text-sm">
          Found a bug or have an idea? Visit my Github or Discord server!
        </p>
        <div className="grid grid-flow-col gap-2 justify-start">
          <a href="https://github.com/codebyjon/ghost-hunters-toolkit">
            <Icon icon="carbon:logo-github" className="h-8 w-8" />
          </a>
          <a href="https://discord.gg/9M54RkjG3B">
            <Icon icon="carbon:logo-discord" className="h-8 w-8" />
          </a>
        </div>
      </div>
      <div>
        <h2 className="font-medium text-lg uppercase mb-2">Evidence</h2>
        <button
          onClick={resetEvidenceStatus}
          className="bg-red-400/80 hover:bg-red-400/90 active:bg-red-400 py-1 p-2 rounded text-white text-sm uppercase font-medium mb-4"
        >
          Reset Evidence
        </button>
        <hr />
        {allEvidence.map((evidence) => (
          <EvidenceStatusButton key={evidence.name} name={evidence.name} />
        ))}
      </div>
      <div>
        <h2 className="font-medium text-lg uppercase mb-2">Excluded Ghosts</h2>
        <button
          onClick={clearGhostExclusions}
          className="bg-red-400/80 hover:bg-red-400/90 active:bg-red-400 py-1 p-2 rounded text-white text-sm whitespace-nowrap uppercase font-medium mb-4"
        >
          Clear Exclusions
        </button>
        <div className="grid gap-2">
          {excludedGhosts.length ? (
            excludedGhosts.map((ghost) => (
              <button
                key={ghost}
                onClick={() => removeGhostFromExclusions(ghost)}
                className="w-full grid grid-flow-col gap-2 items-center justify-start"
              >
                <Icon
                  icon="ic:baseline-close"
                  className="w-6 h-6 text-red-500"
                />
                <span className="uppercase font-medium text-sm">{ghost}</span>
              </button>
            ))
          ) : (
            <button className="w-full grid grid-flow-col gap-2 items-center justify-start">
              <span className="uppercase font-medium text-sm">
                No Exclusions
              </span>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
