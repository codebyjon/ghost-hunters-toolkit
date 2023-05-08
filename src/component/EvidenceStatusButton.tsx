import { useContext, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import AppContext from "@/context/AppContext";

type EvidenceStatusButtonState = {
  icon: string;
  action: () => void;
};

type EvidenceStatusButtonProps = {
  name: string;
};

export default function EvidenceStatusButton(props: EvidenceStatusButtonProps) {
  const { evidenceStatus, setEvidenceStatus } = useContext(AppContext);
  const [state, setState] = useState<EvidenceStatusButtonState>({
    icon: "",
    action: () => {},
  });

  useEffect(() => {
    switch (evidenceStatus[props.name]) {
      case "found":
        return setState({
          icon: "ic:baseline-check",
          action: () => setEvidenceStatus(props.name, "excluded"),
        });
      case "excluded":
        return setState({
          icon: "ic:baseline-close",
          action: () => setEvidenceStatus(props.name, "unknown"),
        });
      default:
        return setState({
          icon: "ic:baseline-question-mark",
          action: () => setEvidenceStatus(props.name, "found"),
        });
    }
  }, [evidenceStatus[props.name]]);

  return (
    <>
      <Icon icon={state.icon} className="w-6 h-6" />
      <button onClick={state.action} className="flex">
        <span className="text-sm">{props.name}</span>
      </button>
    </>
  );
}
