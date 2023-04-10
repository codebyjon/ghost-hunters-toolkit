import Ghost from "@/models/Ghost";

type GhostCardProps = {
  ghost: Ghost;
};

export default function GhostCard(props: GhostCardProps) {
  return (
    <div className="grid gap-4 p-4 bg-neutral-100 rounded content-start">
      <p className="text-3xl font-bold">{props.ghost.name}</p>
      <div>
        <p className="font-bold">Hunt Threshold</p>
        <p className="text-xs">{props.ghost.huntThreshold}% Sanity</p>
      </div>
      <div>
        <p className="font-bold">Evidence</p>
        <ul className="flex flex-wrap gap-4 text-xs">
          <li>{props.ghost.evidence[0]}</li>
          <li>{props.ghost.evidence[1]}</li>
          <li>{props.ghost.evidence[2]}</li>
        </ul>
      </div>
      <div>
        <p className="font-bold">Tips</p>
        <ul className="grid gap-2">
          {props.ghost.tips?.map((tip) => (
            <li className="bg-neutral-200 p-2 rounded text-xs">{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
