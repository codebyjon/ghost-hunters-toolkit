import AppContext, { Ghost } from "@/context/AppContext";
import { Icon } from "@iconify/react";

import { useState, useEffect, useContext } from "react";

type GhostCardGridProps = {};

export default function GhostCardGrid(props: GhostCardGridProps) {
  const { allGhosts, evidenceStatus, excludedGhosts, excludeGhost } =
    useContext(AppContext);
  const [state, setState] = useState<Ghost[]>([]);

  function getMatchingEvidence(status: string) {
    return Object.entries(evidenceStatus).reduce((prev: string[], curr) => {
      if (curr[1] !== status) return prev;

      return [...prev, curr[0]];
    }, []);
  }

  useEffect(() => {
    const includedEvidence = getMatchingEvidence("found");
    const excludedEvidence = getMatchingEvidence("excluded");

    setState(() =>
      allGhosts.filter(
        (ghost) =>
          ghost.checkEvidence(includedEvidence, excludedEvidence) &&
          !excludedGhosts.includes(ghost.name)
      )
    );
  }, [evidenceStatus, excludedGhosts]);

  return (
    <div className="grid gap-2 grid-cols-ghosts p-4 justify-start content-start">
      {state.map((ghost) => (
        <div className="grid gap-4 p-4 bg-neutral-100 rounded content-start ">
          <div className="flex justify-between">
            <p className="text-3xl font-bold">{ghost.name}</p>
            <button onClick={() => excludeGhost(ghost.name)}>
              <Icon icon="ic:baseline-close" className="w-6 h-6" />
            </button>
          </div>
          <div>
            <p className="font-bold">Hunt Threshold</p>
            <p className="text-xs">{ghost.huntThreshold}% Sanity</p>
          </div>
          <div>
            <p className="font-bold">Evidence</p>
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>{ghost.evidence[0]}</li>
              <li>{ghost.evidence[1]}</li>
              <li>{ghost.evidence[2]}</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Information</p>
            <ul className="grid gap-2">
              {ghost.tips?.map((tip) => (
                <li key={tip} className="bg-neutral-200 p-2 rounded text-xs">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
