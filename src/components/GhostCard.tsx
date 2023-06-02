import type { Ghost } from "@/context/AppContext";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronUpIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import AppContext from "@/context/AppContext";
import { useContext, useState } from "react";
import { Icon } from "@iconify/react";

type GhostCardProps = {
  ghost: Ghost;
}

export default function GhostCard(props: GhostCardProps) {
  const { excludeGhost } = useContext(AppContext);
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => setShowInfo(!showInfo);

  return (
    <div onClick={toggleInfo} className="ghost-card cursor-pointer">
      <div className="flex justify-between">
        <p className="text-3xl font-bold">{props.ghost.name}</p>
        <button onClick={(event: any) => {
          event.stopPropagation();
          excludeGhost(props.ghost.name)
        }}>
          <Icon icon="ic:baseline-close" className="w-6 h-6 hover:text-red-500" />
        </button>
      </div>
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
      <Collapsible.Root open={showInfo}>
        <div className="grid grid-flow-col justify-between mb-4">
          <span className="font-bold">Information</span>
          {showInfo ? <ChevronDownIcon className="w-6 h-6" /> : <ChevronUpIcon className="w-6 h-6" />}
        </div>
        <ul className="grid gap-2">
          {!showInfo && (
            <li className="ghost-info">
              {props.ghost.tips[0]}
            </li>
          )}
          <Collapsible.Content className="grid gap-2">
            {props.ghost.tips?.map((tip) => (
              <li key={tip} className="ghost-info">
                {tip}
              </li>
            ))}
          </Collapsible.Content>
        </ul>
      </Collapsible.Root>
    </div>
  )
}