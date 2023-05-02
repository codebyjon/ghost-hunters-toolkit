import type { ChangeEvent } from "react";

import AppContext from "@/context/AppContext";
import { useEffect, useState, useContext } from "react";

type EvidenceFieldProps = {
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const EvidenceField = (props: EvidenceFieldProps) => {
  const { appData } = useContext(AppContext);
  const [checked, setChecked] = useState(false);
  let isExcluded = appData.evidence[props.name] === 2;

  useEffect(() => {
    setChecked((prevState) => appData.evidence[props.name] === 1);
  }, [appData]);

  return (
    <label
      className={`bg-neutral-100 rounded py-2 px-4 cursor-pointer ${
        isExcluded && "line-through"
      }`}
    >
      <input
        id={props.name}
        type="checkbox"
        className="mr-1"
        onChange={props.onChange}
        checked={checked}
      />
      {props.name}
    </label>
  );
};

export default EvidenceField;
