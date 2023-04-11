type Evidence =
  | "D.O.T.S"
  | "EMF 5"
  | "Fingerprints"
  | "Freezing Temperatures"
  | "Ghost Orbs"
  | "Ghost Writing"
  | "Spirit Box";

export default class Ghost {
  constructor(
    public name: string,
    public huntThreshold: number,
    public evidence: string[],
    public tips: string[] | undefined = []
  ) {
    this.name = name;
    this.huntThreshold = huntThreshold;
    this.evidence = evidence;
    this.tips = tips;
  }
}
