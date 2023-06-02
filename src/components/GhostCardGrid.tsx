import AppContext, { Ghost } from "@/context/AppContext";
import { useState, useEffect, useContext } from "react";
import GhostCard from "./GhostCard";

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
    <div className="ghost-grid">
      {state.map((ghost) => (
        <GhostCard ghost={ghost} key={ghost.name} />
      ))}
    </div>
  );
}
