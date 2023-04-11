import { ChangeEvent } from "react";

type EvidenceFieldProps = {
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function EvidenceField(props: EvidenceFieldProps) {
  return (
    <label className="bg-neutral-100 rounded py-2 px-4">
      <input
        id={props.name}
        type="checkbox"
        className="mr-1"
        onChange={props.onChange}
      />
      {props.name}
    </label>
  );
}
