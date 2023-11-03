import type { Evidence } from "$lib/types/evidence";
import type { Writable } from "svelte/store";

import evidenceData from "$lib/game-data/evidence.json";
import { writable, get } from "svelte/store";

class EvidenceStore {
  store: Writable<Evidence[]>;
  initialState: Evidence[];

  constructor() {
    this.initialState = evidenceData.map((e) => ({ ...e, status: 0 }));
    this.store = writable<Evidence[]>(this.initialState);

    this.stepEvidenceStatus = this.stepEvidenceStatus.bind(this);
    this.resetEvidence = this.resetEvidence.bind(this);
  }

  stepEvidenceStatus(i: number) {
    if (!this.canStepEvidence(i)) return;
    this.store.update((es) => {
      const updatedEvidence = [...es];
      const nextValue =
        updatedEvidence[i].status < 2 ? updatedEvidence[i].status + 1 : 0;

      updatedEvidence[i] = {
        ...updatedEvidence[i],
        status: nextValue,
      };

      return updatedEvidence;
    });
  }

  resetEvidence() {
    this.store.set(this.initialState);
  }

  countFoundEvidence(): number {
    return get(this.store).filter((e) => e.status === 1).length;
  }

  canStepEvidence(i: number): boolean {
    const currentStatus = get(this.store)[i].status;
    if (currentStatus !== 0) return true;
    if (this.countFoundEvidence() < 3) return true;
    return false;
  }

  getEvidenceImage(name: string) {
    return this.initialState.find((e) => e.name === name)?.imagePath;
  }

  getFoundEvidenceNames(): string[] {
    return get(this.store).reduce<string[]>((acc, curr) => {
      if (curr.status !== 1) return acc;
      acc.push(curr.name);
      return acc;
    }, []);
  }

  getExcludedEvidenceNames(): string[] {
    return get(this.store).reduce<string[]>((acc, curr) => {
      if (curr.status !== 2) return acc;
      acc.push(curr.name);
      return acc;
    }, []);
  }
}

export default new EvidenceStore();
