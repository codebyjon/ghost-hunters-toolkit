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
