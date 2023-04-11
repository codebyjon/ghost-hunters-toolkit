import { ChangeEvent } from "react";

type EvidenceFieldProps = {
  name: string;
  onClick: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function EvidenceField(props: EvidenceFieldProps) {
  return (
    <label className="bg-neutral-100 rounded py-2 px-4">
      <input type="checkbox" className="mr-1" />
      {props.name}
    </label>
  );
}
