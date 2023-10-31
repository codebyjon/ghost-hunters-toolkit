export default class Evidence {
  name: string;
  imagePath: string;
  found: boolean = false;
  excluded: boolean = false;

  constructor(name: string, imagePath: string) {
    this.name = name;
    this.imagePath = imagePath;
  }

  toggleEvidence() {
    // Mark as found
    if (!this.found && !this.excluded) {
      this.found = true;
      return;
    }

    // Mark found evidence as excluded
    if (this.found && !this.excluded) {
      this.found = false;
      this.excluded = true;
      return;
    }

    // Mark excluded evidence as not found
    this.excluded = false;
  }

  getStatus(): string {
    let status: string = "Not Found";

    if (this.found) status = "Found";
    if (this.excluded) status = "Excluded";

    return `${this.name}: ${status}`;
  }
}
