import { useContext, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import AppContext from "@/context/AppContext";

type EvidenceStatusButtonState = {
  icon: string;
  style: string;
  action: () => void;
};

type EvidenceStatusButtonProps = {
  name: string;
};

export default function EvidenceStatusButton(props: EvidenceStatusButtonProps) {
  const { evidenceStatus, setEvidenceStatus } = useContext(AppContext);
  const [state, setState] = useState<EvidenceStatusButtonState>({
    icon: "",
    style: "",
    action: () => {},
  });

  useEffect(() => {
    switch (evidenceStatus[props.name]) {
      case "found":
        return setState({
          icon: "ic:baseline-check",
          style: "text-green-500",
          action: () => setEvidenceStatus(props.name, "excluded"),
        });
      case "excluded":
        return setState({
          icon: "ic:baseline-close",
          style: "text-red-500 line-through",
          action: () => setEvidenceStatus(props.name, "unknown"),
        });
      default:
        return setState({
          icon: "ic:baseline-question-mark",
          style: "text-white",
          action: () => setEvidenceStatus(props.name, "found"),
        });
    }
  }, [evidenceStatus[props.name]]);

  return (
    <button
      onClick={state.action}
      className={`grid grid-flow-col gap-2 justify-start items-center border-b py-2 pr-2 w-full text-left ${state.style}`}
    >
      <Icon icon={state.icon} className="w-6 h-6" />
      <span className="text-sm font-medium uppercase">{props.name}</span>
    </button>
  );
}
