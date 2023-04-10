type EvidenceFielProps = {
  name: string;
};

export default function EvidenceField(props: EvidenceFielProps) {
  return (
    <label className="bg-neutral-100 rounded py-2 px-4">
      <input type="checkbox" className="mr-1" />
      {props.name}
    </label>
  );
}
