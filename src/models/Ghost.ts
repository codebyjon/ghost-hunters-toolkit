type Evidence =
  | "D.O.T.S"
  | "EMF 5"
  | "Fingerprints"
  | "Freezing Temperatures"
  | "Ghost Orbs"
  | "Ghost Writing"
  | "Spirit Box";

export default class Ghost {
  name: string;
  huntThreshold: number;
  evidence: string[];
  tips?: string[];

  constructor(
    name: string,
    huntThreshold: number,
    evidence: string[],
    tips: string[] = []
  ) {
    this.name = name;
    this.huntThreshold = huntThreshold;
    this.evidence = evidence;
    this.tips = tips;
  }
}
