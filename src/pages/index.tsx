import EvidenceField from "@/components/EvidenceField";
import GhostCard from "@/components/GhostCard";
import Ghost from "@/models/Ghost";
import ghosts from "@/data/ghosts.json";

type IndexPageProps = {};

export default function IndexPage(props: IndexPageProps) {
  const evidence = [
    "D.O.T.S",
    "EMF 5",
    "Fingerprints",
    "Freezing Temperatures",
    "Ghost Orbs",
    "Ghost Writing",
    "Spirit Box",
  ];

  const ghostCards = ghosts.map((ghost) => {
    return new Ghost(
      ghost.name,
      ghost.huntThreshold,
      ghost.evidence,
      ghost.tips
    );
  });

  return (
    <main className="container mx-auto grid gap-4 p-4">
      <fieldset className="flex flex-wrap border gap-4 p-4">
        <legend className="font-bold">Evidence</legend>
        {evidence.map((evidenceName) => (
          <EvidenceField key={evidenceName} name={evidenceName} />
        ))}
      </fieldset>

      <div className="grid gap-4 grid-cols-ghosts">
        {ghostCards.map((ghost) => (
          <GhostCard ghost={ghost} />
        ))}
      </div>
    </main>
  );
}
