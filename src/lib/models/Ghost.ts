export default class Ghost {
  name: string;
  huntThreshold: number;
  evidence: string[];
  tips: string[];

  constructor(
    name: string,
    huntThreshold: number,
    evidence: string[],
    tips: string[]
  ) {
    this.name = name;
    this.huntThreshold = huntThreshold;
    this.evidence = evidence;
    this.tips = tips;
  }

  hasEvidence(evidenceName: string): boolean {
    return this.evidence.includes(evidenceName);
  }
}
